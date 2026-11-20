// js/main.js

import { ingredientes, recetas } from "./datos.js";
import { crearTarjetaIngrediente, crearTarjetaReceta } from "./ui.js";

// Selectores
const listadoIngredientes = document.querySelector("#listado-ingredientes");
const listadoRecetas = document.querySelector("#listado-recetas");
const enlacesMenu = document.querySelectorAll(".sidebar-link");

// Listeners
document.addEventListener("DOMContentLoaded", () => {
    marcarMenu();
    iniciarPagina();
});

// Limpieza 
function limpiarHTML(contenedor) {
    if (!contenedor) return;
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

function pintarIngredientes(lista) {
    if (!listadoIngredientes) return;
    limpiarHTML(listadoIngredientes);

    lista.forEach((ingrediente) => {
        listadoIngredientes.append(crearTarjetaIngrediente(ingrediente));
    });
}

function pintarRecetas(lista) {
    if (!listadoRecetas) return;
    limpiarHTML(listadoRecetas);

    lista.forEach((receta) => {
        listadoRecetas.append(crearTarjetaReceta(receta));
    });
}

// sirve para detectar en qué página HTML está el usuario y resalta visualmente el enlace en el menú lateral.
function marcarMenu() {
    const archivo = window.location.pathname.split("/").pop() || "index.html";

    enlacesMenu.forEach((enlace) => {
        if (enlace.getAttribute("href") === archivo) {
            enlace.classList.add("active");
            enlace.setAttribute("aria-current", "page");
        }
    });
}

function iniciarPagina() {
    const pagina = document.body.dataset.page;

    if (pagina === "ingredientes") {
        pintarIngredientes(ingredientes);
    } else if (pagina === "recetas") {
        pintarRecetas(recetas);
    }
}