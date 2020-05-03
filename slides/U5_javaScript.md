---
title: javaScript
theme: black
slideNumber: true
---

# JavaScript
<small>
Created by 
<i class="fab fa-telegram"></i> 
[edme88]("https://t.me/edme88") & 
<i class="fab fa-telegram"></i>
[rmarku]("https://t.me/rmarku")
</small>

---
## JavaScript
Es un lenguaje de scripting multiplataforma y orientado a objetos.
Se usa principalmente del lado del cliente implementado como parte de un navegador web permitiendo mejoras en la interfaz de usuario y páginas web dinámicas.

---
## Características
* Orientado a Eventos y Objetos
* Lenguaje Interpretado
* Tipado dinámico (una variable puede tomar valores de distinto tipo)

---
## Incluir JavaScript
* En el mismo documento, agregando &lt;script&gt;
* En un archivo externo
````javascript
<script type="text/javascript" src="/js/codigo.js"></script>
````
* En linea
````javascript
<button onclick="alert('Hola Mundo!!!')">Enviar</button>
<!--el onclick es el eventhandler-->
Puedes ver mas EventsHandlers aqui:
https://www.w3schools.com/jsref/dom_obj_event.asp
````
---
## Sintaxis
Conjunto de reglas que deben seguirse al escribir el código:
* No se tienen en cuenta los espacios en blanco y las nuevas líneas.
* Se distinguen las mayúsculas y minúsculas.
* No se define el tipo de las variables.
* Se pueden incluir comentarios.

---
## Variables
````javascript
var num;
var texto = "hola";
num = 5;
var ambos;
ambos = texto + ' ' + num; // ambos == "hola 5"

var arr[5];
````
---
## Funciones
````javascript
function miFuncionSuma(parametro1, parametro2){
   var res;
   res = parametro1 + parametro2;
   return res;
}
````
---
## Condicionales
````javascript
if(saludo == "Whatsup!"){
   console.log("Whatsup!");
}
````
* **==** iguales
* **!=** distintos
* **>** mayor
* **>=** mayor o igual
* **<** menor
* **<=** menor o igual
* **===** exactamente igual

---
## Bucles
````javascript
for(var i=0; i<20;i++){
   console.log("El valor es " + i);
}
````

````javascript
var i = 0;
while(i < 20){
   console.log("El valor es " + i);
   i++;
}
````

---
````javascript
switch(nombre){
   case "Juan":
    console.log("Se llama Juan");
    break;
   case "Pedro":
    console.log("Se llama Pedro");
    break;
   case "Pancracio":
    console.log("Se llama Pancracio");
    break;
}
````

---
## Funciones Callback
Funciones que se pasan como parámetros de otras funciones y que se ejecutan dentro de éstas.
````javascript
   setInterval(function(){ alert("Hello"); }, 3000);
````
El codigo de arriba y abajo hace lo mismo... Abre una ventana de alert que dice Hello cada 3000ms=3seg

(lo que volveria loco a un usuario xD )
````javascript
function miFunc(){
   alert("Hello");
}
setInterval(miFunc, 3000);
````

---
## [Buenas Prácticas](https://www.w3schools.com/js/js_best_practices.asp)
* Evitar las variables globales
* Declarar variables locales
* Declarar variables primero
* Inicializar variables
* No declarar variables como Number, String o Boolean
* Conocer el tipo de variables
* Terminar un Switch con default:
* Evitar usar eval()

<!--http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/#demo-simple-->

---
## Eventos y objetos
* Los eventos estan asociados a un objeto.
* Los eventos se producen porque sobre un objeto se produce alguna acción

---
## Eventos de elementos de Formularios
Se producen durante el uso de campos de formulario, como cajas de texto, listas desplegables, etc.

Se producen cuando un elemento recibe foco,lo pierde o se cambia el contenido.

---
## Eventos de elementos de Formularios
* **OnSelect:** Se produce cuando se selecciona texto en un campo
* **OnChange:** Se produce cuando se cambia algo en un elemento de formulario, y se pierde foco.

````javascript
<input type="text" onselect="alert('Se ejecuto onSelect')">
<input type="text" value="Cambiar Valor" onchange="alert('Se ejecuto onChange')">
````
<input type="text" onselect="alert('Se ejecuto onSelect')">
<input type="text" value="Cambiar Valor" onchange="alert('Se ejecuto onChange')">

---
## Ejercicio: Hola Mundo!
Mostrar un “alert()” con el texto “Hola Mundo!” que se ejecute en el onload del body.

---
## Ejercicio: Conversor de Unidades
Escribir funciones JavaScript para que, al escribir un número en cualquiera de los inputs, la unidad sea convertida.
* Emplear **OnChange** en los campos
* Los campos deben contener un nombre
* La función debe enviar el valor y el nombre del campo cambiado

---
## Ejercicio: Conversor de Unidades
![conversor de unidades](images/html/conversorUnidades.png)

---
## Ejemplo Conversion de Unidades
<form name="lasUnidades" style="text-align: right; width: 450px; margin:auto;">
metro=<input style="font-size: 22px" type="text" name="metro" onchange="cambioUnidades(this.value,this.name)">
<br>
pulgada=<input style="font-size: 22px" type="text" name="pulgada" onchange="cambioUnidades(this.value,this.name)">
<br>
pie=<input style="font-size: 22px" type="text" name="pie" onchange="cambioUnidades(this.value,this.name)">
<br>
yarda=<input style="font-size: 22px" type="text" name="yarda" onchange="cambioUnidades(this.value,this.name)">
<br>
</form>

---
## Ejemplo Conversion de Unidades
````javascript
function cambioUnidades(valor, unidad) {
    if(isNaN(valor)){
        alert("Se ingreso un valor invalido en " + unidad);
        document.lasUnidades.yarda.value = "";
        document.lasUnidades.metro.value = "";
        document.lasUnidades.pulgada.value = "";
        document.lasUnidades.pie.value = "";
    } else if (unidad == "metro") {
        document.lasUnidades.pulgada.value = valor * 39.3701;
        document.lasUnidades.pie.value = valor * 3.28084;
        document.lasUnidades.yarda.value = valor * 1.09361;
    } else if (unidad == "pulgada") {
        document.lasUnidades.metro.value = valor * 0.0254;
        document.lasUnidades.pie.value = valor * 0.08333;
        document.lasUnidades.yarda.value = valor * 0.027778;
    } else if (unidad == "pie") {
        document.lasUnidades.metro.value = valor * 0.3048;
        document.lasUnidades.pulgada.value = valor * 12;
        document.lasUnidades.yarda.value = valor * 0.333333;
    } else if (unidad == "yarda") {
        document.lasUnidades.metro.value = valor * 0.9144;
        document.lasUnidades.pulgada.value = valor * 36;
        document.lasUnidades.pie.value = valor * 3;
    }
}
````
---
## Documentar Código
````javascript
   /**
   * Descripción
   * @method Nombre de la función
   * @param Parámetro A
   * @param Parámetro B
   * @return Valor que retorna
   */
````

---
## Ejercicio: Documentación
Documentar las funciones del “Conversor de Unidades” adecuadamente,  indicando que hacen las funciones, el nombre del método, que parámetros se le envía y que valor retorna.

---
## Get element By
Cree una web con 2 inputs para convertir de grados a radianes.
* document.getElementById('id_del_elemento');
* document.getElementsByName('name_del_elemento');
* document.getElementsByTagName('elemento')[índice_del_elemento]; (Ej. document.getElementsByTagName('p')[3];)
    
Para más Info ver [Ejemplos](http://www.codexexempla.org/curso/curso_4_3_a.php)

---
## JavaScript: Leer Inputs
<form name="sumaNum">
    <input size="1" style="font-size: 28px" type="text" id="num1">+<input size="1" style="font-size: 28px" type="text" id="num2">=<input size="1" style="font-size: 28px" type="text" id="resultado" disabled>
    <button style="font-size: 28px" onclick="sumaN()"> Calcular</button>
</form>

````javascript
function sumaN() {
   var num1 = document.getElementById("num1").value;
   var num2 = document.getElementById("num2").value;
   var resultado = Number(num1) + Number(num2);
   document.getElementById("resultado").value = resultado;
}
````

---
## Objeto Math
Math es un objeto incorporado por javascript que posee propiedades y métodos creados por constantes y funciones matemáticas.

Todas las propiedades y métodos de Math son estáticos y no se pueden modificar.

---
## Ejercicio: Grados a Radianes
Cree una web con 2 inputs para convertir de grados a radianes.

* Emplear **OnChange** en los campos
* Los campos deben contener un id
* Se debe emplear Math.PI

![Grados a Radianes](images/html/gradosRadianes.png)

---
## Ejemplo: Potencias
X<sup>n</sup>

<form name="sumaNum">
    <input size="1" style="font-size: 28px" type="text" id="num3">
    <button style="font-size: 28px" onclick="potenciaN();raizN()"> Calcular</button>
</form>

````javascript
function potenciaN() {
   var numP = document.getElementById("num3").value;
   numP = Math.pow(numP,3);
   alert("El cubo del numero ingresado es "+numP);
}
````
   
````javascript
function raizN() {
   var numP = document.getElementById("num3").value;
   numP = Math.pow(numP,1/3);
   alert("La raiz cubica del numero ingresado es "+numP);
}
````

---
## Ejemplo: Sen y Cos
Sen(ang)

<form name="sumaNum">
    <input size="1" style="font-size: 28px" type="text" id="num4">
    <button style="font-size: 28px" onclick="senN()"> Calcular</button>
</form>

````javascript
function senN() {
   var senNum = document.getElementById("num4").value;
   //Math.sin(x) donde x en radianes
   var valorSen = Math.sin(senNum*Math.PI/180);
   alert("El seno de "+ senNum +" = "+ Math.round(valorSen*100)/100);
}
````

---
### Ejercicio: Mostrar/Ocultar div
Escribir una función JavaScript para mostrar u ocultar el div celeste.
* Emplear **OnChange** en los radio button
* Los campos deben contener un nombre u ID
* Se debe cambiar el estilo de display

![Mostrar/Ocultar](images/html/mostrarOcultarDiv.png)

---
## Ejemplo JavaScript
<div style="text-align: left; display: inline-block; margin: auto;">
    <input style="width: 30px;height: 30px" type="radio" name="velocidad" value="Vinicial" onclick="seMuestra(this.value)">Velocidad Inicial
    <input style="width: 30px;height: 30px" type="radio" name="velocidad" value="Vfinal" onclick="seMuestra(this.value)">Velocidad Final
    <input style="width: 30px;height: 30px" type="radio" name="velocidad" value="NingunaV" onclick="seMuestra(this.value)">Ninguna Velocidad
    <input style="width: 30px;height: 30px" type="radio" name="distancia" value="Dinicial" onclick="seMuestra(this.value)">Distancia Inicial
    <input style="width: 30px;height: 30px" type="radio" name="distancia" value="Dfinal" onclick="seMuestra(this.value)">Distancia FInal
</div>
<div id="variasCosas1" style="display: none; background-color: #0d99a5">
Aca hay valores de Velocidad! O mas radios, o algo xD
</div>
<div id="variasCosas2" style="display: none; background-color: #1b91ff">
Aca hay valores de Distancia! O mas radios, o algo xD
</div>

---
## JavaScript: Displayed
````javascript
function seMuestra(nombre) {
   if (nombre == "Vinicial" || nombre == "Vfinal") {
        document.getElementById('variasCosas1').style.display = 'block';
   } else if (nombre == "NingunaV") {
        document.getElementById('variasCosas1').style.display = 'none';
   } else if (nombre == "Dinicial" || nombre == "Dfinal") {
        document.getElementById('variasCosas2').style.display = 'block';
   }
}
````

---
## Ejercicio: Operaciones Matemáticas
Escribir funciones JavaScript para resolver las operaciones matemáticas una vez que el usuario ingresa un valor numérico en ambos inputs.
* Se debe castear de tipo String a tipo Number
* Los resultados deben contener el atributo disabled

---
## Ejercicio: Operaciones Matemáticas
![Operaciones Matematicas](images/html/operacionesMatematicas.png)

---
## Ejercicio: Conversor de Unidades II
Modificar las funciones para que el resultado de la conversión sólo posea 2 decimales.
* Emplear **Math.Round** antes de asignar el resultado
* Reemplace ',' por '.' para evitar errores

---
## Ejercicio: Conversor de Unidades II
![Conversor Unidades](images/html/conversorUnidades.png)

---
## Ejercicio: Operaciones Matemáticas II
Modificar el HTML para quitar los inputs de los resultados. Emplear div, y en JavaScript, emplear innerHTML.
* Emplear **innerHTML** para asignarle valores a los divs.

---
## Ejercicio: Operaciones Matemáticas II
![Operaciones Matematicas](images/html/operacionesMatematicas.png)

---
## Ejemplo: Random y Round
````javascript
function numAleatorio(a,b) {
   document.prueba1.textoP.value = Math.round(Math.random()*(b-a)+parseInt(a));
}
````   
       
<form name="prueba1">
    <input style="font-size: 48px;text-align: center;" type="text" size="1" onclick="numAleatorio(1,10)" name="textoP">
</form>

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
* **onUnload:** Al abandonar la página.
* **onLoad:** Al terminar de cargarse la página o imágenes
* **onClick:** Al hacer click al botón del mouse sobre un elemento de la página.
* **onDragDrop:** Al soltar algo que se ha arrastrado sobre la página
* **onError:** Si no se puede cargar un documento o una imagen
* **onAbort:** Al detenerse la carga de una imagen, de la página o irse de la pagina.

---
## Jerarquía de Objetos en Js
![Jerarquia Obejtos](images/html/jerarquiaObjetos.png)

---
## JavaScript: Formulas
<form name="formulas">
    distancia=<input size="1" style="font-size: 28px" type="text" id="dist2">
    <br>
    <select name="longitud">
        <option value="pulgadas">pulgadas</option>
        <option value="metros">metros</option>
    </select>
    <br>
    angulo=<input size="1" style="font-size: 28px" type="text" id="ang2">
    <select name="angulo2">
        <option value="radianes">radianes</option>
        <option value="grados">grados</option>
    </select>
    <br>
    <button style="font-size: 28px" onclick="calculoFun(dist2.value, ang2.value, longitud.value, angulo2.value)"> Calcular</button>
    <br>
    calculo=<input size="1" style="font-size: 28px" type="text" id="distR" disabled>*Sen<input size="1" style="font-size: 28px" id="angR" disabled>=<input size="1" style="font-size: 28px" type="text" id="result" disabled>
</form>

---
## JavaScript: Formulas
````javascript
function calculoFun(numDist, numAng, longi, angul) {
    if (isNaN(numDist) || isNaN(numAng)) {
    alert("Los valores ingresados no son numeros");
    } else {
        if (longi == "pulgadas")
            numDist = convertMetros(numDist);
        if (angul == "radianes")
            numAng = convertGrados(numAng);
    document.getElementById("distR").value = numDist;
    document.getElementById("angR").value = numAng;
    document.getElementById("result").value = numDist * Math.sin(numAng * Math.PI / 180);
    }
}
       
function convertMetros(distPulgadas) {
    var enMetros = distPulgadas * 0.0254;
    enMetros = Math.round(enMetros * 10000) / 10000;
    return enMetros;
}

function convertGrados(radianes) {
    var enGrados = radianes * 180 / Math.PI;
    enGrados = Math.round(enGrados * 10000) / 10000;
    return enGrados;
}
````

---
## Podemos Comenzar con el Segundo Parcial!
<!-- .slide: style="font-size: 0.75em" -->
Se debe agregar funcionalidad Js a la página HTML+CSS desarrollada</p>
* Una función que compruebe si los valores ingresados son correctos, y si no lo son, que le indique al usuario por un alert, y que blanquee el contenido del campo.
* Una función que calcule algo en base a los valores ingresados por el usuario en los inputs.
* Una función que realice un dibujo sobre un canvas.
* No debe haber errores en el javaScript.
* El código debe estar pusheado en el repositorio (emplear gh-pages).
* Las funciones javaScript deben estar comentadas adecuadamente.

---
## Bibliografia xD
[![W3 School](images/html/logo_w3schoolscom.png)](http://www.w3schools.com/js/default.asp)

[![MDN](images/html/logo_MDN.png)](https://developer.mozilla.org/es/docs/Web/JavaScript)

---
## Cursos Online
[![CodeCademy](images/Eventos/codecademy.png)](https://www.codecademy.com/)

[![Acamica](images/Eventos/acamica.jpg)](https://www.acamica.com/)

---
## ¿Dudas, Preguntas, Comentarios?
![DUDAS](images/pregunta.gif)
