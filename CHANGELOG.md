# USO de IA en el Proyecto
Este documento registra las peticiones realizadas a asistentes de Inteligencia Artificial (Gemini) durante el desarrollo de la Órbita 1 del proyecto, detallando la consulta inicial, la respuesta obtenida, los elementos conservados y los cambios aplicados.

## Brief de Proyecto

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

## Wireframes

## Prototipo Navegable

## Personas
### Construcción y Definición de Personas 

* **Petición (Prompt):**  
  > *"¿Cómo ves estas perguntas para las personas que van a probar la aplicación?"*    
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


