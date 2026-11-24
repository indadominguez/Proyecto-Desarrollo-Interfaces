// js/contacto.js
// Formulario de contacto y vista «Mensajes enviados».

import {
    obtenerTodos,
    obtenerPorId,
    crear,
    borrar
} from "./almacen.js";
import {
    validarRequerido,
    validarLongitud,
    validarEmail,
    validarTelefono
} from "./validacion.js";
import { crearElementoMensaje } from "./ui.js";

const COLECCION = "mensajes";
const COOKIE_CONTACTO = "eatbens_ultimo_contacto";
const DIAS_COOKIE = 365;

const controles = {
    nombre: null,
    correo: null,
    telefono: null,
    preferencia: null,
    motivo: null,
    mensaje: null
};

const tocados = new Set();

let formulario;
let listado;
let vacio;
let estadoFormulario;
let estadoMensajes;
let contador;
let ayudaTelefono;
let campos = [];

function iniciarContacto() {
    formulario = document.querySelector("#formulario-contacto");

    if (!formulario) return;

    controles.nombre = document.querySelector("#contacto-nombre");
    controles.correo = document.querySelector("#contacto-correo");
    controles.telefono = document.querySelector("#contacto-telefono");
    controles.preferencia = document.querySelector("#contacto-preferencia-llamada");
    controles.motivo = document.querySelector("#contacto-motivo");
    controles.mensaje = document.querySelector("#contacto-mensaje");

    listado = document.querySelector("#listado-mensajes");
    vacio = document.querySelector("#mensajes-vacio");
    estadoFormulario = document.querySelector("#estado-contacto");
    estadoMensajes = document.querySelector("#estado-mensajes");
    contador = document.querySelector("#contador-contacto-mensaje");
    ayudaTelefono = document.querySelector("#ayuda-contacto-telefono");

    campos = [
        controles.nombre,
        controles.correo,
        controles.telefono,
        controles.motivo,
        controles.mensaje
    ];

    formulario.addEventListener("submit", manejarEnvio);

    campos.forEach((campo) => {
        campo.addEventListener("blur", () => {
            tocados.add(campo);
            validarYMostrar(campo);
        });

        campo.addEventListener("input", () => {
            if (campo === controles.mensaje) {
                actualizarContador();
            }

            if (!tocados.has(campo)) return;
            validarYMostrar(campo);
        });
    });

    controles.motivo.addEventListener("change", () => {
        tocados.add(controles.motivo);
        validarYMostrar(controles.motivo);
    });

    controles.preferencia.addEventListener("change", manejarPreferencia);
    listado.addEventListener("click", manejarAccionMensaje);

    rellenarDesdeCookie();
    sincronizarPreferencia();
    actualizarContador();
    mostrarError(controles.telefono, null);
    mostrarError(controles.mensaje, null);
    pintarMensajes();
}

function manejarEnvio(evento) {
    evento.preventDefault();

    const primerInvalido = validarFormulario();

    if (primerInvalido) {
        primerInvalido.focus();
        return;
    }

    const opcionMotivo = controles.motivo.selectedOptions[0];
    const mensaje = {
        nombre: controles.nombre.value.trim(),
        correo: controles.correo.value.trim(),
        telefono: controles.telefono.value.trim(),
        preferenciaLlamada: controles.preferencia.checked,
        motivo: controles.motivo.value,
        motivoTexto: opcionMotivo ? opcionMotivo.textContent.trim() : controles.motivo.value,
        mensaje: controles.mensaje.value.trim(),
        enviadoEn: new Date().toISOString()
    };

    crear(COLECCION, mensaje);
    guardarCookieContacto(mensaje.nombre, mensaje.correo);

    reiniciarFormulario();
    pintarMensajes();

    estadoFormulario.textContent = "Mensaje enviado correctamente.";

    if (estadoMensajes) {
        estadoMensajes.textContent = "";
    }
}

function validarFormulario() {
    let primerInvalido = null;

    campos.forEach((campo) => {
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
    if (campo === controles.telefono) {
        if (controles.preferencia.checked && !campo.value.trim()) {
            return "El teléfono es obligatorio porque has pedido que te llamemos.";
        }

        return validarTelefono(campo.value);
    }

    const etiqueta = obtenerEtiqueta(campo);

    if (campo.required) {
        const errorRequerido = validarRequerido(campo.value, etiqueta);
        if (errorRequerido) return errorRequerido;
    }

    const valor = campo.value.trim();
    if (!valor) return null;

    const errorLongitud = validarLongitud(
        valor,
        campo.minLength,
        campo.maxLength,
        etiqueta
    );
    if (errorLongitud) return errorLongitud;

    if (campo === controles.correo) {
        return validarEmail(valor);
    }

    return null;
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

    const descritos = [];
    if (ayuda) descritos.push(ayuda.id);
    if (campo === controles.mensaje && contador) descritos.push(contador.id);
    if (mensaje && contenedorError) descritos.push(contenedorError.id);

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

function actualizarContador() {
    if (!contador || !controles.mensaje) return;

    const longitud = controles.mensaje.value.length;
    const maximo = controles.mensaje.maxLength > 0 ? controles.mensaje.maxLength : 0;
    const minimo = controles.mensaje.minLength > 0 ? controles.mensaje.minLength : 0;
    const textoMinimo = minimo ? ` · mínimo ${minimo}` : "";

    contador.textContent = `${longitud} / ${maximo} caracteres${textoMinimo}`;
}

function sincronizarPreferencia() {
    const obligatorio = controles.preferencia.checked;

    controles.telefono.required = obligatorio;
    controles.telefono.setAttribute("aria-required", String(obligatorio));

    if (ayudaTelefono) {
        ayudaTelefono.textContent = obligatorio
            ? "Obligatorio porque has pedido que te llamemos."
            : "Opcional, salvo que marques «Prefiero que me llaméis».";
    }
}

function manejarPreferencia() {
    sincronizarPreferencia();

    if (controles.preferencia.checked) {
        tocados.add(controles.telefono);
    }

    validarYMostrar(controles.telefono);
}

function guardarCookieContacto(nombre, correo) {
    const datos = encodeURIComponent(JSON.stringify({ nombre, correo }));
    const caducidad = new Date();
    caducidad.setDate(caducidad.getDate() + DIAS_COOKIE);

    document.cookie = `${COOKIE_CONTACTO}=${datos}; expires=${caducidad.toUTCString()}; path=/; SameSite=Lax`;
}

function leerCookie(nombre) {
    if (!document.cookie) return null;

    const prefijo = `${nombre}=`;
    const encontrada = document.cookie
        .split("; ")
        .find((parte) => parte.startsWith(prefijo));

    return encontrada ? encontrada.slice(prefijo.length) : null;
}

function rellenarDesdeCookie() {
    const valor = leerCookie(COOKIE_CONTACTO);
    if (!valor) return;

    try {
        const datos = JSON.parse(decodeURIComponent(valor));

        if (datos && typeof datos.nombre === "string") {
            controles.nombre.value = datos.nombre;
        }

        if (datos && typeof datos.correo === "string") {
            controles.correo.value = datos.correo;
        }
    } catch {
        // Si la cookie está corrupta, se ignora y el formulario queda vacío.
    }
}

function manejarAccionMensaje(evento) {
    const boton = evento.target.closest('button[data-accion="borrar"]');
    if (!boton) return;

    const articulo = boton.closest(".mensaje");
    if (!articulo) return;

    eliminarMensaje(articulo.dataset.id);
}

function eliminarMensaje(id) {
    const mensaje = obtenerPorId(COLECCION, id);
    if (!mensaje) return;

    const confirmado = window.confirm(
        `¿Seguro que quieres borrar el mensaje de ${mensaje.nombre}?`
    );

    if (!confirmado) return;

    borrar(COLECCION, id);
    pintarMensajes();

    if (estadoMensajes) {
        estadoMensajes.textContent = "Mensaje eliminado correctamente.";
    }
}

function pintarMensajes() {
    if (!listado) return;

    const mensajes = obtenerTodos(COLECCION).slice().reverse();
    listado.replaceChildren();

    mensajes.forEach((mensaje) => {
        listado.append(crearElementoMensaje(mensaje));
    });

    listado.hidden = mensajes.length === 0;

    if (vacio) {
        vacio.hidden = mensajes.length > 0;
    }
}

function limpiarErrores() {
    tocados.clear();
    campos.forEach((campo) => mostrarError(campo, null));
}

function reiniciarFormulario() {
    formulario.reset();
    sincronizarPreferencia();
    actualizarContador();
    limpiarErrores();
    estadoFormulario.textContent = "";
}

export { iniciarContacto };
