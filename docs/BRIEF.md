# Brief del Proyecto — (Órbita 1)

> **Documento de definición de producto, alcance y restricciones del Proyecto Mínimo Viable (MVP).**  

---

## 1. El Problema (Respaldado por la Investigación y Datos)

El problema se centra en la dificultad para planificar menús variados y equilibrados sin que la elección resulte abrumadora o monótona, tal y como reflejan las entrevistas a nuestras dos personas de estudio:

- **Dificultad de Elección y Monotonía en las Comidas:**
  Tanto la persona primaria como la secundaria coinciden en el lema: *"Me gusta planificar mis comidas pero me cuesta mucho elegir qué comer"*. 
  - **Irene (Persona Primaria):** Declara en la entrevista: *"Decido sobre la marcha y al final siempre hago las mismas cuatro comidas"*. Su mayor frustración es aburrirse de su menú (*"Estoy cansada de no poder hacer platos que me gusten y que disfrute cocinándolos"*) y siente que intentar cambiar de hábitos a menudo resulta abrumador.
  
  - **Antonia (Persona Secundaria):** Señala en la entrevista: *"Tenemos en casa un calendario de comida pero por falta de ingredientes no lo solemos usar bien"*. Además, le cuesta complacer a todos en su hogar (*"Muchas veces es difícil elegir la comida porque a alguno de los 4 en casa no le gusta algo"*) y aborrece la repetición constante (*"Aborrezco muy rápido las comidas que se repiten 1 vez por semana"*).

- **Pérdida de Tiempo y Falta de Motivación tras la Jornada:**
  - Antonia llega tarde a casa y pierde las ganas de cocinar (*"Al llegar a casa tan tarde, es muy complicado encontrar las ganas de cocinar"*). Su premisa clave es: *"La comida tendría que ser para disfrutarla no odiarla"*.
  - Irene busca gastar dinero en alimentos que realmente sean beneficiosos y aprender sobre nuevas comidas y sabores sin sentirse sobrecargada.

- **Propuesta de Valor:**
  Una herramienta ágil que facilite la elección del menú diario reduciendo la toma de decisiones, ayudando a romper la monotonía de repetiros siempre los mismos platos y adaptándose a la disponibilidad de ingredientes y gustos sin generar sobrecarga.

---

## 2. El Alcance (MVP)

Para dar respuesta rápida al problema sin sobrecargar la interfaz, la primera versión del proyecto (MVP) delimita claramente lo que entra y lo que se queda fuera:

### DENTRO del MVP (Versión 1.0):
1. **Sugerencias y Filtro de Recetas (Inicio y Catálogo):**
2. **Registro e Inicio de Sesión Básico:**
3. **Acción de "Pedir Nueva Receta" y "Guardar Receta":**
4. **Buscador y Ficha de Ingredientes con Información Beneficiosa:**

### FUERA del MVP (Postergado para Versión 2.0):
- Generación automática y descarga de la lista de la compra.
- Contador avanzado de calorías diarias e integración con aplicaciones de fitness.
- Planificador semanal rígido sincronizable con Google Calendar.

---

## 3. Las Personas

El diseño de la aplicación sitúa en el centro a nuestra persona principal:

* [**Irene Flores Castro (22 años, Estudiante universitaria**]—
* **Persona Principal:** Estudiante independiente con presupuesto ajustado y poco tiempo libre, que necesita planificar sus menús de forma rápida aprovechando los ingredientes de su despensa sin abrumarse con recetas complejas ni conteo estricto de calorías.

---

## 4. Criterios de Éxito (Verificables en Pruebas de Usabilidad)

Los siguientes criterios actuarán como guion explícito de evaluación con nuestra persona principal durante las pruebas con usuarios:

1. **Rapidez de Decisión:** Irene puede abrir la aplicación desde la pantalla de Inicio y seleccionar una receta para su comida del día en **menos de 1 minuto y sin realizar más de 3 clics**.
2. **Consulta Ingredientes:** Irene puede revisar ingredientes en la sección *Ingredientes* y encontrar al menos **3 recetas compatibles con los alimentos disponibles en menos de 30 segundos**.
4. **Legibilidad y Accesibilidad:** Irene puede leer y distinguir las tarjetas de recetas y sus etiquetas con la pantalla ajustada al 100% o 125% de zoom **sin que ningún componente o botón se desborde o quede oculto**.

---

## 5. Restricciones del Proyecto

### Restricciones Tecnológicas y de Proyecto (DWEC / DWES)
- **Desarrollo:** Coordinación técnica de frontend y backend con las asignaturas de Desarrollo Web en Entorno Cliente y Servidor.

### Restricciones de Tiempo
- **Entrega de Fases (Órbitas):** Calendario de entregas acotado por fases académicas (definición, wireframes, prototipado y pruebas).

### Restricciones impuestas por la Persona (Irene)
- **Dispositivos y Conexión:** Uso principal desde un teléfono móvil con pantalla media y desde un ordenador portátil universitario conectado a redes Wi-Fi públicas o datos móviles limitados.

### Restricción Ambiental (Sostenibilidad Web - Criterio 2.4 WSG W3C)
Para cumplir con el **Criterio 2.4 de las Web Sustainability Guidelines del W3C (Optimización de Recursos y Peso de Página)** pensado para usuarios con baja velocidad de conexión:

- **Peso Máximo por Página:** La carga total de datos transferidos por cada página/pantalla no superará los **1.5 MB**.
