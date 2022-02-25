---
title: Canvas
theme: black
slideNumber: true
---

# Canvas
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

[Ejercicio: Dibujar cuadrado y circulo](U5_canvas.html#/2)

* Canvas: Métodos & propiedades

[Ejercicio: Mini-paint](U5_canvas.html#/6)

[Ejercicio: Dibujar cuadriculado](U5_canvas.html#/8)

[Ejercicio: Dibujar imagen](U5_canvas.html#/14)

* Borrar canvas
* Escribir texto

</div>

---
## Ejercicio: Dibujar cuadrado y circulo
* Crear una función javascript que dibuje un círculo y un cuadrado en un canvas.
* Llamar la función al cargar la página.
* El círculo debe estar en la mitad del canvas.
* El cuadrado debe estar en la esquina inferior izquierda, separado un cierto margen.

---
## Ejercicio: Dibujar cuadrado y circulo
<iframe width="560" height="315" src="https://www.youtube.com/embed/g_I3oExuQ-M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Canvas: Más Métodos
<!-- .slide: style="font-size: 0.80em" -->
* **moveTo(x, y)** <br>
  Mueve el camino al punto especificado, sin crear una línea.
* **lineTo(x, y)** <br>
  Crea una línea desde el último punto en el camino hasta el punto dado.
* **beginPath()** <br>
  Comienza un dibujo nuevo.
* **closePath()** <br>
  Termina un dibujo (levanta el lapiz).
* **arcTo(x1, y1, x2, y2, radius)** <br>
  Crea un arco entre dos puntos.
 
---
## Canvas: Más Propiedades
<!-- .slide: style="font-size: 0.80em" -->
* **shadowColor = color**
    El color de la sombra.
* **shadowOffsetX = number**
    La distancia horizontal de la sombra.
* **shadowOffsetY = number**
    La distancia vertical de la sombra.
* **shadowBlur = number**
    El tamaño del efecto de desenfoque.
       
---
## Ejercicio: Mini-Paint
* Utilizar el evento onmousemove para disparar la función de dibujo
* En la función, obtener la posición x e y del ratón y dibujar un punto en el canvas
* Agregar una variable "bandera" que indique si el botón del ratón se presionó (onmousedown, onmouseup)
* Cree un boton para limpiar el canvas

---
## Ejercicio: Mini-Paint
<iframe width="560" height="315" src="https://www.youtube.com/embed/q4jeaoqnldg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Ejercicio: Dibujar cuadriculado
* Crear una función javascript que dibuje un cuadriculado en un canvas 
* Llamar la función desde un botón en la página

---
## Canvas: Cuadriculado
<canvas id="canvas2" width="600" height="300" style="background-color: #8dcffc" onclick="dibujo2()">
   Su navegador no soporta HTML5
</canvas>

---
## Canvas: Cuadriculado
<iframe width="560" height="315" src="https://www.youtube.com/embed/2ei-dCOQrq4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Canvas: Cuadriculado
````javascript
function dibujo2() {
   var canvas = document.getElementById("canvas2");
   var ctx = canvas.getContext("2d");
   //Dibuja lineas horizontales
   for(var i=0; i<300;){
       ctx.moveTo(0,i);
       ctx.lineTo(600,i);
       ctx.strokeStyle = "#D8D8D8";
       ctx.stroke();
       i=i+20;
   }
   //Dibuja lineas verticales
   for(var i=0; i<600;){
       ctx.moveTo(i,0);
       ctx.lineTo(i,600);
       ctx.strokeStyle = "#D8D8D8";
       ctx.stroke();
       i=i+20;
   }
   //Eje X
   ctx.beginPath();
   ctx.moveTo(600,160);
   ctx.lineTo(0,160);
   ctx.strokeStyle = "#FA5858";
   ctx.stroke();
   //Eje Y
   ctx.beginPath();
   ctx.moveTo(300,0);
   ctx.lineTo(300,300);
   ctx.strokeStyle = "#FA5858";
   ctx.stroke();
}
````

---
## Canvas: arcTo()
<canvas id="canvas4" width="600" height="300" style="background-color: #8dcffc" onclick="dibujoArcT()">
    Su navegador no soporta HTML5
</canvas>

---
## Canvas: arcTo()
````javascript
function dibujoArcT() {
   var c = document.getElementById("canvas4");
   var ctx = c.getContext("2d");
   ctx.beginPath();
   ctx.moveTo(20, 120);
   ctx.lineTo(100, 40);
   ctx.arcTo(130, 10, 150, 40, 20);
   ctx.lineTo(220, 120);
   ctx.stroke();
}
````

---
## Ejercicio: Dibujar imagen
* Crear 2 inputs para que el usuario ingrese X e Y
* Crear un boton que llame una función y le pase los parametros X e Y
* Crear una función JS que dibuje una imagen (drawImage) en la posición especificada

---
## Ejercicio: Dibujar imagen
<iframe width="560" height="315" src="https://www.youtube.com/embed/h8CsSjv3U48" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Borrar Canvas
````javascript
//Para borrar TODO el contenido
canvas.width=canvas.width;
//Para borrar un área rectangular
ctx.clearRect(x, y, width, height);
````

---
## Escribir texto en canvas Canvas
````javascript
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font="10pt Verdana";
ctx.fillStyle = "blue";
ctx.fillText( "Hola Mundo!!!", canvas.width/2, canvas.height/2);
````

---
## Podemos Continuar con el Segundo Parcial!
<!-- .slide: style="font-size: 0.70em" -->
Se debe agregar funcionalidad Js a la página HTML+CSS desarrollada
* Una función que compruebe si los valores ingresados son correctos, y si no lo son, que le indique al usuario por un alert, y que blanquee el contenido del campo.
* Una función que calcule algo en base a los valores ingresados por el usuario en los inputs.
* Una función que realice un dibujo sobre un canvas.
* No debe haber errores en el javaScript.
* El código debe estar pusheado en el repositorio (emplear gh-pages).
* Las funciones javaScript deben estar comentadas adecuadamente.

---
## ¿Dudas, Preguntas, Comentarios?
![DUDAS](images/pregunta.gif)
