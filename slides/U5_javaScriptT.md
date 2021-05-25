---
title: javaScript
theme: black
slideNumber: true
---

# JavaScript
Created by <i class="fab fa-telegram"></i> 
[edme88]("https://t.me/edme88")

---
## ECMAScript
JavaScript está estandarizado por Ecma International, la asociación europea para estandarizar los sistemas de información 
y comunicación.

El último estándar es [ECMA-262](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/), 
y también está aprobado por ISO (Organización Internacional de Normalización).

---
## Jerarquía de Objetos en Js
Podemos ver una página web como una colección de objetos. Por ejemplo, para JavaScript un formulario es un objeto, una imagen es un objeto, etc.

Los objetos tienen propiedades, métodos y eventos asociados.

Los objetos se organizan conforme a una jerarquía de forma que heredan métodos o propiedades de sus objetos padre, e incluso el nombre de un objeto se crea a partir de sus objetos padre.

---
## Jerarquía de Objetos en Js
![Jerarquia Obejtos](images/html/jerarquiaObjetos.png)

---
## Jerarquía de Objetos en Js
<!-- .slide: style="font-size: 0.65em" -->
Todo documento HTML dispone de los siguientes objetos en la jerarquía de objetos JavaScript:
* **navigator:** tiene propiedades relacionadas con el nombre y la versión del navegador, protocolos de transferencia permitidos por el navegador (mime types) y sobre plugins instalados.

* **window:** considerado habitualmente el objeto global o de máximo nivel. Tiene propiedades relacionadas con la ventana del navegador. En caso de uso de frames (“subventanas”) hay un objeto window por cada “ventana hija” que exista.

* **document:** tiene propiedades relacionadas con el documento como título, links, formularios, etc.

* **location:** tiene propiedades relacionadas con la URL actual.

* **history:** tiene propiedades relacionadas con URLs previamente visitadas.

---
#### [Nombres dentro de laJerarquía de Objetos en Js](https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=858:jerarquia-de-objetos-javascript-forms-elements-images-navigator-useragent-geolocation-online-cu01170e&catid=78&Itemid=206)
<!-- .slide: style="font-size: 0.85em" -->
Reglas al nombrar los objetos:

1. El nombre del objeto descendente incluye el nombre del objeto padre. 
Ej. window.document

2. Como todo desciende de window, podemos omitirlo:
Ej. document.body en lugar de window.document.body

3. Se organiza de forma automática ciertos objetos (forms, elements, images, links) en arrays. 
Ej. En caso de varios formularios window.document.forms[0] ó document.forms[0]

---
#### Jerarquía de Objetos en Js: Ejemplos
````javascript
windows.alert("Hola Mundo!!!");

document.getElementById("num1").value;

document.getElementsByName("miDiv")[0].style.display = 'none';

window.document.forms[0].nombreUsuario.value;
````

---
## Más Eventos
Así como están los eventos de los elementos del formulario, también existen:</p>
* Eventos de mouse
* Eventos de Teclado
* Eventos de Enfoque
* Eventos de Ventana
* Otros Eventos

---
## Eventos de Mouse
* **onMouseDown:** Pulsar sobre un elemento de la página.
* **OnMouseMove:** Al mover el puntero por la página
* **onMouseOut:** Al salir del área ocupada por un elemento de la página
* **onMouseOver:** Al entrar el puntero en el área ocupada por un elemento de la pagina
* **onMouseUp:** Al soltar el botón del mouse que anteriormente se habia presionado

---
## Eventos de Teclado
* **onKeyDown:** Al pulsar una tecla.
* **onKeyPress:** Dejar pulsada una tecla un tiempo determinado.
* **onKeyUp:** Al liberar la tecla presionada

---
## Objeto: Event
````javascript
function miFuncion(event){
    
}
````

Permite recibir propiedades del evento:
elemento en el que ocurre, el estado de las teclas, 
la posición del mouse, estado de los botones.


---
<!-- .slide: style="font-size: 0.90em" -->
* **altKey:** Devuelve si se ha precionado la techa ALT
* **button:** Se presionó el botón del mouse
* **ClientX:** Coordenada X del mouse
* **clientY:** Coordenada Y del mouse
* **keyIdentifier:** Identifica la letra que se presiono
* **keyLocation:** Devuelve la posición de la tecla
* **relatedTarget:** Devuelve el elemento relacionado con el elemento sobre el que se ejecuta el evento.
* **screenX:** Devuelve la posición X del cursor relativa a la página
* **screenY:** Devuelve la posición Y del cursor relativa a la página
* **shoftKey:** Devuelve si se presionó Shift

---
## Eventos de Enfoque
* **onBlur:** Cuando un elemento pierde el foco de la aplicación.
* **onFocus:** Cuando un elemento de la página o la ventana gana el foco de la aplicación

---
## Eventos de Ventana
* **onMove:** Al mover la ventana del navegador
* **onResize:** Al redimensionar la ventana del navegador

---
## Otros Eventos
<!-- .slide: style="font-size: 0.90em" -->
* **onUnload:** Al abandonar la página.
* **onLoad:** Al terminar de cargarse la página o imágenes
* **onClick:** Al hacer click al botón del mouse sobre un elemento de la página.
* **onDragDrop:** Al soltar algo que se ha arrastrado sobre la página
* **onError:** Si no se puede cargar un documento o una imagen
* **onAbort:** Al detenerse la carga de una imagen, de la página o irse de la pagina.

---
## Gráficos en HTML5
Existen 2 elementos dentro de HTML5 que permiten la generación de gráficos:
* **Canvas:** Dibuja objetos como un mapa de bits en un lienzo.
* **SVG (Scalable Vector Graphics):** Dibuja vectores sobre un lienzo.

---
## Canvas vs. SVG
| Canvas | SVG |
|--------|-----|
| Basado en píxeles (.png dinámico) | Basado en forma |
| Elemento HTML único | Múltiples elementos gráficos, que forman parte de DOM |
| Modificado mediante script solamente | Modificado mediante script y CSS |
| La interacción de usuario/modelo de eventos es pormenorizada (x,y) | La interacción de usuario/modelo de eventos es resumida (rect, ruta) |
| El rendimiento es mejor con una superficie menor, un número más grande de objetos (>10 k) o ambos | El rendimiento es mejor con un número menor de objetos (<10 k), una superficie más grande o ambos |

---
## [Canvas](http://www.w3schools.com/tags/ref_canvas.asp)
Es un elemento incorporado en HTML5 que permite la generación de gráficos estáticos, dinámicos y animaciones por medio del scripting.

El potencial de canvas reside en su habilidad para actualizar su contenido en tiempo real.

Permite renderizaciones en contextos 2d y 3d. (Ej. WebGL emplea 3D)

---
## Canvas: Coordenadas
![Coordenadas Canvas](images/Eventos/coordenadas-canvas.gif)

El tamaño por defecto es: ancho 300px, alto 150px

<!-- .slide: style="font-size: 0.70em" -->
(El por que se debe definir width y heigth en el elemento canvas: https://devcode.la/tutoriales/elemento-canvas-responsive/ )

---
## Canvas: Contexto
El canvas esta inicialmente en blanco. Para mostrar alguna cosa, un script primero necesita acceder al contexto a renderizar y dibujar sobre este.

````javascript
var canvas = document.getElementById('canvasEjercicio');
var ctx = canvas.getContext('2d');
````

La primera linea regresa el nodo DOM para el elemento **canvas**.

El método getContext () devuelve un objeto que proporciona métodos y propiedades para dibujar en el lienzo.

---
## Canvas: Métodos
<!-- .slide: style="font-size: 0.70em" -->
**JS** tiene varios métodos (funciones asociadas a objetos) para trabajar con Canvas.

Algunos de los más usados son:
* **fillRect(x, y, width, height)** <br>
  Dibuja un rectángulo relleno usando el color/estilo del atributo fillStyle. Las coordenadas x e y empiezan en la esquina superior izquierda.
* **strokeRect(x, y, w, h)** <br>
  Dibuja las líneas de un rectángulo usando el color/estilo de el atributo strokeStyle.
* **clearRect(x, y, w, h)** <br>
  Limpia un area rectangular.
* **rect(x, y, w, h)** <br>
  Crea un rectángulo.

---
## Canvas: Propiedades
<!-- .slide: style="font-size: 0.80em" -->
Una **propiedad** es una variable adjunta a un objeto, como el color, color de borde, etc.
* **fillStyle = color|style**
  El color|estilo de relleno del dibujo.
* **strokeStyle = color|style**
    El color|estilo del contorno del dibujo.
* **lineCap = butt|round|square**
    El estilo del acabado de linea.
* **lineJoin = bevel|round|miter**
    El estilo de las esquinas de las líneas.
* **lineWidth = number**
    El grosor de las lineasThe width of the drawing stroke.

---
## Canvas: Ejemplo
<canvas id="canvasEJ1" width="600" height="300" style="background-color: #8dcffc" onclick="dibujo()">
    Su navegador no soporta HTML5
</canvas>

---
## [Canvas](http://www.w3schools.com/tags/ref_canvas.asp)
````javascript
function dibujo() {
   var canvas = document.getElementById("canvasEJ1");
   var ctx = canvas.getContext("2d");
   ctx.fillStyle = "#000";

   //fillRect(x, y, width, height)
   ctx.fillRect (10, 15, 20, 25);

   ctx.beginPath();
   ctx.moveTo(75,50);
   ctx.lineTo(100,75);
   ctx.lineTo(100,25);
   ctx.fill();
}
````
---
## Canvas: arc(x,y,r,ap,af,cR)
* Define un segmento circular
* **x** e **y** son las coordenadas del centro
* **r** es el radio del circulo
* **ap** y **af** ángulo de partida y ángulo final en radianes
* **cR** [opcional] sentido contra reloj (true|false)

![Arc](images/Eventos/arc.png)

---
## Canvas: Arco
````javascript
function dibujoArco() {
   var canvas = document.getElementById("canvas3");
   var ctx = canvas.getContext("2d");

   ctx.beginPath();
   //ctx.arc(X, Y, radio, angulo inicial, angulo final);
   ctx.arc(300, 250, 200, 1* Math.PI, 2 * Math.PI);
   ctx.stroke();
}
````

---
## Canvas: Arco
<canvas id="canvas3" width="600" height="300" style="background-color: #8dcffc" onclick="dibujoParabola()">
    Su navegador no soporta HTML5
</canvas>

---
## ¿Dudas, Preguntas, Comentarios?
![DUDAS](images/pregunta.gif)
