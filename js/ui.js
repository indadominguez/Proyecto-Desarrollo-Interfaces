// js/ui.js

function crearTarjetaIngrediente(ingrediente) {
    const articulo = document.createElement("article");
    articulo.classList.add("tarjeta");
    articulo.dataset.id = ingrediente.id;

    const titulo = document.createElement("h3");
    titulo.textContent = ingrediente.nombre;

    const categoria = document.createElement("p");
    categoria.textContent = ingrediente.categoria;

    const disponibilidad = document.createElement("p");
    disponibilidad.textContent = ingrediente.cantidadCasa;

    articulo.append(titulo, categoria, disponibilidad);
    return articulo;
}

function crearTarjetaReceta(receta) {
    const articulo = document.createElement("article");
    articulo.classList.add("tarjeta");
    articulo.dataset.id = receta.id;

    const titulo = document.createElement("h3");
    titulo.textContent = receta.titulo;

    const descripcion = document.createElement("p");
    descripcion.textContent = receta.descripcion;

    const info = document.createElement("p");
    info.textContent = `${receta.tiempo} · Dificultad: ${receta.dificultad}`;

    articulo.append(titulo, descripcion, info);
    return articulo;
}

function crearDetalleIngrediente(ingrediente) {
    const contenedor = document.createElement("article");
    contenedor.classList.add("ficha-detalle");

    const titulo = document.createElement("h2");
    titulo.textContent = ingrediente.nombre;

    const categoria = document.createElement("p");
    categoria.textContent = `Categoría: ${ingrediente.categoria}`;

    const disponibilidad = document.createElement("p");
    disponibilidad.textContent = `En casa: ${ingrediente.cantidadCasa}`;

    const descripcion = document.createElement("p");
    descripcion.textContent = ingrediente.descripcion;

    const macros = document.createElement("p");
    macros.textContent = `${ingrediente.kcal} kcal · P: ${ingrediente.proteinas} g · G: ${ingrediente.grasas} g · HC: ${ingrediente.carbohidratos} g`;

    contenedor.append(titulo, categoria, disponibilidad, descripcion, macros);
    return contenedor;
}

function crearDetalleReceta(receta, listaIngredientes) {
    const contenedor = document.createElement("article");
    contenedor.classList.add("ficha-detalle");

    const titulo = document.createElement("h2");
    titulo.textContent = receta.titulo;

    const info = document.createElement("p");
    info.textContent = `${receta.tiempo} · ${receta.kcal} kcal · ${receta.costeRacion.toFixed(2)} € / ración · Dificultad: ${receta.dificultad}`;

    const descripcion = document.createElement("p");
    descripcion.textContent = receta.descripcion;

    const etiquetasTexto = Array.isArray(receta.etiquetas) && receta.etiquetas.length
        ? `Etiquetas: ${receta.etiquetas.join(", ")}`
        : "";
    const etiquetas = document.createElement("p");
    etiquetas.textContent = etiquetasTexto;

    const subtituloIngredientes = document.createElement("h3");
    subtituloIngredientes.textContent = "Ingredientes";

    const lista = document.createElement("ul");
    if (Array.isArray(receta.ingredientesIds)) {
        receta.ingredientesIds.forEach((idBuscado) => {
            const encontrado = listaIngredientes.find((ing) => String(ing.id) === String(idBuscado));

            const li = document.createElement("li");
            li.textContent = encontrado ? encontrado.nombre : `Ingrediente #${idBuscado}`;
            lista.append(li);
        });
    }

    contenedor.append(titulo, info, descripcion);
    if (etiquetasTexto) {
        contenedor.append(etiquetas);
    }
    contenedor.append(subtituloIngredientes, lista);
    return contenedor;
}

export {
    crearTarjetaIngrediente,
    crearTarjetaReceta,
    crearDetalleIngrediente,
    crearDetalleReceta
};