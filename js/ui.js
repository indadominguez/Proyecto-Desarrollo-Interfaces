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
    contenedor.classList.add("detalle");

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
    contenedor.classList.add("detalle");

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
            if (encontrado) {
                const enlace = document.createElement("a");
                enlace.href = `ingredientes.html#ingrediente-${encontrado.id}`;
                enlace.textContent = encontrado.nombre;
                li.append(enlace);
            } else {
                li.textContent = `Ingrediente #${idBuscado}`;
            }
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

function formatearFecha(fechaISO) {
    const fecha = new Date(`${fechaISO}T00:00:00`);

    if (Number.isNaN(fecha.getTime())) {
        return "Fecha no disponible";
    }

    return fecha.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}

function crearElementoUsuario(usuario) {
    const elemento = document.createElement("li");
    elemento.classList.add("usuarios__elemento");

    const articulo = document.createElement("article");
    articulo.classList.add("usuario");
    articulo.dataset.id = usuario.id;

    const cabecera = document.createElement("header");
    cabecera.classList.add("usuario__cabecera");

    const nombre = document.createElement("h3");
    nombre.classList.add("usuario__nombre");
    nombre.textContent = usuario.usuario;

    const correo = document.createElement("p");
    correo.classList.add("usuario__correo");
    correo.textContent = usuario.correo;

    cabecera.append(nombre, correo);

    const nacimiento = document.createElement("p");
    nacimiento.classList.add("usuario__nacimiento");
    nacimiento.textContent = `Fecha de nacimiento: ${formatearFecha(usuario.fechaNacimiento)}`;

    const condiciones = document.createElement("p");
    condiciones.classList.add("usuario__condiciones");
    condiciones.textContent = usuario.condiciones
        ? "Condiciones aceptadas"
        : "Condiciones pendientes";

    const acciones = document.createElement("p");
    acciones.classList.add("usuario__acciones");

    const botonEditar = document.createElement("button");
    botonEditar.type = "button";
    botonEditar.classList.add("usuario__boton");
    botonEditar.dataset.accion = "editar";
    botonEditar.textContent = "Editar";

    const botonBorrar = document.createElement("button");
    botonBorrar.type = "button";
    botonBorrar.classList.add("usuario__boton", "usuario__boton--borrar");
    botonBorrar.dataset.accion = "borrar";
    botonBorrar.textContent = "Borrar";

    acciones.append(botonEditar, botonBorrar);
    articulo.append(cabecera, nacimiento, condiciones, acciones);
    elemento.append(articulo);

    return elemento;
}

function formatearFechaHora(fechaISO) {
    const fecha = new Date(fechaISO);

    if (Number.isNaN(fecha.getTime())) {
        return "Fecha no disponible";
    }

    return fecha.toLocaleString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
}

function crearElementoMensaje(mensaje) {
    const elemento = document.createElement("li");
    elemento.classList.add("mensajes__elemento");

    const articulo = document.createElement("article");
    articulo.classList.add("mensaje");
    articulo.dataset.id = mensaje.id;

    const cabecera = document.createElement("header");
    cabecera.classList.add("mensaje__cabecera");

    const nombre = document.createElement("h3");
    nombre.classList.add("mensaje__nombre");
    nombre.textContent = mensaje.nombre;

    const fecha = document.createElement("p");
    fecha.classList.add("mensaje__fecha");
    fecha.textContent = formatearFechaHora(mensaje.enviadoEn);

    cabecera.append(nombre, fecha);

    const datos = document.createElement("dl");
    datos.classList.add("mensaje__datos");

    const agregarDato = (etiqueta, valor) => {
        const termino = document.createElement("dt");
        termino.textContent = etiqueta;

        const definicion = document.createElement("dd");
        definicion.textContent = valor;

        datos.append(termino, definicion);
    };

    agregarDato("Correo", mensaje.correo);

    if (mensaje.telefono) {
        agregarDato("Teléfono", mensaje.telefono);
    }

    agregarDato("Motivo", mensaje.motivoTexto || mensaje.motivo);
    agregarDato(
        "Respuesta",
        mensaje.preferenciaLlamada
            ? "Prefiere que le llamen"
            : "Prefiere correo electrónico"
    );

    const texto = document.createElement("p");
    texto.classList.add("mensaje__texto");
    texto.textContent = mensaje.mensaje;

    const acciones = document.createElement("p");
    acciones.classList.add("mensaje__acciones");

    const botonBorrar = document.createElement("button");
    botonBorrar.type = "button";
    botonBorrar.classList.add("mensaje__boton");
    botonBorrar.dataset.accion = "borrar";
    botonBorrar.textContent = "Borrar";

    acciones.append(botonBorrar);
    articulo.append(cabecera, datos, texto, acciones);
    elemento.append(articulo);

    return elemento;
}

export {
    crearTarjetaIngrediente,
    crearTarjetaReceta,
    crearDetalleIngrediente,
    crearDetalleReceta,
    crearElementoUsuario,
    crearElementoMensaje
};