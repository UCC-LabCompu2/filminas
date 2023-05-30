---
title: Animacion Canvas
theme: black
slideNumber: true
---

# Animación en Canvas
Created by <i class="fab fa-telegram"></i>
[edme88]("https://t.me/edme88")

---
<style>
.grid-container2 {
    display: grid;
    grid-template-columns: auto auto;
    font-size: 0.8em;
    text-align: left !important;
}

.grid-item {
    border: 3px solid rgba(121, 177, 217, 0.8);
    padding: 20px;
    text-align: left !important;
}
</style>
<!-- .slide: style="font-size: 0.80em" -->
## Temario
<div class="grid-container2">
<div class="grid-item">

* Animación
* Pasos básicos de animación
* setInterval()
 
[Ejercicio: Canvas y setInterval](U5_canvas_animacion.html#/5)
* setTimeout()

[Ejercicio: Canvas y setTimeout](U5_canvas_animacion.html#/9)
</div>
<div class="grid-item">

* requestAnimationFrame()

[Ejercicio: Canvas y requestAnimationFrame](U5_canvas_animacion.html#/12)

* cancelAnimationFrame()

[Ejercicio: Canvas y cancelAnimationFrame](U5_canvas_animacion.html#/14)
</div>
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
A menos que las formas que vas a dibujar llenen el canvas completo (por ejemplo, una imagen de fondo), debes borrar cualquier forma que hayas dibujado previamente.

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
* El método **clearTimeout()** evita que la función continue ejecutandose

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
## Ejercicio: Canvas y setTimeOut()
* Emplee de base **animarAuto** y haga que posterior a 6 seg el movimiento se detenga
* Cree 2 funciones:
  * comenzarAnimacion(): Emplee animarAuto como en el ejercicio anterior. Llame a detenerAuto tras 6seg
  * detenerAuto(): Limpie el intervalo
* La función de comenzarAnimacion debe llamarse en el onload del body

---
## Ejercicio: Canvas y setTimeOut()
````javascript
var x=0;
var dx=2;
let animarAuto = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = "images/auto.png";

    img.onload = function (){
        canvas.width = canvas.width;
        ctx.drawImage(img, x, 100);
    }

    if(x>canvas.width){
        x=0;
    }
    x+=dx;
}

var timeoutId;
let detenerAuto = () => {
    console.log("Se detuvo el auto")
    clearInterval(intervalId); // Detener la animación
}


let comenzarAnimacion = () => {
    console.log("Se llamo a comenzar animacion")
    intervalId = setInterval(animarAuto, 10);
    setTimeout(detenerAuto, 6000);
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
## Ejercicio: Canvas y requestAnimationFrame()
* Emplee de base **animarAuto**
* Cree animarNuevo para llamar a animarAuto
* animarAuto se debe llamar a si mismo

---
## Ejercicio: Canvas y requestAnimationFrame()
````javascript
var x=0;
var dx=2;
let animarAuto = () => {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  const img = new Image();
  img.src = "images/auto.png";

  img.onload = function (){
    canvas.width = canvas.width;
    ctx.drawImage(img, x, 100);
    requestAnimationFrame(animarAuto);
  }

  if(x>canvas.width){
    x=0;
  }
  x+=dx;
}

let animarNuevo = () => {
  requestAnimationFrame(animarAuto);
}
````

---
## [cancelAnimationFrame(callback)](https://developer.mozilla.org/es/docs/Web/API/Window/cancelAnimationFrame)
* Cancela la petición de animación previamente programada a través de window.requestAnimationFrame().

````javascript
window.cancelAnimationFrame(requestID);
````

---
## Ejercicio: Canvas y cancelAnimationFrame()
* Emplee de base **animarAuto3**
* Cree cancelarAnimacion para cancelar a animarAuto
* En animarAuto emplee un setTimeOut

---
## Ejercicio: Canvas y cancelAnimationFrame()
````javascript
var x=0;
var dx=2;
var animationId;
let animarAuto = () => {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  const img = new Image();
  img.src = "images/auto.png";

  img.onload = function (){
    canvas.width = canvas.width;
    ctx.drawImage(img, x, 100);
    animationId = requestAnimationFrame(animarAuto);
  }

  if(x>canvas.width){
    x=0;
  }
  x+=dx;
}

let animarNuevo = () => {
  setTimeout(cancelarAnimacion, 6000);
  requestAnimationFrame(animarAuto);
}

let cancelarAnimacion = () => {
  cancelAnimationFrame(animationId); // Cancelar la animación utilizando el ID almacenado
};
````

---
## Podemos Continuar con el Segundo Parcial!
<!-- .slide: style="font-size: 0.70em" -->
Se debe agregar funcionalidad Js a la página HTML+CSS desarrollada
* Realiza un dibujo en el canvas
* El dibujo debe ser representativo de los valores ingresados (ej. que un triángulo se vea más grande o más pequeño según lo que ingreso el usuario)
* Realizar **animaciones** es un requisito del final, no del parcial! (así que tienes tiempo para ir pensando como realizarlo)
* Ten en cuenta que el usuario quizás ingrese valores que no puedas graficar (que se salgan del ancho u alto del canvas). 
En ese caso, puedes escalar los valores, o indicar con un alert ó **dialog** que los valores están fuera del área de dibujo.

---
## ¿Dudas, Preguntas, Comentarios?
![DUDAS](images/pregunta.gif)
