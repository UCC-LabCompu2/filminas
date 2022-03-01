---
title: javaScript
theme: black
slideNumber: true
---

# JavaScript: 2da Parte
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
<!-- .slide: style="font-size: 0.60em" -->
## Temario
<div class="grid-item">

* Modificar CSS mediante Js

[Ejercicio: Mostrar/Ocultar div](U5_javaScript2.html#/6)

[Ejercicio: Operaciones Mateáticas](U5_javaScript2.html#/8)

* Random y Round
* Refactorización

[Ejercicio: Conversor de Unidades 2](U5_javaScript2.html#/14)

[Ejercicio: Operaciones Mateáticas 2](U5_javaScript2.html#/17)

[Ejercicio: Primera a Segunda web](U5_javaScript2.html#/20)

* Formulas
* LocalStorage

[Ejercicio: Primera a Segunda web empleando LocalStorage](U5_javaScript2.html#/27)

* Métodos para Strings

</div>

---
## Podemos modificar CSS mediante Javascript?
<p class="fragment"> SI </p>
<p class="fragment"> Ahora veremos un ejemplo... </p>

---
### Ejemplo Mostrar/Ocultar Div
<!-- .slide: style="font-size: 0.70em" -->
<div style="text-align: left; display: inline-block; margin: auto;">
    Valores de Velocidad </br>
    <input style="width: 30px;height: 30px" type="radio" name="velocidad" value="Vinicial" onclick="seMuestra(this.value)">Velocidad Inicial </br>
    <input style="width: 30px;height: 30px" type="radio" name="velocidad" value="Vfinal" onclick="seMuestra(this.value)">Velocidad Final </br>
    <input style="width: 30px;height: 30px" type="radio" name="velocidad" value="NingunaV" onclick="seMuestra(this.value)">Ninguna Velocidad </br>
    Valores de Distancia </br>
    <input style="width: 30px;height: 30px" type="radio" name="distancia" value="Dinicial" onclick="seMuestra(this.value)">Distancia Inicial </br>
    <input style="width: 30px;height: 30px" type="radio" name="distancia" value="Dfinal" onclick="seMuestra(this.value)">Distancia Final </br>
</div>
<div id="variasCosas1" style="display: none; background-color: #0d99a5">
Aca hay valores de Velocidad! O mas radios, o algo xD
</div>
<div id="variasCosas2" style="display: none; background-color: #1b91ff">
Aca hay valores de Distancia! O mas radios, o algo xD
</div>

---
## HTML: Displayed
````html
<div style="text-align: left; display: inline-block; margin: auto;">
    <input type="radio" name="velocidad" value="Vinicial" onclick="seMuestra(this.value)">Velocidad Inicial
    <input type="radio" name="velocidad" value="Vfinal" onclick="seMuestra(this.value)">Velocidad Final
    <input type="radio" name="velocidad" value="NingunaV" onclick="seMuestra(this.value)">Ninguna Velocidad
    <input type="radio" name="distancia" value="Dinicial" onclick="seMuestra(this.value)">Distancia Inicial
    <input type="radio" name="distancia" value="Dfinal" onclick="seMuestra(this.value)">Distancia FInal
</div>
<div id="variasCosas1" style="display: none; background-color: #0d99a5">
Aca hay valores de Velocidad! O mas radios, o algo xD
</div>
<div id="variasCosas2" style="display: none; background-color: #1b91ff">
Aca hay valores de Distancia! O mas radios, o algo xD
</div>
````

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
### Ejercicio: Mostrar/Ocultar div
Escribir una función JavaScript para mostrar u ocultar el div celeste.
* Emplear **OnChange** en los radio button
* Los campos deben contener un nombre u ID
* Se debe cambiar el estilo de display

![Mostrar/Ocultar](images/html/mostrarOcultarDiv.png)

---
### Ejercicio: Mostrar/Ocultar div
Escribir una función JavaScript para mostrar u ocultar el div celeste.
<iframe width="560" height="315" src="https://www.youtube.com/embed/mP-S_eqCPYc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Ejercicio: Operaciones Matemáticas
Escribir funciones JavaScript para resolver las operaciones matemáticas una vez que el usuario ingresa un valor numérico en ambos inputs.
* Se debe castear de tipo String a tipo Number
* Los resultados deben contener el atributo disabled

---
## Ejercicio: Operaciones Matemáticas
![Operaciones Matematicas](images/html/operacionesMatematicas.png)

---
## Ejercicio: Operaciones Matemáticas II
<iframe width="560" height="315" src="https://www.youtube.com/embed/7w3TRLPPIho" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
![Meme JS](images/html/meme_js.jpg)

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
## Refactorizar Código: que es?
* Limpieza de código
* No arregla errores ni incorpora funcionalidades
* Altera la estructura interna del código sin cambiar su comportamiento externo

Objetivos:
* Mejorar la facilidad de comprensión del código
* Cambiar su estructura y diseño
* Eliminar código muerto
*Facilitar el mantenimiento en el futuro

---
## Ejercicio: Conversor de Unidades II
Modificar las funciones para que el resultado de la conversión sólo posea 2 decimales.
* Emplear **Math.Round** ó **miVar.toFix(2)** antes de asignar el resultado
* Reemplace ',' por '.' para evitar errores

---
## Ejercicio: Conversor de Unidades II
![Conversor Unidades](images/html/conversorUnidades.png)

---
## Ejercicio: Conversor de Unidades II
<iframe width="560" height="315" src="https://www.youtube.com/embed/a73NqZTeP2g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Ejercicio: Operaciones Matemáticas II
Modificar el HTML para quitar los inputs de los resultados. Emplear span, p o div, y en JavaScript, emplear innerHTML.
* Emplear **innerHTML** para asignarle valores a los divs.

---
## Ejercicio: Operaciones Matemáticas II
![Operaciones Matematicas](images/html/operacionesMatematicas.png)

---
## Ejercicio: Operaciones Matemáticas II
<iframe width="560" height="315" src="https://www.youtube.com/embed/Z2eiHH0qGbQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
### Ejercicio: Pasar valores de PrimeraWeb a SegundaWeb
<!-- .slide: style="font-size: 0.70em" -->
![Primer Web](images/html/primerWeb.png)
* Crear una función JavaScript que sea ejecutada cuando el botón sea presionado. 
La función debe concatenar la URL de la segunda web con los valores ingresados por el usuario, separados por ‘#’ y dirigirse a la segunda web.

![Segunda Web](images/html/segundaWeb.png)
* Crear una función JavaScript que se ejecute cuando la segunda web sea cargada. 
Debe tomar el valor de la URL y dividirla cada vez que ‘#’ sea encontrado. Debe emplear estos valores y cargarlos en el input.

---
### Ejercicio: Pasar valores de PrimeraWeb a SegundaWeb
<iframe width="560" height="315" src="https://www.youtube.com/embed/UANWAIdMQEg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## JavaScript: Formulas
<form name="formulas">
    distancia=<input size="1" style="font-size: 28px" type="text" id="dist2">
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
Nota: Math.sin(ang) se calcula con un valor de ang en radianes

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
## [JS: LocalStorage](https://developer.mozilla.org/es/docs/Web/API/Web_Storage_API)
<!-- .slide: style="font-size: 0.90em" -->
La API de almacenamiento web permite almacenar información de tipo clave/valor.
* **sessionStorage**: mantiene el almacenamiento mientras dure la sesión de la página (mientras el navegador esté abierto, 
incluyendo recargas de página y restablecimientos).
* **localStorage**: el almacenamiento persiste incluso cuando el navegador se cierre y se reabra.

Al invocar uno de éstos, se creará una instancia del objeto Storage, a través del cual los datos pueden ser creados, recuperados y eliminados. 

---
## JS: LocalStorage
<!-- .slide: style="font-size: 0.90em" -->
* **Storage**: Permite crear, recuperar y eliminar datos de un dominio y tipo de almacenamiento (sesión o local) específicos.
* **Window**: Las propiedades **Window.sessionStorage** y **Window.localStorage** proveen acceso a la sesión actual 
del dominio y a objetos Storage locales. Ofrece un manejador de evento Window.onstorage que se dispara cuando un área 
de la memoria cambia (por ejemplo, cuando se almacena un nuevo elemento).
* **StorageEvent**: El evento se dispara en el objeto Window de un documento cuando un área de la memoria cambia. 

---
## JS: Ejemplo LocalStorage
HTML
````javascript
<body onload="tomarDatos()">
Esto es una prueba del local storage. <br>
Ingrese su nombre <input type="text" id="NombreUsuarioInput" onchange="guardarNombre(this.value)">
<p>Su nombre es <span id="aCompletar"></span></p>
</body>
````

JavaScript
````javascript
function tomarDatos(){
    var nombre=localStorage.getItem("NombreDelUsuario");
    document.getElementById("NombreUsuarioInput").value=nombre;
    document.getElementById("aCompletar").innerHTML=nombre;
}

function guardarNombre(nombreUsu) {
    localStorage.setItem("NombreDelUsuario", nombreUsu);
}
````

---
### Ejercicio: Pasar valores de PrimeraWeb a SegundaWeb empleando LocalStorage
<!-- .slide: style="font-size: 0.70em" -->
![Primer Web](images/html/primerWeb.png)
* Crear una función JavaScript que sea ejecutada cuando el botón sea presionado. 
La función debe guardar en el local storage los valores ingresados por el usuario y dirigirse a la segunda web.

![Segunda Web](images/html/segundaWeb.png)
* Crear una función JavaScript que se ejecute cuando la segunda web sea cargada. 
Debe tomar los valores guardados en el localStorage.

---
### Ejercicio: Pasar valores de PrimeraWeb a SegundaWeb empleando LocalStorage
<iframe width="560" height="315" src="https://www.youtube.com/embed/6wnp6uaEfjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Métodos para Strings
````javascript
var nombreMateria = 'LabCompu2';
nombreMateria.length;
nombreMateria[0]; //Devuelve L, primera letra
nombreMateria[nombreMateria.length-1]; //Devuelve 2, última letra
nombreMateria.indexOf('Compu2'); //Encuentra una subcadena dentro de una cadena y la extrae, da como resultado 3
nombreMateria.indexOf('pepe'); //Resultado -1, subcadena no encontrada
nombreMateria.slice(0,3); //Esto devuelve Lab
nombreMateria.slice(3); //Esto devuelve Compu2
nombreMateria.toLowerCase(); //Conversión a minúsculas
nombreMateria.toUpperCase(); //Conversión a Mayusculas
nombreMateria.replace('Lab','Laboratorio');
````

---
## Métodos para Strings
````javascript
var saludo1 = 'Hola';
var saludo2 = 'Mundo!';
var texto = saludo1 + saludo2;
var nombreMat = "Laboratorio de Computacion 2";
nombreMat.split('a'); //Se crea el siguiente array: ['L','bor','torio de Comput','cion 2'];
````

---
## Podemos Comenzar con el Segundo Parcial!
<!-- .slide: style="font-size: 0.75em" -->
Se debe agregar funcionalidad Js a la página HTML+CSS desarrollada</p>
* Una función que compruebe si los valores ingresados son correctos, y si no lo son, que le indique al usuario por un alert, y que blanquee el contenido del campo.
* Una función que calcule algo en base a los valores ingresados por el usuario en los inputs.
* Una función que realice un dibujo sobre un canvas.
* No debe haber errores en el javaScript.
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
