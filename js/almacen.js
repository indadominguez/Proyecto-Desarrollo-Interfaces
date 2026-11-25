// js/almacen.js
// Solo se implementa borrar. El resto de funciones se dejan vacías a propósito.

/* eslint-disable no-unused-vars */
function obtenerTodos(coleccion) {
}

function obtenerPorId(coleccion, id) {
}

function crear(coleccion, dato) {
}

function actualizar(coleccion, id, dato) {
}
/* eslint-enable no-unused-vars */

function borrar(coleccion, id) {
    const clave = `eatbens:${coleccion}`;

    try {
        const contenido = localStorage.getItem(clave);
        const datos = contenido ? JSON.parse(contenido) : [];

        if (!Array.isArray(datos)) return false;

        const restantes = datos.filter((elemento) => String(elemento.id) !== String(id));

        if (restantes.length === datos.length) return false;

        localStorage.setItem(clave, JSON.stringify(restantes));
        return true;
    } catch {
        return false;
    }
}

export {
    obtenerTodos,
    obtenerPorId,
    crear,
    actualizar,
    borrar
};
