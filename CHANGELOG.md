# USO de IA en el Proyecto
Este documento registra las peticiones realizadas a asistentes de Inteligencia Artificial (Gemini) durante el desarrollo de la Órbita 1 del proyecto, detallando la consulta inicial, la respuesta obtenida, los elementos conservados y los cambios aplicados.

## Brief del Proyecto
### Redacción y Definición del Documento de Brief 

- **Petición (Prompt):**  
  > *"Qué crees que le falta al brief para poder ser un documento útil y que se pueda leer en 5 minutos con sus cinco elementos obligatorios (El Problema con datos, Alcance MVP, Personas, Criterios de Éxito y Restricciones, incluyendo la ambiental del W3C)."*  
  > *"Verifica que la información del problema y de las personas es correcto y sale de las fichas de Irene y Antonia de mi FigJam."*

- **Respuesta de la IA:**  
  * Revisión completa del archivo `BRIEF.md` limitado a un tiempo de lectura de 5 minutos, integrando los datos cuantitativos y cualitativos recopilados en la investigación.
  * Formalización del alcance del MVP basándose en las 4 funcionalidades clave validadas mediante el filtro de preguntas obligatorias (*Sugerencias/Filtro*, *Autenticación*, *Pedir/Guardar Receta* y *Ficha de Ingredientes Beneficiosos*).
  * Inclusión de enlaces e identificación de roles para Irene Flores Castro (Persona Primaria) y Antonia Hita Acedo (Persona Secundaria).
  * Definición de criterios de éxito cuantitativos y verificables en pruebas de usabilidad con la persona principal, junto con la regla de validación externa de los 5 minutos.
  * Establecimiento de restricciones tecnológicas (coordinación DWEC/DWES, maquetación manual, grids), de tiempo, de usuario y de sostenibilidad ambiental (peso máximo de 1.5 MB por página según el Criterio 2.4 de las Web Sustainability Guidelines del W3C).

- **Qué se conservó:**  
  * Las citas textuales, contextos de uso, objetivos y frustraciones extraídos directamente de las fichas de investigación de Irene y Antonia del FigJam.
  * Las 4 funcionalidades del MVP justificadas mediante las 3 preguntas obligatorias del módulo.
  * El enfoque de sostenibilidad enfocado en usuarios con conexiones móviles o limitadas.

- **Qué se cambió:**  
  * Los testimonios y necesidades de Irene y Antonia tienen el 100% del peso(*"Decido sobre la marcha y al final siempre hago las mismas cuatro comidas"*, *"Tenemos en casa un calendario pero por falta de ingredientes no lo solemos usar bien"*).
  * Se reorientaron los criterios de éxito para que sirvan directamente como guion de evaluación para las pruebas de usabilidad de la siguiente fase (Órbita 5).

---

## VMP y User Flow
### Revisión y Optimización del VMP

* **Petición (Prompt):**  
  > *"Aquí tienes mi MVP, intenta encontrar errores y ayudame a resolverlos."*  
  > *"esta es mi persona principal [imagen de Irene Flores Castro]"* 

* **Respuesta de la IA:**  
  * Revisión y optimización de la definición del Producto Mínimo Viable a partir de la propuesta enviada por el usuario.
  * Estructuración del filtro RA1-c en dos columnas (*Funcionalidades DENTRO* vs. *Funcionalidades FUERA* del MVP), respondiendo a las 3 preguntas obligatorias para cada característica realizado
  * Ajuste de las justificaciones y motivos para alinearlas específicamente con el objetivo de Irene Flores Castro (22 años, estudiante): planificar comidas para reducir la improvisación, tener una dieta equilibrada y aprender nuevas recetas sin abrumarse.

* **Qué se conservó:**  
  * La selección de funcionalidades centrales del proyecto
  * Las justificaciones de descarte para la Versión 2 de funciones secundarias: *Lista de la compra*, *Contador detallado de calorías/macronutrientes*, *Planificador semanal rígido*

* **Qué se cambió:**  
  * Se corrigió el enfoque inicial del MVP para reorientar el 100% de los argumentos y preguntas hacia la persona principal.
  * Se perfeccionó la redacción de los motivos en cada casilla para que se apoyen en datos concretos de las entrevistas y frustraciones (evitar cambios abrumadores de hábitos y la toma de decisiones lenta) en lugar de opiniones subjetivas.

    ---
    
### Revisión y Optimización del User Flow

* **Petición (Prompt):**  
  > *"¿Cómo ves este user flow para un MVP y si añadirías algo más pero sin ser funcionalidades?"*  
  > *"Dame una foto de tu propuesta con la leyenda de colores [imagen de la leyenda: Entrada/Salida, Pantalla, Decisión, Caso límite, Salida]."*  
  > *"¿Cómo harías lo de cerrar el ciclo?"*

* **Respuesta de la IA:**  
  * Diagnóstico de UX sobre el flujo inicial (bucles abiertos, nodos de decisión con formato incorrecto y falta de estados de retorno).
  * Propuesta visual simplificada usando cajas de colores e integración de rombos turquesa para decisiones y retornos morados para cerrar la navegación hacia la pantalla principal (`¿Qué hacer hoy?`).

* **Qué se conservó:**  
  * La inclusión de los rombos de decisión condicional (`¿Tiene cuenta?`, `¿Selecciona ingrediente?`).
  * Los conectores morados de retorno para evitar puntos muertos (*dead ends*) al final de las ramas de navegación.

* **Qué se cambió:**  
  * Se asignó el color blanco con borde a todas las pantallas (en lugar del color negro que se usaba por error en los rectángulos de interfaz).

---

## Sitemap
### Definición y Estructuración del Sitemap

- **Petición (Prompt):**  
  > *Aquí tienes la estructura y contenido del Sitemap, encuentra errores y posibles soluciones de mejora."*  

- **Respuesta de la IA:**  
  * Propuesta de una arquitectura de información organizada en 3 niveles de navegación como máximo para mantener una estructura plana.
  * Definición de pantallas de sistema (`Inicio de Sesión` con accesos a `Login` y `Registro`), una pantalla raíz principal (`Inicio / ¿Qué hacer hoy?`) y secciones secundarias para la barra inferior (`Ingredientes`, `Recetas`).
  * Desglose de subpantallas y modales de acción, como el modal de *Información de Ingrediente* conectado con la vista de *Recetas*.

- **Qué se conservó:**  
  * La jerarquía en 3 niveles de profundidad para evitar la desorientación del usuario.

- **Qué se cambió:**  
  * Se unificó al 100% la nomenclatura del árbol con las etiquetas exactas utilizadas en los wireframes de Figma Design (`Inicio de Sesión`, `Inicio`, `Ingredientes`, `Recetas`).
  * Se adaptó el diagrama a un estilo visual más esquemático con cajas de colores.

---

## Wireframes
### Maquetación de Wireframes Low-Fi (Desktop 1440x1024px y Mobile)

- **Petición (Prompt):**  
  > *"Aquí tienes la estructura de mis pantallas, quiero maquetar manualmente los wireframes de baja fidelidad en Figma para ordenador (Desktop 1440x1024px, rejilla de 12 columnas) y móvil."*  
  > *"Quiero ver cómo queda la disposición en pantalla del inicio, recetas, ingredientes, ajustes y el footer adaptados a la persona principal [Irene Flores Castro]."*

- **Respuesta de la IA:**  
  * Explicación y guía paso a paso para la maquetación manual de baja fidelidad en Figma usando formas geométricas básicas (`F` para Frames, `R` para rectángulos, `L` para líneas en placeholders de imagen y `T` para textos).
  * Estructuración del layout responsive desde el diseño móvil en 1 columna hasta la rejilla de 12 columnas en escritorio (1440x1024px).
  * Definición visual y jerarquía de componentes para el **Inicio / Dashboard** (KPIs de ingredientes/recetas, selección de presupuesto y sugerencias diarias), **Ingredientes**, **Recetas**, **Ajustes** y un **Footer unificado** organizado en 4 columnas.

- **Qué se conservó:**  
  * El método de trabajo manual con un pequeño uso de plugins automáticos para adaptar cambios).
  * La estructura visual estándar de las tarjetas en baja fidelidad (títulos, tiempos e ingredientes).
  * La orientación del diseño a las necesidades de Irene Flores Castro (acceso rápido a comidas económicas y gestión ágil de ingredientes).

- **Qué se cambió:**  
  * Se adaptó la disposición visual de las pantallas al formato de escritorio (1440x1024px), redistribuyendo en horizontal a lo largo de las 12 columnas los bloques que en móvil estaban apilados verticalmente.
  * Se estandarizó la estructura del pie de página (Footer) para dar coherencia a todas las vistas principales de la aplicación.

### Wireframes editados con la herramienta stitch
#### Inicio de Sesión
- **Petición (Prompt):**  
  > *"Quiero mejorar este wireframe de inicio de sesión con un diseño de baja fidelidad, sin color"*

- **Respuesta de la IA:**  
  * He mejorado el wireframe de inicio de sesión convirtiéndolo en un diseño estrictamente monocromático (sin color), optimizando la jerarquía visual y la usabilidad:.
  * Mejoras clave implementadas: Identidad y Cabecera: Reemplazo del placeholder circular por un isotipo minimalista geométrico, acompañado de un saludo claro .
  * Autenticación Rápida: Divisor sutil y accesos directos monocromáticos
 
- **Qué se conservó:**  
  * .
  * .
  * .

- **Qué se cambió:**  
  * .
  * .

---

## Personas
### Construcción y Definición de Personas 

* **Petición (Prompt):**  
  > *"¿Cómo ves estas preguntas para las personas que van a probar la aplicación?"*    
  > *"Esta es mi persona principal [imagen de Irene Flores Castro, 22 años, Estudiante, Palma]"*

* **Respuesta de la IA:**  
  * Adaptación y redacción de las preguntas de las entrevistas manteniendo un tono directo y coloquial.
  * Análisis de los datos de la Persona Primaria (Irene Flores Castro, 22 años, estudiante) identificando sus objetivos inmediatos (reducir la improvisación y comer variado) y sus frustraciones principales (no abrumarse con cambios bruscos de hábitos ni perder tiempo decidiendo).
  * Estructuración del perfil de usuario conectando el contexto de uso (dispositivo iPhone, conexión Wifi 4G, entorno salón de casa) con las decisiones de diseño del proyecto.

* **Qué se conservó:**  
  * Los datos reales extraídos de las entrevistas para ambas fichas: el perfil de Antonia para validar necesidades secundarias y el de Irene como eje central de la aplicación.
  * La estructura de objetivos (Inmediato, De fondo, Oculto) y frustraciones (Filtrado, Claridad, Velocidad) presentes en el tablero de FigJam.

* **Qué se cambió:**  
  * Se reordenó la jerarquía del proyecto marcando explícitamente a Irene Flores Castro como la **Persona Principal** para que todas las decisiones de MVP, Sitemap y Wireframes se evaluaran bajo sus necesidades de velocidad y cero abrumamiento.


