// js/registro.js
// Formulario de registro de usuarios y vista «Usuarios registrados».

import { borrar } from "./almacen.js";
import {
    validarRequerido,
    validarLongitud,
    validarUsuario,
    validarEmail,
    validarContrasena,
    validarRepeticion,
    validarFechaNacimiento,
    validarCondiciones
} from "./validacion.js";
import { crearElementoUsuario } from "./ui.js";

const COLECCION = "usuarios";
const CLAVE = "eatbens:usuarios";

function leerUsuarios() {
    try {
        const contenido = localStorage.getItem(CLAVE);
        if (!contenido) return [];

        const datos = JSON.parse(contenido);
        return Array.isArray(datos) ? datos : [];
    } catch {
        return [];
    }
}

function guardarUsuarios(usuarios) {
    localStorage.setItem(CLAVE, JSON.stringify(usuarios));
}

function generarId() {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
        return crypto.randomUUID();
    }

    return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function buscarUsuario(id) {
    return leerUsuarios().find((usuario) => String(usuario.id) === String(id)) || null;
}

const controles = {
    usuario: null,
    correo: null,
    contrasena: null,
    repeticion: null,
    nacimiento: null,
    condiciones: null
};

const tocados = new Set();

let formulario;
let listado;
let vacio;
let idOculto;
let modo;
let estado;
let cancelar;
let seguridad;
let botonEnviar;
let campos = [];

function iniciarRegistro() {
    formulario = document.querySelector("#formulario-registro");

    if (!formulario) return;

    listado = document.querySelector("#listado-usuarios");
    vacio = document.querySelector("#usuarios-vacio");
    idOculto = document.querySelector("#registro-id");
    modo = document.querySelector("#registro-modo");
    estado = document.querySelector("#estado-registro");
    cancelar = document.querySelector("#registro-cancelar");
    seguridad = document.querySelector("#registro-seguridad");
    botonEnviar = formulario.querySelector('button[type="submit"]');

    controles.usuario = document.querySelector("#registro-usuario");
    controles.correo = document.querySelector("#registro-correo");
    controles.contrasena = document.querySelector("#registro-contrasena");
    controles.repeticion = document.querySelector("#registro-contrasena-repetida");
    controles.nacimiento = document.querySelector("#registro-nacimiento");
    controles.condiciones = document.querySelector("#registro-condiciones");

    campos = Object.values(controles).filter(Boolean);

    formulario.addEventListener("submit", manejarEnvio);
    cancelar.addEventListener("click", reiniciarFormulario);

    campos.forEach((campo) => {
        campo.addEventListener("blur", () => {
            tocados.add(campo);
            validarYMostrar(campo);
        });

        campo.addEventListener("input", () => {
            if (!tocados.has(campo)) return;
            validarYMostrar(campo);
        });
    });

    controles.contrasena.addEventListener("input", () => {
        if (seguridad.hidden) return;
        if (!tocados.has(controles.repeticion)) return;

        validarYMostrar(controles.repeticion);
    });

    listado.addEventListener("click", manejarAccionUsuario);

    limpiarErrores();
    pintarUsuarios();
}

function manejarEnvio(evento) {
    evento.preventDefault();

    const esEdicion = idOculto.value !== "";
    const primerInvalido = validarFormulario(esEdicion);

    if (primerInvalido) {
        primerInvalido.focus();
        return;
    }

    const datos = {
        usuario: controles.usuario.value.trim(),
        correo: controles.correo.value.trim(),
        fechaNacimiento: controles.nacimiento.value,
        condiciones: controles.condiciones.checked
    };

    if (esEdicion) {
        const usuarios = leerUsuarios();
        const indice = usuarios.findIndex((usuario) => String(usuario.id) === String(idOculto.value));

        if (indice !== -1) {
            usuarios[indice] = {
                ...usuarios[indice],
                ...datos,
                id: usuarios[indice].id
            };
            guardarUsuarios(usuarios);
        }
    } else {
        // La contraseña se valida, pero no forma parte del dato guardado.
        const usuarios = leerUsuarios();

        usuarios.push({
            ...datos,
            id: generarId(),
            creadoEn: new Date().toISOString()
        });
        guardarUsuarios(usuarios);
    }

    reiniciarFormulario();
    pintarUsuarios();

    estado.textContent = esEdicion
        ? "Usuario actualizado correctamente."
        : "Cuenta creada correctamente.";
}

function validarFormulario(esEdicion) {
    let primerInvalido = null;

    const camposAValidar = esEdicion
        ? campos.filter((campo) => campo !== controles.contrasena && campo !== controles.repeticion)
        : campos;

    camposAValidar.forEach((campo) => {
        tocados.add(campo);

        const error = validarCampo(campo);
        mostrarError(campo, error);

        if (error && !primerInvalido) {
            primerInvalido = campo;
        }
    });

    return primerInvalido;
}

function validarCampo(campo) {
    if (campo.type === "checkbox") {
        return campo === controles.condiciones
            ? validarCondiciones(campo.checked)
            : null;
    }

    const etiqueta = obtenerEtiqueta(campo);

    if (campo.required) {
        const errorRequerido = validarRequerido(campo.value, etiqueta);
        if (errorRequerido) return errorRequerido;
    }

    if (!campo.value) return null;

    const errorLongitud = validarLongitud(
        campo.value,
        campo.minLength,
        campo.maxLength,
        etiqueta
    );
    if (errorLongitud) return errorLongitud;

    switch (campo.id) {
    case "registro-usuario":
        return validarUsuario(campo.value);
    case "registro-correo":
        return validarEmail(campo.value);
    case "registro-contrasena":
        return validarContrasena(campo.value);
    case "registro-contrasena-repetida":
        return validarRepeticion(campo.value, controles.contrasena.value);
    case "registro-nacimiento":
        return validarFechaNacimiento(campo.value, campo.min, campo.max);
    default:
        return null;
    }
}

function validarYMostrar(campo) {
    const error = validarCampo(campo);
    mostrarError(campo, error);
}

function mostrarError(campo, mensaje) {
    const contenedorError = document.getElementById(`error-${campo.id}`);
    const ayuda = document.getElementById(`ayuda-${campo.id}`);

    if (contenedorError) {
        contenedorError.textContent = mensaje || "";
    }

    campo.setAttribute("aria-invalid", mensaje ? "true" : "false");

    // aria-describedby siempre apunta a la ayuda y al error del campo.
    const descritos = [];
    if (ayuda) descritos.push(ayuda.id);
    if (contenedorError) descritos.push(contenedorError.id);

    if (descritos.length) {
        campo.setAttribute("aria-describedby", descritos.join(" "));
    } else {
        campo.removeAttribute("aria-describedby");
    }
}

function obtenerEtiqueta(campo) {
    const etiqueta = document.querySelector(`label[for="${campo.id}"]`);

    return etiqueta
        ? etiqueta.textContent.trim()
        : "Este campo";
}

function manejarAccionUsuario(evento) {
    const boton = evento.target.closest("button[data-accion]");
    if (!boton) return;

    const articulo = boton.closest(".usuario");
    if (!articulo) return;

    const id = articulo.dataset.id;

    if (boton.dataset.accion === "editar") {
        cargarUsuario(id);
    } else if (boton.dataset.accion === "borrar") {
        eliminarUsuario(id);
    }
}

function cargarUsuario(id) {
    const usuario = buscarUsuario(id);
    if (!usuario) return;

    idOculto.value = usuario.id;
    controles.usuario.value = usuario.usuario;
    controles.correo.value = usuario.correo;
    controles.nacimiento.value = usuario.fechaNacimiento;
    controles.condiciones.checked = Boolean(usuario.condiciones);
    controles.contrasena.value = "";
    controles.repeticion.value = "";

    seguridad.hidden = true;
    modo.hidden = false;
    modo.textContent = `Editando la cuenta de ${usuario.usuario}.`;
    cancelar.hidden = false;
    botonEnviar.textContent = "Guardar cambios";

    limpiarErrores();
    estado.textContent = "";

    formulario.scrollIntoView({ behavior: "smooth", block: "start" });
    controles.usuario.focus({ preventScroll: true });
}

function eliminarUsuario(id) {
    const usuario = buscarUsuario(id);
    if (!usuario) return;

    const confirmado = window.confirm(
        `¿Seguro que quieres borrar la cuenta de ${usuario.usuario}?`
    );

    if (!confirmado) return;

    borrar(COLECCION, id);

    if (idOculto.value === id) {
        reiniciarFormulario();
    }

    pintarUsuarios();
    estado.textContent = "Usuario eliminado correctamente.";
}

function pintarUsuarios() {
    if (!listado) return;

    const usuarios = leerUsuarios();
    listado.replaceChildren();

    usuarios.forEach((usuario) => {
        listado.append(crearElementoUsuario(usuario));
    });

    listado.hidden = usuarios.length === 0;

    if (vacio) {
        vacio.hidden = usuarios.length > 0;
    }
}

function limpiarErrores() {
    tocados.clear();
    campos.forEach((campo) => mostrarError(campo, null));
}

function reiniciarFormulario() {
    formulario.reset();

    idOculto.value = "";
    seguridad.hidden = false;
    modo.hidden = true;
    modo.textContent = "";
    cancelar.hidden = true;
    botonEnviar.textContent = "Crear cuenta";

    limpiarErrores();
    estado.textContent = "";
}

export { iniciarRegistro };
