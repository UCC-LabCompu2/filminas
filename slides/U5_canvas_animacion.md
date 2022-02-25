---
title: Canvas
theme: black
slideNumber: true
---

# Animación en Canvas
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
<!-- .slide: style="font-size: 0.80em" -->
## Temario
<div class="grid-item">

### Formas de animar
* setInterval()
* setTimeout()
* requestAnimationFrame()
* cancelAnimationFrame()
* Pasos básicos de animación

[Ejercicio: Canvas y setInterval](U5_canvas_animacion.html#/5)

</div>

---
## Animación
Con Js se puede controlar elementos **canvas** para generar animaciones.

Para ello deberemos emplear algunas de los siguientes métodos:
* setInterval()
* setTimeout()
* requestAnimationFrame()

---
## Pasos básicos de animación
<!-- .slide: style="font-size: 0.65em" -->
Estos son los pasos que necesitas para dibujar un cuadro:

**1. Limpiar el canvas** <br>
A menos que las formas que vas a dibujar llenen el canvas completo (por ejemplo, una imagen de fondo), debes borrar cualquier forma que haya dibujado previamente.

**2. Guardar el estado del canvas** <br>
Si estás cambiando alguna configuración (como estilos, transformaciones, etc.) que afecte el estado del canvas y deseas asegurarte de que se utiliza el estado original cada vez que se dibuja una figura, debes guardar ese estado original. 

**3. Dibujar formas animadas** <br>
El paso en el que realizas el renderizado del cuadro actual.

**4. Restaurar el estado del canvas** <br>
Si has guardado el estado, restáuralo antes de dibujar un nuevo cuadro.

---
## setInterval(function, delay)
Ejecuta una función o un fragmento de código de forma repetitiva cada vez que termina el periodo de tiempo determinado. 

````javascript
var procesoID = window.setInterval(función, intervaloDeTiempo[, parámetro1, parámetro2, ... , parámetroN]);
var procesoID = window.setInterval(código, intervaloDeTiempo);
````

---
## Ejercicio: Canvas y setInterval()
Utilizando la función anterior que dibujaba imágenes y la función setInterval() de javascript, realice una animación 
que mueva la imagen desde el borde izquierdo al derecho del canvas.

---
## Ejercicio: Canvas y setInterval()
<iframe width="560" height="315" src="https://www.youtube.com/embed/lK2JkR9ykSc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## [setTimeOut(function, delay)](https://www.w3schools.com/jsref/met_win_settimeout.asp) 
* Llama a una función o evalúa una expresión después de un número específico de milisegundos 
* La función solo se ejecuta una vez.
* Si se necesita repetir la ejecución, se usa el método **setInterval()**
* El método **creatTimeOut()** evita que la función continue ejecutandose

---
## [setTimeOut(function, delay)](https://www.w3schools.com/jsref/met_win_settimeout.asp) 
````javascript
setTimeout(function(){ alert("Hello"); }, 3000);
````
Otro ejemplo:
````javascript
<body onload="esperar()">
//En el código JS
function abrirWeb() {
    window.open('Jugador.html','_self');
}

function esperar() {
    setTimeout(abrirWeb, 6000);
}
````

---
## [requestAnimationFrame(callback)](https://developer.mozilla.org/es/docs/Web/API/Window/requestAnimationFrame)
* Comunica al navegador que  deseas iniciar una animación y requieres que el navegador llame a las funciones especificas 
para actualizar la misma antes de la siguiente escena.

````javascript
requestID = window.mozRequestAnimationFrame(callback);   // Firefox
window.msRequestAnimationFrame(callback);                // IE 10 PP2+
window.webkitRequestAnimationFrame(callback[, element]); // Chrome/Webkit
````

---
## [cancelAnimationFrame(callback)](https://developer.mozilla.org/es/docs/Web/API/Window/cancelAnimationFrame)
* Cancela la petición de animación previamente programada a través de window.requestAnimationFrame().

````javascript
window.cancelAnimationFrame(requestID);
````


---
## Podemos Continuar con el Segundo Parcial!
<!-- .slide: style="font-size: 0.70em" -->
Se debe agregar funcionalidad Js a la página HTML+CSS desarrollada
* Realiza un dibujo en el canvas
* El dibujo debe ser representativo de los valores ingresados (ej. que un triángulo se vea más grande o más pequeño según lo que ingreso el usuario)
* Realizar **animaciones** es un requisito del final, no del parcial! (así que tienes tiempo para ir pensando como realizarlo)
* Ten en cuenta que el usuario quizás ingrese valores que no puedas graficar (que se salgan del ancho u alto del canvas). 
En ese caso, puedes escalar los valores, o indicar con un alert que los valores están fuera del área de dibujo.

---
## ¿Dudas, Preguntas, Comentarios?
![DUDAS](images/pregunta.gif)
