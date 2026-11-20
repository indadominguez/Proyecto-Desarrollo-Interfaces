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

    const resumen = document.createElement("p");
    resumen.textContent = receta.resumen;

    const info = document.createElement("p");
    info.textContent = `${receta.tiempoMin} min · ${receta.dificultad}`;

    articulo.append(titulo, resumen, info);
    return articulo;
}

export { crearTarjetaIngrediente, crearTarjetaReceta };