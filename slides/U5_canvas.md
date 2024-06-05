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

### Graficos en HTML5
* Canvas
* SVG
<br><br>

### Canvas
* Contexto
* Métodos
* Propiedades
* Ej. arc(x,y,r,ap,af,cR)

</div>
<div class="grid-item">

[Ejercicio: Dibujar cuadrado y circulo](U5_canvas.html#/2)

* Canvas: Métodos & propiedades

[Ejercicio: Mini-paint](U5_canvas.html#/6)

[Ejercicio: Dibujar cuadriculado](U5_canvas.html#/8)

[Ejercicio: Dibujar imagen](U5_canvas.html#/14)

* Borrar canvas
* Escribir texto
</div>
</div>

---
## Gráficos en HTML5
Existen 2 elementos dentro de HTML5 que permiten la generación de gráficos:
* **Canvas:** Dibuja objetos como un mapa de bits en un lienzo.
* **SVG (Scalable Vector Graphics):** Dibuja vectores sobre un lienzo.

---
## Canvas vs. SVG
<!-- .slide: style="font-size: 0.70em" -->
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
const canvas = document.getElementById('canvasEjercicio');
const ctx = canvas.getContext('2d');
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
  Limpia un área rectangular.
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
  El grosor de las lineas.

---
## Canvas: Ejemplo
<canvas id="canvasEJ1" width="600" height="300" style="background-color: #8dcffc" onclick="dibujo()">
    Su navegador no soporta HTML5
</canvas>

---
## [Canvas](http://www.w3schools.com/tags/ref_canvas.asp)
````javascript
function dibujo() {
   const canvas = document.getElementById("canvasEJ1");
   const ctx = canvas.getContext("2d");
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
### Canvas: arc(x,y,r,ap,af,cR)
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
   const canvas = document.getElementById("canvas3");
   const ctx = canvas.getContext("2d");

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
## Borrar Canvas
````javascript
//Para borrar TODO el contenido
canvas.width=canvas.width;
//Para borrar un área rectangular
ctx.clearRect(x, y, width, height);
````

---
## Ejercicio: Mini-Paint
* Utilizar el evento onmousemove para disparar la función de dibujo
* En la función, obtener la posición x e y del ratón y dibujar un punto en el canvas
* Agregar una variable "bandera" que indique si el botón del ratón se presionó (onmousedown, onmouseup)
* Cree un boton para limpiar (borrar) el canvas

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
   const canvas = document.getElementById("canvas2");
   const ctx = canvas.getContext("2d");
   //Dibuja lineas horizontales
   for(let i=0; i<300;){
       ctx.moveTo(0,i);
       ctx.lineTo(600,i);
       ctx.strokeStyle = "#D8D8D8";
       ctx.stroke();
       i=i+20;
   }
   //Dibuja lineas verticales
   for(let i=0; i<600;){
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
   const c = document.getElementById("canvas4");
   const ctx = c.getContext("2d");
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
## Ejercicio: Dibujar imagen Mejorado
* En el HTML crea un **Dialog**, que indique que los valores ingresados por el usuario son incorrectos
* Si el usuario ingresa en los inputs coordendas menores a 0, o mayores al lienzo (y parte de la imagen queda fuera), debe mostrar el mensaje de error

---
## Ejercicio: Dibujar Imagen Mejorado
````javascript
<dialog id="myDialog">
    <h3>Error al ingresar los datos!</h3>
    <button onclick="closeDialog()">Cerrar</button>
</dialog>

let closeDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.close();
}

let openDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.showModal();
}

let dibujarImagen = (posX, posY) => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    console.log(posX, posY);
    const img = new Image();
    img.src = "images/auto.png";

    canvas.width = canvas.width;


    img.onload = function (){
        const width = this.naturalWidth;
        const height = this.naturalHeight;
        console.log(width, height);

        if(posY<0 || posX<0){
            openDialog();
        }else if(canvas.width-width<posX || canvas.height-height<posY){
            openDialog();
        }else{
            ctx.drawImage(img, posX, posY);
        }
    }
}
````

---
## Escribir texto en canvas Canvas
````javascript
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.font="10pt Verdana";
ctx.fillStyle = "blue";
ctx.fillText( "Hola Mundo!!!", canvas.width/2, canvas.height/2);
````

---
## Ejercicio: Escribir Texto
* Emplea de base el ejercicio canvas_cuadriculado
* Modifica el código para escribir un número en el eje de las X y en el eje de las Y

---
## Ejercicio: Escribir Texto
````javascript
let dibujarCuadriculado = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.font="10pt Verdana";
    ctx.fillStyle = "blue";

    console.log("Se comenzara a dibujar!!!");
    const xMax = canvas.width;
    const yMax = canvas.height;

    let paso = 20;
    let ejeX=-15;
    let ejeY=-25;
    let despl = 2;

    //Dibujar Líneas Horizontales

    for(let i=0;i<yMax;i+=paso){
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(xMax, i);
        ctx.strokeStyle = "#a19797"
        ctx.stroke();
        ctx.fillText(ejeX, xMax/2+despl, i+4);
        ejeX +=1;
        ctx.closePath();
    }

    //Dibujar Líneas Verticales
    for(let i=0;i<xMax;i+=paso){
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, yMax);
        ctx.strokeStyle = "#1b73f8"
        ctx.fillText(ejeY, i, yMax/2 - 6);
        ejeY +=1;
        ctx.stroke();
        ctx.closePath();
    }

    //Eje X
    ctx.beginPath();
    ctx.moveTo(0, yMax/2);
    ctx.lineTo(xMax, yMax/2);
    ctx.strokeStyle = "#830303"
    ctx.stroke();
    ctx.closePath();

   //Eje Y
    ctx.beginPath();
    ctx.moveTo(xMax/2, 0);
    ctx.lineTo(xMax/2, yMax);
    ctx.strokeStyle = "#830303"
    ctx.stroke();
    ctx.closePath();
}
````


---
## Podemos Continuar con el Segundo Parcial!
<!-- .slide: style="font-size: 0.70em" -->
Se debe agregar funcionalidad Js a la página HTML+CSS desarrollada
* Una función que compruebe si los valores ingresados son correctos, y si no lo son, que le indique al usuario por un alert ó  **dialog**, y que blanquee el contenido del campo.
* Una función que calcule algo en base a los valores ingresados por el usuario en los inputs.
* Una función que realice un dibujo sobre un canvas.
* No debe haber errores en el javaScript.
* El código debe estar pusheado en el repositorio.
* **TODAS** las funciones javaScript deben estar comentadas adecuadamente.

---
## ¿Dudas, Preguntas, Comentarios?
![DUDAS](images/pregunta.gif)
