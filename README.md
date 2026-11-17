# EatBens — Aplicación Web de Gestión de Despensa y Recetas (Cliente JS)

> **Documentación de Diseño de Interfaces:** La documentación correspondiente a wireframes, guía de estilos y estructura semántica se encuentra disponible en [`docs/README-interfaces.md`](docs/README-interfaces.md).

Aplicación web orientada a planificar menús semanales, controlar el stock de ingredientes en casa y sugerir recetas.

---

## 1. Backlog del Proyecto

Lista de funcionalidades dividida en piezas pequeñas, independientes y ordenadas por prioridad:

1. **Estructura base del proyecto:** Configuración del repositorio con carpetas modularizadas (`css/`, `js/`), archivo `package.json` y linter ESLint sin errores.
2. **Definición de datos de ejemplo (`datos.js`):** Creación y exportación de las entidades relacionadas (`ingredientes` y `recetas`) con al menos 10 registros.
3. **Menú de navegación principal (`index.html` y páginas enlazadas):** Implementación del `<nav>` para acceder a las vistas estáticas iniciales (*Inicio*, *Ingredientes*, *Recetas*, *Plan semanal*, *Inicio de sesión*).
4. **Listado dinámico desde JavaScript:** Renderizado automático de las tarjetas de ingredientes y recetas recorriendo los datos mediante código modular (`ui.js` y `main.js`).
5. **Vista de detalle interactiva:** Visualización de la ficha completa o panel lateral al pulsar sobre un elemento del listado.

---

## 2. Mapa de Pantallas

| Vista / Pantalla | Archivo base | Datos que muestra |
| :--- | :--- | :--- |
| **Inicio** | `index.html` | Resumen general, presupuesto por ración y acceso rápido a recomendaciones. |
| **Ingredientes** | `ingredientes.html` | Listado en cuadrícula de ingredientes con stock y panel de detalle lateral con macronutrientes y recetas asociadas. |
| **Recetas** | `recetas.html` | Catálogo de platos con tiempo, coste y disponibilidad de ingredientes. |
| **Inicio de Sesión** | `inicio-sesion.html` | Formulario de acceso de usuario. |