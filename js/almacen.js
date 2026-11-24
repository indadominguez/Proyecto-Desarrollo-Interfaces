// js/almacen.js
// Capa de acceso a datos: el resto de la aplicación solo lee y escribe a través de este módulo.

const PREFIJO = "eatbens:";

function claveColeccion(coleccion) {
    return `${PREFIJO}${coleccion}`;
}

function leer(coleccion) {
    try {
        const contenido = localStorage.getItem(claveColeccion(coleccion));
        if (!contenido) return [];

        const datos = JSON.parse(contenido);
        return Array.isArray(datos) ? datos : [];
    } catch {
        return [];
    }
}

function escribir(coleccion, datos) {
    localStorage.setItem(claveColeccion(coleccion), JSON.stringify(datos));
}

function generarId() {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
        return crypto.randomUUID();
    }

    return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function obtenerTodos(coleccion) {
    return leer(coleccion);
}

function obtenerPorId(coleccion, id) {
    return leer(coleccion).find((dato) => String(dato.id) === String(id)) || null;
}

function crear(coleccion, dato) {
    const datos = leer(coleccion);
    const nuevoDato = { ...dato, id: dato.id ?? generarId() };

    datos.push(nuevoDato);
    escribir(coleccion, datos);

    return nuevoDato;
}

function actualizar(coleccion, id, dato) {
    const datos = leer(coleccion);
    const indice = datos.findIndex((elemento) => String(elemento.id) === String(id));

    if (indice === -1) return null;

    datos[indice] = { ...datos[indice], ...dato, id: datos[indice].id };
    escribir(coleccion, datos);

    return datos[indice];
}

function borrar(coleccion, id) {
    const datos = leer(coleccion);
    const restantes = datos.filter((elemento) => String(elemento.id) !== String(id));

    if (restantes.length === datos.length) return false;

    escribir(coleccion, restantes);
    return true;
}

export {
    obtenerTodos,
    obtenerPorId,
    crear,
    actualizar,
    borrar
};
