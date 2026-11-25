# EatBens — Aplicación Web de Gestión de Despensa y Recetas (Cliente JS)

> **Documentación de Diseño de Interfaces:** La documentación correspondiente a wireframes, guía de estilos y estructura semántica se encuentra disponible en [`docs/README-interfaces.md`](docs/README-interfaces.md).

Aplicación web orientada a planificar menús semanales, controlar el stock de ingredientes en casa y sugerir recetas.

---

## 1. Backlog del Proyecto


1. **Estructura base del proyecto:** Configuración del repositorio con carpetas modularizadas (`css/`, `js/`), archivo `package.json` y linter ESLint sin errores.
2. **Definición de datos de ejemplo (`datos.js`):** Creación y exportación de las entidades relacionadas (`ingredientes` y `recetas`) con al menos 10 registros.
3. **Menú de navegación principal (`index.html` y páginas enlazadas):** Implementación del `<nav>` común para acceder a *Inicio*, *Ingredientes*, *Recetas*, *Registro*, *Inicio de sesión* y *Contacto*.
4. **Listado dinámico desde JavaScript:** Renderizado automático de las tarjetas de ingredientes y recetas recorriendo los datos mediante código modular (`ui.js` y `main.js`).
5. **Vista de detalle interactiva:** Visualización de la ficha completa o panel lateral al pulsar sobre un elemento del listado.
6. **Registro de usuarios:** Formulario con validación, contraseña no guardada y vista «Usuarios registrados» con edición y borrado.
7. **Contacto y mensajes:** Formulario con motivos propios de EatBens, teléfono condicional, contador de caracteres y vista «Mensajes enviados» con borrado.
8. **Validación accesible y persistencia:** Módulo `validacion.js`, `novalidate`, validación en `blur`/`input`, `aria-invalid`, `aria-describedby`, foco en el primer error, `localStorage` y borrado con confirmación.

---

## 2. Mapa de Pantallas

| Vista / Pantalla | Archivo base | Datos que muestra |
| :--- | :--- | :--- |
| **Inicio** | `index.html` | Resumen general, presupuesto por ración y acceso rápido a recomendaciones. |
| **Ingredientes** | `ingredientes.html` | Listado en cuadrícula de ingredientes con stock y panel de detalle lateral con macronutrientes y recetas asociadas. |
| **Recetas** | `recetas.html` | Catálogo de platos con tiempo, coste y disponibilidad de ingredientes. |
| **Registro** | `registro.html` | Formulario de alta y vista «Usuarios registrados» con edición y borrado. |
| **Contacto** | `contacto.html` | Formulario de contacto y vista «Mensajes enviados» con borrado. |
| **Inicio de Sesión** | `inicio-sesion.html` | Formulario de acceso de usuario (maqueta hasta conectar la autenticación). |

---

## 3. Hito 2

### 3.1. Mapa de validación

Los dos formularios llevan `novalidate`: las reglas nativas (`required`, `type`, `min`, `max`, `minlength`, `maxlength`) se mantienen en el HTML y el JavaScript las lee, sin duplicarlas. Cada campo se valida al salir (`blur`) y, si ya se ha tocado, mientras se escribe (`input`). Los errores aparecen junto al campo con `aria-invalid` y `aria-describedby`. Al enviar se validan todos los campos, se muestran todos los errores y el foco va al primero con error. No se usa `alert()`.

| Formulario | Campo | Regla | Mensaje de error |
| :--- | :--- | :--- | :--- |
| Registro | Nombre de usuario | Obligatorio; entre 3 y 20 caracteres; solo letras, números, `.`, `-` y `_`. | `El campo «Nombre de usuario» es obligatorio.`<br>`El campo «Nombre de usuario» debe tener al menos 3 caracteres.`<br>`El campo «Nombre de usuario» no puede superar los 20 caracteres.`<br>`El nombre de usuario solo puede contener letras, números, puntos, guiones y guiones bajos.` |
| Registro | Correo electrónico | Obligatorio; formato de correo mediante expresión regular; máximo 120 caracteres. | `El campo «Correo electrónico» es obligatorio.`<br>`Introduce un correo electrónico válido.`<br>`El campo «Correo electrónico» no puede superar los 120 caracteres.` |
| Registro | Contraseña | Obligatoria; entre 8 y 64 caracteres; al menos una mayúscula y un número. No se guarda. | `El campo «Contraseña» es obligatorio.`<br>`El campo «Contraseña» debe tener al menos 8 caracteres.`<br>`El campo «Contraseña» no puede superar los 64 caracteres.`<br>`La contraseña debe incluir al menos una mayúscula.`<br>`La contraseña debe incluir al menos un número.` |
| Registro | Repetir contraseña | Obligatoria; entre 8 y 64 caracteres; debe coincidir con la contraseña. | `El campo «Repetir contraseña» es obligatorio.`<br>`El campo «Repetir contraseña» debe tener al menos 8 caracteres.`<br>`El campo «Repetir contraseña» no puede superar los 64 caracteres.`<br>`Las contraseñas no coinciden.` |
| Registro | Fecha de nacimiento | Obligatoria; fecha ISO; no puede ser futura; edad mínima de 14 años (máximo `2012-11-25`, mínimo `1900-01-01`). | `El campo «Fecha de nacimiento» es obligatorio.`<br>`Introduce una fecha de nacimiento válida.`<br>`La fecha de nacimiento no es válida.`<br>`La fecha de nacimiento no puede ser futura.`<br>`No cumples la edad mínima para registrarte.` |
| Registro | Condiciones | Casilla obligatoria. | `Debes aceptar las condiciones para registrarte.` |
| Contacto | Nombre | Obligatorio; entre 2 y 60 caracteres. | `El campo «Nombre» es obligatorio.`<br>`El campo «Nombre» debe tener al menos 2 caracteres.`<br>`El campo «Nombre» no puede superar los 60 caracteres.` |
| Contacto | Correo electrónico | Obligatorio; formato de correo mediante expresión regular; máximo 120 caracteres. | `El campo «Correo electrónico» es obligatorio.`<br>`Introduce un correo electrónico válido.`<br>`El campo «Correo electrónico» no puede superar los 120 caracteres.` |
| Contacto | Teléfono | Opcional; si se rellena, 9 dígitos empezando por 6–9, con `+34` o `0034` opcional; se limpian espacios, puntos, guiones y paréntesis. Obligatorio si se marca «Prefiero que me llaméis». | `Introduce un teléfono válido de 9 dígitos (puedes incluir +34).`<br>`El teléfono es obligatorio porque has pedido que te llamemos.` |
| Contacto | Prefiero que me llaméis | Casilla sin validación propia; al marcarla, el teléfono pasa a ser obligatorio. | El error se muestra en el campo Teléfono: `El teléfono es obligatorio porque has pedido que te llamemos.` |
| Contacto | Motivo de contacto | Obligatorio; debe seleccionarse una de las opciones propias de EatBens. | `El campo «Motivo de contacto» es obligatorio.` |
| Contacto | Mensaje | Obligatorio; entre 20 y 600 caracteres; contador visible. | `El campo «Mensaje» es obligatorio.`<br>`El campo «Mensaje» debe tener al menos 20 caracteres.`<br>`El campo «Mensaje» no puede superar los 600 caracteres.`<br>Contador: `0 / 600 caracteres · mínimo 20`. |

Los mensajes de máximo son defensivos: `maxlength` impide superar el límite al escribir, pero el JavaScript también comprueba la longitud.

### 3.2. Qué se ha hecho

- Se ha creado `js/validacion.js` con las funciones de validación compartidas por los dos formularios. Cada función recibe un valor y devuelve el mensaje de error o `null`.
- Registro completo: nombre de usuario, correo, contraseña, repetición, fecha de nacimiento y condiciones. La contraseña se valida pero no se guarda.
- Vista «Usuarios registrados» con edición y borrado. El mismo formulario crea y edita: al editar se rellena con los datos y se ocultan las contraseñas.
- Contacto completo: nombre, correo, teléfono opcional, motivo propio de EatBens, preferencia de llamada y mensaje con contador.
- Validación condicional: al marcar «Prefiero que me llaméis», el teléfono pasa a ser obligatorio.
- Vista «Mensajes enviados» con los mensajes guardados y borrado individual con confirmación.
- Cookie `eatbens_ultimo_contacto` con nombre y correo del último envío, caducidad de 365 días, `path=/` y `SameSite=Lax`. El formulario se rellena con esos datos al volver.
- Persistencia en `localStorage`: `eatbens:usuarios` y `eatbens:mensajes`. Los datos siguen ahí al recargar.
- `js/almacen.js` contiene solo las cinco funciones pedidas y únicamente `borrar` está implementada. El resto de la persistencia se gestiona desde `registro.js` y `contacto.js`, que usan `borrar` para eliminar.
- Tipos convertidos al guardar: las casillas se guardan como booleanos y las fechas como ISO `AAAA-MM-DD`; cuando hay que calcular con una fecha se convierte a `Date`.
- Formularios vaciados y vistas actualizadas sin recargar después de guardar.
- Botones de editar y borrar gestionados con delegación de eventos. No hay ningún `onclick` en el HTML.
- Accesibilidad: errores junto a cada campo, `aria-invalid`, `aria-describedby`, `aria-label` en los botones repetidos y en la navegación, y foco en el primer campo con error.
- `npm run lint` pasa y las pruebas manuales de registro, contacto, edición, borrado, cookie y recarga no muestran errores de consola.

### 3.3. Qué falta

- **Autenticación real:** el login actual es una maqueta y no comprueba credenciales. Como la contraseña no se guarda, haría falta un backend con hash y gestión de sesión.
- **Vista de Plan semanal:** la planificación semanal todavía no tiene pantalla propia.
- **Persistencia en servidor:** ahora los datos viven en `localStorage`, así que no se sincronizan entre navegadores ni dispositivos. Habría que sustituirlo por una API.
- **Recuperación de contraseña y verificación de correo:** no están implementadas.

### 3.4. Qué me ha costado más

Lo que más me ha costado ha sido la validación: mantener las reglas nativas en el HTML, leerlas desde JavaScript sin duplicarlas y conseguir que los errores aparezcan en el momento adecuado (`blur` e `input`) sin resultar molestos. También me costó encajar la restricción de que `almacen.js` solo implementara `borrar` con la necesidad de que el registro y el contacto guardaran datos; al final cada formulario gestiona su propia colección y `almacen.js` queda como la pieza de borrado. El flujo de edición sin contraseña y la obligatoriedad condicional del teléfono fueron los puntos con más casos límite.
