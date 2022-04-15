---
title: Orientación a Eventos
theme: black
slideNumber: true
---

# Orientación a Eventos
Created by <i class="fab fa-telegram"></i>
[edme88]("https://t.me/edme88")

---
<style>
.grid-item {
    border: 3px solid rgba(121, 177, 217, 0.8);
    padding: 20px;
    text-align: left !important;
}
</style>
<!-- .slide: style="font-size: 0.70em" -->
## Temario
<div class="grid-item">

* Programación dirigida por eventos
* Lenguajes

### Eventos
* Definición
* Tipos de eventos
* Mouse
    * Teclado
    * Navegador
    * Formularios
* Event Handler
* Event Listeners
* Objeto del evento

</div>

---
## Libros:
![Book](images/book.png)
Material de consulta:
“Programación con lenguajes de guión en páginas web (UF1305)”
de Carlos Ollero Sánchez

---
## Programación Dirigida por eventos
Paradigma de programación en el que la estructura y la ejecución de los programas van determinados por los 
sucesos que ocurran en el sistema, definidos por el usuario o por el propio sistema.

---
## Programación Dirigida por eventos
El código no se ejecutará en un flujo lineal, sino, de forma asíncrona, según vayan ocurriendo los **eventos**. 

---
<!-- .slide: data-background="images/Eventos/Lenguajes.png" -->
## Lenguajes
* JavaScript
* ActionScript
* Visual Basic
* C#
* Visual C++
* etc...

---
## [Eventos](https://www.w3schools.com/jsref/dom_obj_event.asp)
Todo aquello que puede ser detectado y que pueda producir una reacción.

Ej. Hacer click en un botón, mover el puntero sobre un enlace, seleccionar un elemento de una lista desplegable, etc.

---
## [Tipos de Eventos](https://content.breatheco.de/es/lesson/event-driven-programming#%C2%BFpero-qui%C3%A9n-desencadena-estos-eventos)
* Eventos de Usuario
  * Eventos del mouse
  * Eventos del teclado
* Eventos del navegador
  * Manipulación de las ventanas del navegador
  * Comunicación con el servidor
* Eventos generados desde código
  * Cambios en el contenido, aspecto o estructura
  * Especificación DOM (Document Object Model)

---
## Eventos de Mouse
<!-- .slide: style="font-size: 0.90em" -->
* **onClick**: Cuando el usuario hace clic con el mouse o el dedo en cualquier elemento HTML.
* **onMouseover, onMouseout**:	El evento ocurre cuando el puntero se mueve hacia dentro (para el mouseover) o hacia afuera 
(para el mouseout) un elemento, o uno de sus hijos.
* **contextmenu**: Cuando el usuario hace clic derecho en el mouse.
* **onMousemove**: Si el usuario mueve el mouse.
* **onMousedown, onMouseup**: Si el usuario presiona o suelta el mouse.

---
### Ejemplo de Evento de Mouse
````html
<input type="button" value="Mostrar Cartel" onclick="alert('Hola Mundo!!!');" />
<br>
<div id="contenidos" style="width:150px; height:60px; border:thin solid silver" 
     onmouseover="this.style.borderColor='black';" 
     onmouseout="this.style.borderColor='silver';">
    Sección de contenidos...
</div>
````

---
## Eventos de Teclado
* **onKeyup**: Cuando el usuario suelta la tecla del teclado.
* **onKeydown**: Cuando el usuario presiona la tecla del teclado.
* **onKeypress**: Cuando el usuario presiona y suelta la tecla del teclado. La diferencia de keydown/up es que Keypress 
solo funciona con teclas de caracteres. Por ejemplo, no funciona en las flechas arriba

---
## Eventos Navegador
<!-- .slide: style="font-size: 0.80em" -->
* **Unload**: Abandonar la página
* **Load**: El navegador ha terminado de cargar el sitio web.
* **Error**: El evento ocurre cuando se produce un error al cargar un archivo externo (como un CSS o un JavaScript).
* **Scroll**: El evento ocurre cuando se realiza scroll.
* **PageHide, PageShow**: Cuando el usuario se enfoca en una ventana/pestaña diferente; o cuando el usuario vuelve de 
una ventana/pestaña diferente.
* **Resize**: Cuando la ventana se redimensiona.
* **Move**: Al mover la ventana del navegador
* **DragDrop**:Al soltar algo que se ha arrastrado sobre la página
* **Abort**: Al detenerse la carga de una imagen, de la página o irse de la pagina.

---
## Eventos de Formularios
<!-- .slide: style="font-size: 0.90em" -->
* **Submit**: El evento ocurre cuando se envía un formulario.
* **Focusin, Focusout**: El evento ocurre cuando el puntero se mueve a un elemento o a uno de los elementos secundarios del elemento.
* **Input**: El evento ocurre cuando un elemento obtiene la entrada del usuario.
* **Change**: El evento ocurre cuando el contenido de un elemento del formulario, la selección o el estado previamente 
establecido han cambiado (para ````<input>, <keygen>, <select>, y <textarea>````)

---
## Event Handler
El manejador de eventos contiene instrucciones acerca de que hacer cuando una clase particular de evento se dispara.

---
## Event Listeners
La única forma de reaccionar ante cualquier evento es **escuchar** ese evento y asignar una función que maneje el evento como lo necesite.

El detector de eventos se puede agregar:
* En el HTML
* En JavaScript

---
## Listeners en HTML
Por ejemplo, si se desea empezar a escuchar cuando el usuario hace clic en un botón, se debe especificar el atributo 
"onclick" para esa etiqueta HTML específica ````<button>````:
````javascript
<!– myClickHandler is a javascript function that will handle the event –>
<button onclick="llamar_alert();">Alertar Usuario</button>
 
<script>
function llamar_alert(){
    alert(‘Hola Usuario!!!’);
}
</script>
````

---
## Listeners en Javascript
A veces el elemento DOM no existe desde el principio, porque se crea después de una llamada a la base de datos o 
después de que el usuario haya hecho algo.

La función **.addEventListener** se puede usar en cualquier elemento DOM durante el tiempo de ejecución. 
Se debe especificar qué evento se quiere escuchar, y la función controladora que se llamará cada vez que ese evento se 
active en ese elemento DOM.

---
## Listeners en Javascript
Por ejemplo, este código está creando una lista de nombres, y cada ancla de eliminación en cada fila está escuchando el evento "click" solo para esa fila.
````javascript
<!– myClickHandler is a javascript function that will handle the event –>
<!DOCTYPE html>
<html>
    <head>
        <title>repl.it</title>
    </head>
    <body onload="inicialize();">
        <button id="onTimeButton">First time only</button>
    </body>
</html>
 
<script>
var listenerFunction = function(){
    alert('First click');
    document.getElementById('onTimeButton').removeEventListener("click",listenerFunction);
}
function inicialize(){
    document.getElementById('onTimeButton').addEventListener("click",listenerFunction);
}
</script>
````

---
## Objeto del Evento
<!-- .slide: style="font-size: 0.90em" -->
Los controladores de eventos pueden tener un parámetro opcional en la declaración de la función, que se llena con un 
objeto "Evento" que contiene información sobre el **evento que se activó** para obtener esta función llamada.

* **Objetivo**: Devuelve el objeto DOM que ha activado el evento.
* **Tipo**: El tipo de evento: haga clic en, al pasar el ratón, carga, etc .
* **Cancelable**: Si puede detener la propagación del evento o no.

---
## Objeto del Evento
````javascript
function myEventHandler(eventObj)
{
    console.log(eventObj.target);
     //imprimirá en la consola del objeto DOM que ha activado el evento
    console.log(eventObj.type);
     //Imprimirá en la consola el tipo de evento. 
    console.log(eventObj.cancelable);
     //Imprimiremos en la consola verdadero o falso si podemos detener la propagación de este evento.
}
````

Dependiendo del tipo de evento, tendrá propiedades adicionales que le darán información muy útil sobre lo que sucedió cuando se activó el evento.


---
## Objeto del Evento Mouse
* **clientX, clientY**: Devuelve la horizontal o vertical de coordenadas del puntero del ratón, con relación a la 
ventana actual, cuando el evento de ratón fue provocada.
* **pageX, pageY**: Devuelve la horizontal o vertical de coordenadas del puntero del ratón - en relación con el 
documento - cuando el evento de ratón fue provocado.
* **which**: Devuelve qué botón del ratón cuando se presiona el evento de ratón se desencadenó

---
## Objeto del Evento Teclado
* **keyCode**: Devuelve el código de caracteres Unicode de la tecla que activa el evento.
* **shiftKey, altKey o ctrlKey**: Devuelve si el shift,alt o ctrl se pulsan con el evento clave fue provocada.

---
### Objeto del Evento Rueda del Mouse
* **deltaX, deltaY**: Devuelve la cantidad de desplazamiento vertical u horizontal de una rueda del ratón ( eje y) o (eje x)
* **deltaMode**: Devuelve un número que representa la unidad de mediciones de valores delta (píxeles, líneas o páginas)

---
## Eliminar los Listeners
Se pueden eliminar los **listener** empleando:
````javascript
element.removeEventListener(type, eventHandlerFunction);
````

---
### Eliminar los Listeners: Ejemplo
En este código, se añade un detector de eventos para el evento click, pero luego, la primera vez que el detector de 
click se llama a la función de controlador, elimina el detector de eventos desde el botón. 
La segunda vez que se hace clic en el botón, no pasa nada.
````javascript
var listenerFunction = function(){
    alert("First click");
    document.getElementById("onTimeButton").removeEventListener("click",listenerFunction);
}
function inicialize(){
    document.getElementById("onTimeButton").addEventListener("click",listenerFunction);
}
````

---
## ¿Dudas, Preguntas, Comentarios?
![DUDAS](images/pregunta.gif)
