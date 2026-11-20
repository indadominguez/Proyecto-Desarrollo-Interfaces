// js/main.js

import { ingredientes, recetas } from "./datos.js";
import {
    crearTarjetaIngrediente,
    crearTarjetaReceta,
    crearDetalleIngrediente,
    crearDetalleReceta
} from "./ui.js";

// Selectores
const listadoIngredientes = document.querySelector("#listado-ingredientes");
const listadoRecetas = document.querySelector("#listado-recetas");
const detalleIngrediente = document.querySelector("#detalle-ingrediente");
const detalleReceta = document.querySelector("#detalle-receta");
const enlacesMenu = document.querySelectorAll(".sidebar-link");

// Listeners
document.addEventListener("DOMContentLoaded", () => {
    marcarMenu();
    iniciarPagina();
});

if (listadoIngredientes) {
    listadoIngredientes.addEventListener("click", (e) => {
        const tarjeta = e.target.closest(".tarjeta");
        if (!tarjeta) return;

        mostrarDetalleIngrediente(tarjeta.dataset.id);
    });
}

if (listadoRecetas) {
    listadoRecetas.addEventListener("click", (e) => {
        const tarjeta = e.target.closest(".tarjeta");
        if (!tarjeta) return;

        mostrarDetalleReceta(tarjeta.dataset.id);
    });
}

// Limpieza y renderizado
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

function pintarDetalle(contenedor, nodoDetalle) {
    if (!contenedor) return;
    const fichaAnterior = contenedor.querySelector(".ficha-detalle");
    if (fichaAnterior) {
        fichaAnterior.remove();
    }
    contenedor.append(nodoDetalle);
}

// Detalle y arranque
function marcarTarjetaActiva(contenedor, id) {
    if (!contenedor) return;
    const tarjetas = contenedor.querySelectorAll(".tarjeta");
    tarjetas.forEach((tarjeta) => {
        tarjeta.classList.toggle("activa", String(tarjeta.dataset.id) === String(id));
    });
}

function mostrarDetalleIngrediente(id) {
    const ingrediente = ingredientes.find((item) => String(item.id) === String(id));
    if (!ingrediente) return;

    marcarTarjetaActiva(listadoIngredientes, id);
    pintarDetalle(detalleIngrediente, crearDetalleIngrediente(ingrediente));
}

function mostrarDetalleReceta(id) {
    const receta = recetas.find((item) => String(item.id) === String(id));
    if (!receta) return;

    marcarTarjetaActiva(listadoRecetas, id);
    pintarDetalle(detalleReceta, crearDetalleReceta(receta, ingredientes));
}

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

