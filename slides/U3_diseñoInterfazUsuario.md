---
title: Diseño de Interface de Usuario
theme: black
slideNumber: true
---

# Diseño de Interface de Usuario
Created by <i class="fab fa-telegram"></i>
[edme88]("https://t.me/edme88")

---
## Libros:
![Book](images/book.png)
“Ingeniería del software” séptima edición de Ian Sommervill
(Capítulo N°16: Diseño de Interfaces de Usuario)

“Ingeniería del Software: Un enfoque práctico 6ta ed.” de Roger Pressman
(Capítulo N°11: Diseño de la Interfaz de Usuario)

---
## ¿Qué es?
El diseño de la interfaz de usuario crea un medio eficaz de comunicación entre los seres humanos y la computadora.

Siguiendo un conjunto de principios de diseño de la interfaz, el diseño identifica los objetos y acciones de ésta y luego crea una plantilla de pantalla que constituye la base del prototipo de la interfaz de usuario.

![Question](images/question.png)

---
## ¿Quién lo hace?
Un ingeniero de software diseña la interfaz de usuario con la aplicación de un proceso iterativo que sigue principios de diseño predefinidos.

![Interfaz de usuario](images/interfazUsuario/who.png)

---
## ¿Por qué es importante?
Si el software es difícil de usar, fuerza al usuario a cometer errores, o si frustra sus esfuerzos para alcanzar las metas, entonces no le gustará, sin que importe el poder computacional que tenga, el contenido que entregue o las funciones que ofrezca.

La interfaz tiene que estar bien hecha porque moldea la percepción que el usuario tiene del software.

![importante](images/interfazUsuario/importante.png)

---
## ¿Cuáles son los pasos?
### Paso 1
El diseño de la interfaz de usuario comienza con la identificación de los requerimientos del usuario, la tarea y el ambiente.

---
### Paso 2
Una vez identificadas las tareas del usuario, se crean y analizan los escenarios para éste y se define un conjunto de objetos y acciones de la interfaz.

---
### Paso 3
Esto forma la base para crear una plantilla o prototipo que ilustra el diseño gráfico y la colocación de los iconos, la definición de textos descriptivos, la especificación y títulos de las ventanas, y la especificación de aspectos mayores y menores del menú.

---
### Paso 4
Con el empleo de herramientas, se hace el prototipo, se implementa en definitiva el modelo del diseño y se evalúa la calidad del resultado.

---
## ¿Cuál es el producto final?
Se crean los escenarios del usuario y se generan los formatos de la pantalla.
Se desarrolla un prototipo de la interfaz y se modifica de manera iterativa.

![Wireframe](images/interfazUsuario/wireframe.jpg)

---
## ¿Cómo me aseguro de que lo hice bien?
Los usuarios “prueban” un prototipo de la interfaz y la retroalimentación de esta prueba se utiliza para la siguiente modificación iterativa del prototipo.

![Iterativo](images/interfazUsuario/iterativo.png)

---
## Interfaz de Usuario
Debe ser diseñada para ajustarse a:
* Habilidad
* Experiencia
* Expectativas
del usuario.

---
## Factores que se deben considerar
<!-- .slide: style="font-size: 0.90em" -->
Se deben teneren cuenta capacidades físicas y mentales de las personas que utilizarán el software.
1. Las personas tienen una memoria limitada a corto plazo
2. Cuando el sistema falla, y emite avisos y mensajes genera estrés en el usuario
3. Las personas poseen un amplio rango de capacidades físicas
4. Las personas poseen diferentes preferencias de interacción

---
## Principios de Diseño
<!-- .slide: style="font-size: 0.85em" -->
1. **Familiaridad del usuario:** Utilizar términos que el usuario conozca
2. **Uniformidad:** Operaciones comparables se deben activar de la misma forma
3. **Mínimo Sorpresa:** El comportamiento del sistema debe ser esperable
4. **Recuperabilidad:** Mecanismos de recuración de errores
5. **Guía de Usuario:** Retroalimentación significativa frente a errores. Asesoramiento y características.
6. **Diversidad de Usuarios:** Interacción para diferentes tipos de usuario. (Casuales, Potenciales)

---
## Principio de Recuperabilidad
Recursos que le permiten al usuario recuperarse de un error:
1. Confirmación de acción destructiva
2. Proporcionar un recurso para deshacer error
3. Generar puntos de control
    
![Error Interfaz](images/interfazUsuario/error.jpg)

---
## Interacción del Usuario
La interacción del usuario significa emitir comandos y datos asociados al sistema informático.

En un inicio era sólo a través de lineas de comando
![xkcd](images/interfazUsuario/xkcd.png)

---
## Estilos de Interacción
Según Shneiderman existen 5 estilos de interacción:
1. Manipulación Directa
2. Selección de menús
3. Rellenado de Formularios
4. Lenguaje de Comandos
5. Lenguaje Natural

---
## Estilos de Interacción
<!-- .slide: style="font-size: 0.5em" -->
| Estilo de Interacción | Ventajas | Desventajas | Aplicación |
|-----------------------|----------|-------------|------------|
| Manipulación Directa | Interacción rápida Intuitiva Fácil de Aprender | Difícil de Implementar<br> Sólo adecuada para sistemas visuales | Videojuegos Sistemas CAD |
| Selección de menús | Evita errores de usuario Requiere teclear poco | Lenta para usuarios experimentados Compleja si hay muchas opciones Sistemas de propósito general | 
| Rellenado de Formularios | Introducción de datos sencilla | Ocupa espacio en pantalla Opciones del usuario no se ajustan a los campos | Control de Stock Préstamos personales |
| Lenguaje de Comandos | Poderoso y Flexible | Difícil de aprender Gestión pobre de errores | Sistemas operativos Sistemas de comandos y control |
| Lenguaje Natural | Accesible a usuarios casuales Fácil de ampliar | Requiere más tecleo Los sistemas de comprensión de LN no son fiables | Sistemas de recuperación de información |

---
## Modelo de Seeheim
Se separa la presentación de la información, la gestión del diálogo y la aplicación.

Es posible tener una interfaz separada para diferentes tipos de usuario.

![InterfaZ Usuario](images/interfazUsuario/multiInterfazU.png)

---
## Presentación de Información
* Presentación directa
* Presentación Gráfica
  * 2d
  * 3d
  * Árboles
  * Redes

---
## Pautas de Shneiderman para la utilización efectiva del COLOR
<!-- .slide: style="font-size: 0.85em" -->
* Limitar el número de colores utilizados y ser conservador en la forma de utilizarlos
* Utilizar un cambio de color para mostrar un cambio en el estado del sistema
* Utilizar el código de colores para apoyar la tarea que los usuarios están tratando de llevar a cabo
* Utilizar el código de colores de una forma consciente y uniforme
* Ser cuidadoso al utilizar pares de colores

---
<!-- .slide: data-background="#0000ff" -->
<h1 style="color: #ff0000;font-size: 3.5em; font-weight: bolder;">ESTO NO</h1>
   
---
## Diseño de Mensajes del sistema
<!-- .slide: style="font-size: 0.85em" -->
Factores a tener en cuenta:
* **Contexto:** Generar mensajes relacionados con la actividad actual del usuario.
* **Experiencia:** Proporcionar 2 tipos de mensajes: Cortos y concisos, largos y significativos.
* **Nivel de Habilidad:** El mensaje se debe adaptar a diferentes clases de usuarios.
* **Estilo:** Los mensajes deben ser: positivos y activos, fomales, concisos, uniformes y constructivos. Nunca: negativos, pasivos, insultantes.
* **Cultura:** Adaptado a la cultura del país donde se utilizará el sistema.

---  
#### Mensajes de error: Cuidado con el Estilo!
![Mensaje de Error inapropiado](images/interfazUsuario/mensajeErrorMAL.jpeg)

---  
## Mensajes de error
* Orientado al Usuario
* Orientado al Sistema

![Mensaje Error](images/interfazUsuario/mensajeError.png)

---   
## Usabilidad
Medición cualitativa de la facilidad y eficiencia con la que un humano emplea las funciones y características que ofrece el producto de alta tecnología.

![Usabilidad](images/interfazUsuario/usabilidad.jpg)

---
## Atributos de Usabilidad
* **Aprendizaje:** Tiempo que tarda un usuario nuevo en ser productivo con el sistema
* **Velocidad de Funcionamiento:** Respuesta del sistema a las operaciones de trabajo del usuario
* **Robustez:** Tolerancia del sistema a errores de usuario.
* **Recuperación:** Cómo se recupera el sistema a los errores del usuario
* **Adaptación:** El sistema se adapta a único modelo de trabajo

---
## Técnicas de Evaluación de la Interfaz
* Cuestionarios de la opinión de los usuarios sobre la interfaz
* Observación de los usuarios cuando usan el sistema
* Videos del uso típico del sistema
* Incluir código en el software que recopila información de los recursos utilizados y errores comunes

---
## ¿Dudas, Preguntas, Comentarios?
![DUDAS](images/pregunta.gif)
