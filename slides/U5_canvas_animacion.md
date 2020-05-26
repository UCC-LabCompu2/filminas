---
title: Canvas
theme: black
slideNumber: true
---

# Canvas
<small>
Created by <i class="fab fa-telegram"></i>
[edme88]("https://t.me/edme88") & 
<i class="fab fa-telegram"></i>
[rmarku]("https://t.me/rmarku")
</small>

---
## Animación
Con Js se puede controlar elementos **canvas** para generar animaciones.

Para ello deberemos emplear algunas de los siguientes métodos:
* setInterval()
* setTimeout()
* requestAnimationFrame()

---
## Pasos básicos de animación
<!-- .slide: style="font-size: 0.70em" -->
Estos son los pasos que necesitas para dibujar un cuadro:
**1. Limpiar el canvas** <br>
A menos que las formas que vas a dibujar llenen el canvas completo (por ejemplo, una imagen de fondo), debes borrar cualquier forma que haya dibujado previamente. La forma más fácil de hacerlo es usar el método clearRect().

**2. Guardar el estado del canvas** <br>
Si estás cambiando alguna configuración (como estilos, transformaciones, etc.) que afecte el estado del canvas y deseas asegurarte de que se utiliza el estado original cada vez que se dibuja una figura, debes guardar ese estado original. 

**3. Dibujar formas animadas** <br>
El paso en el que realizas el renderizado del cuadro actual.

**4. Restaurar el estado del canvas** <br>
Si has guardado el estado, restáuralo antes de dibujar un nuevo cuadro.

---
## setInterval(function, delay)
* Ejecuta una función especificada por function cada delay milisegundos.

````javascript
var procesoID = window.setInterval(función, intervaloDeTiempo[, parámetro1, parámetro2, ... , parámetroN]);
var procesoID = window.setInterval(código, intervaloDeTiempo);
````

---
## Ejercicio: Canvas y setInterval()
Utilizando la función anterior que dibujaba imágenes y la función setInterval() de javascript, realice una animación 
que mueva la imagen desde el borde izquierdo al derecho del canvas.

---
## [setTimeOut()](https://www.w3schools.com/jsref/met_win_settimeout.asp) 
* Llama a una función o evalúa una expresión después de un número específico de milisegundos 
* La función solo se ejecuta una vez.
* Si se necesita repetir la ejecución, se usa el método **setInterval()**
* El método **creatTimeOut()** evita que la función continue ejecutandose
````javascript
setTimeout(function(){ alert("Hello"); }, 3000);
````

---
## requestAnimationFrame()
* Comunica al navegador que  deseas iniciar una animación y requieres que el navegador llame a las funciones especificas para actualizar la misma antes de la siguiente escena.
````javascript
requestID = window.mozRequestAnimationFrame(callback);   // Firefox
window.msRequestAnimationFrame(callback);                // IE 10 PP2+
window.webkitRequestAnimationFrame(callback[, element]); // Chrome/Webkit
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
