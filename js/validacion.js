// js/validacion.js
// Funciones de validación de los formularios.
// Cada función recibe un valor y devuelve el mensaje de error o null.

const EXPRESION_CORREO = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
const EXPRESION_USUARIO = /^[\p{L}\p{N}._-]+$/u;
const EXPRESION_MAYUSCULA = /[A-ZÁÉÍÓÚÜÑ]/;
const EXPRESION_NUMERO = /\d/;

function validarRequerido(valor, etiqueta = "Este campo") {
    const vacio = typeof valor === "boolean"
        ? !valor
        : String(valor).trim() === "";

    return vacio ? `El campo «${etiqueta}» es obligatorio.` : null;
}

function validarLongitud(valor, minimo, maximo, etiqueta = "Este campo") {
    const texto = String(valor);

    if (minimo > 0 && texto.length < minimo) {
        return `El campo «${etiqueta}» debe tener al menos ${minimo} caracteres.`;
    }

    if (maximo > 0 && texto.length > maximo) {
        return `El campo «${etiqueta}» no puede superar los ${maximo} caracteres.`;
    }

    return null;
}

function validarUsuario(valor) {
    if (!valor) return null;

    return EXPRESION_USUARIO.test(String(valor))
        ? null
        : "El nombre de usuario solo puede contener letras, números, puntos, guiones y guiones bajos.";
}

function validarEmail(valor) {
    if (!valor) return null;

    return EXPRESION_CORREO.test(String(valor))
        ? null
        : "Introduce un correo electrónico válido.";
}

function validarContrasena(valor) {
    if (!valor) return null;

    if (!EXPRESION_MAYUSCULA.test(String(valor))) {
        return "La contraseña debe incluir al menos una mayúscula.";
    }

    if (!EXPRESION_NUMERO.test(String(valor))) {
        return "La contraseña debe incluir al menos un número.";
    }

    return null;
}

function validarRepeticion(valor, contrasena) {
    if (!valor) return null;

    return String(valor) === String(contrasena)
        ? null
        : "Las contraseñas no coinciden.";
}

function validarFechaNacimiento(valor, fechaMinima, fechaMaxima, hoy = new Date()) {
    if (!valor) return null;

    const fecha = new Date(`${valor}T00:00:00`);
    if (Number.isNaN(fecha.getTime())) {
        return "Introduce una fecha de nacimiento válida.";
    }

    if (fechaMinima) {
        const minimo = new Date(`${fechaMinima}T00:00:00`);
        if (fecha < minimo) {
            return "La fecha de nacimiento no es válida.";
        }
    }

    const hoySinHora = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
    if (fecha > hoySinHora) {
        return "La fecha de nacimiento no puede ser futura.";
    }

    if (fechaMaxima) {
        const maximo = new Date(`${fechaMaxima}T23:59:59`);
        if (fecha > maximo) {
            return "No cumples la edad mínima para registrarte.";
        }
    }

    return null;
}

function validarCondiciones(aceptadas) {
    return aceptadas
        ? null
        : "Debes aceptar las condiciones para registrarte.";
}

export {
    validarRequerido,
    validarLongitud,
    validarUsuario,
    validarEmail,
    validarContrasena,
    validarRepeticion,
    validarFechaNacimiento,
    validarCondiciones
};
