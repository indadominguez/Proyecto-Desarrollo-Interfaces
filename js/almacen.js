// js/almacen.js
// Capa de acceso a datos: solo estas cinco funciones gestionan localStorage.

const PREFIJO = "eatbens:";

function obtenerTodos(coleccion) {
    try {
        const contenido = localStorage.getItem(`${PREFIJO}${coleccion}`);
        if (!contenido) return [];

        const datos = JSON.parse(contenido);
        return Array.isArray(datos) ? datos : [];
    } catch {
        return [];
    }
}

function obtenerPorId(coleccion, id) {
    return obtenerTodos(coleccion).find((dato) => String(dato.id) === String(id)) || null;
}

function crear(coleccion, dato) {
    const datos = obtenerTodos(coleccion);
    const id = dato.id ?? (
        typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
            ? crypto.randomUUID()
            : `id-${Date.now()}-${Math.random().toString(16).slice(2)}`
    );
    const nuevoDato = { ...dato, id };

    datos.push(nuevoDato);
    localStorage.setItem(`${PREFIJO}${coleccion}`, JSON.stringify(datos));

    return nuevoDato;
}

function actualizar(coleccion, id, dato) {
    const datos = obtenerTodos(coleccion);
    const indice = datos.findIndex((elemento) => String(elemento.id) === String(id));

    if (indice === -1) return null;

    datos[indice] = { ...datos[indice], ...dato, id: datos[indice].id };
    localStorage.setItem(`${PREFIJO}${coleccion}`, JSON.stringify(datos));

    return datos[indice];
}

function borrar(coleccion, id) {
    const datos = obtenerTodos(coleccion);
    const restantes = datos.filter((elemento) => String(elemento.id) !== String(id));

    if (restantes.length === datos.length) return false;

    localStorage.setItem(`${PREFIJO}${coleccion}`, JSON.stringify(restantes));
    return true;
}

export {
    obtenerTodos,
    obtenerPorId,
    crear,
    actualizar,
    borrar
};
