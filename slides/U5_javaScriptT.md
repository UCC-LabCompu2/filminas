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
## ¿Dudas, Preguntas, Comentarios?
![DUDAS](images/pregunta.gif)
