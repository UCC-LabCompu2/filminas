---
title: HTML
theme: black
slideNumber: true
---

# Tutorial de HTML II
### en HTML (que recursivo :P)
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

### Formularios
* Form, inputs
* Radio, range, checkbox
* Select & option
* Fecha, hora, mes, semana
* Button
* Textarea
* Atributos

[Ejercicio: Formulario](U4_HTML_avanzado.html#/16)

</div>
<div class="grid-item">

### Accesibilidad
* Fieldset, legend, label
* Caption
* Consejos de accesibilidad

[Ejercicio: Accesibilidad](U4_HTML_avanzado.html#/24)

### Otras etiquetas

* Etiquetas anidadas
* Canvas
* Multimedia (video, audio)

[Ejercicio: Multimedia](U4_HTML_avanzado.html#/32)

</div>
</div>

---
## Formulario
Es un documento que nos permite rellenar información de forma ordenada y estructurada. 

Algunos ejemplos podrían ser escribir nuestro nombre y apellidos, dirección, cuenta de email, etc.

---
## Formularios
Los elementos y atributos para formularios en HTML5 proveen un mayor grado de marcado semántico que en HTML4 y eliminan 
gran parte del tedioso trabajo de programar y diseñar que se necesitaba en HTML4. 

Las funcionalidades de los formularios en HTML5 brindan una experiencia mejor para los usuarios al permitir que los 
formularios tengan un comportamiento más consistente entre diferentes sitios web y al darle una devolución inmediata 
acerca de la información ingresada.

---
## Elementos para Formularios
````html
<form id="form1">

</form>
````
<!-- .slide: style="font-size: 0.70em" -->
Atributos que puede tener:
* action: url donde se envia la información
* method: los datos se envian de forma oculta(post) ó sin condificar(get)
* accept: especifica tipo de archivo que puede subirse al formulario
* enctype: indica como se deben codificar los datos al enviarse al servidor
* autocomplete: controles del formulario que pueden tener sus valores automáticamente completados.
* name: nombre con el que identificamos al formulario.
* novalidate: indica que el formulario no es validado cuando es enviado
* target: Indica dónde mostrar la respuesta, después de enviar el formulario (_self. _blank, _parent, _top)

[VER HTML CheatSheet](https://raw.githubusercontent.com/UCC-LabCompu2/filminas/master/slides/cheatsheet/html5-cheatsheet.pdf)

---
## [Input](https://www.w3schools.com/tags/att_input_type.asp)
Campo de texto en una línea
````html
<input type="text" name="nombre"/>
<input type="password" name="psw">
<input type="email" name="email"> <!--Valida @-->
<input type="tel" name="telefono"/>
<input type="url" name="pagina_web"/><!--Valida http-->
<input type="color" name="color"/>
````
<input type="text" name="nombre"/>
<input type="password" name="psw">
<input type="email" name="email">
<input type="tel" name="telefono"/>
<input type="url" name="pagina_web"/>
<input type="color" name="color"/>

---
## Input
![Inputs](images/html/inputs1.jpg)

---
## Input
![Inputs](images/html/inputs2.jpg)

---
## Input
![Inputs](images/html/inputs3.jpg)

---
## Input
![Inputs](images/html/inputs4.jpg)

---
## Input Radio
Permiten elegir una sola opción entre un grupo 

(tener en cuenta que deben tener el mismo **name** para pertenecer al grupo). 
````html
<input type="radio" name="gender" value="male" checked> Male<br>
<input type="radio" name="gender" value="female"> Female
````
<input type="radio" name="gender" value="male" checked> Male<br>
<input type="radio" name="gender" value="female"> Female

---
## Input Range
Permite que el usuario especifique un valor numérico comprendido entre un valor mínimo y máximo
````html
<input type="range" id="a" name="a" value="50" min="0" max="120">
````
<input type="range" id="a" name="a" value="50" min="0" max="120">

---
## [Nuevos Campos de HTML 5.1](https://lenguajehtml.com/p/html/formularios/controles-campos-fecha-hora)

* Fecha <input type="date">
* Hora <input type="time">
* Fecha y hora local <input type="datetime-local">
* Mes <input type="month">
* Semana <input type="week">

````html
<input type="date">
<input type="time">
<input type="datetime-local">
<input type="month">
<input type="week">
````

---
## Input Checkbbox
Casilla de verificación asociada a una opción que puede ser marcado o desmarcado por el usuario.
````html
<input type="checkbox" name="materia1" value="Matematica"> Matematica<br>
<input type="checkbox" name="materia2" value="Lengua"> Lengua
````
<input type="checkbox" name="materia1" value="Matematica"> Matematica<br>
<input type="checkbox" name="materia2" value="Lengua"> Lengua

---
## Input Number
Campo para la entrada de un número.
````html
<input type="number" name="points" min="0" max="100" step="10" value="30">
````
<input type="number" name="points" min="0" max="100" step="10" value="30">

---
## Input: Atributos
<!-- .slide: style="font-size: 0.90em" -->
Algunos atributos son:
* name: permite hacer referencia al elemento desde Js empleando un document.formName.inputName
* placehorder: ayuda visual del contenido del input
* disabled: deshabilita el campo y no permite que el usuario ingrese textos
* size: altera el ancho del cuadro de texto
* maxlength: cantidad máxima de caracteres que se pueden ingresar
Ejemplo: Si una tarjeta de crédito tiene entre 13 y 16 dígitos, colocar **maxlength** en 16.

<input type="text" placeholder="nombre"/>
<input type="text" value="15" disabled/>
<input type="text" size="4"/>
<input type="text" maxlength="4"/>

---
## Select & Option
Permite al usuario elegir de entre un número de opciones de una lista.
````html
<select name="materias">
    <option value="analisisMat">Análisis Matemático</option>
    <option value="algebra">Álgebra</option>
    <option value="program1">Programación I</option>
    <option value="labCompu2">Laboratorio de Computación II</option>
</select>
````
<select name="materias">
    <option value="analisisMat">Análisis Matemático</option>
    <option value="algebra">Álgebra</option>
    <option value="program1">Programación I</option>
    <option value="labCompu2">Laboratorio de Computación II</option>
</select>

---
## Button
Crear un botón en el que se puede hacer click sin ningún valor por defecto.
````html
<button type="button">Click Me!</button>
````
<button type="button">Click Me!</button>
Atributos:
* disabled
* autofocus
* autocomplete
* form, etc, ect

---

## Textarea
Representa un campo para la entrada de texto multilínea.

![Textarea](images/html/textarea.png)

---

## Placeholder
Atributo de elementos input y textarea para representar una indicación que ayude al usuario a completar estos campos.
````html
<input name="nombre" placeholder="Ingrese nombre">
````

<input name="nombre" placeholder="Ingrese nombre">

---
## Ejercicio: Formulario
<!-- .slide: style="font-size: 0.50em" -->
Empleando el template “ej_formulario”, agregue las siguientes etiquetas:
* **form** para agrupar todos los campos
* **input** tipo texto, radio, numero, email, password, checkbox y submit 
(agregar atributo size=40 a los campos de texto. Separe con **p** cada grupo.)
* **select y option** para el selector
* **textarea**
* Atributo **placeholder** en todos los inputs
* Atributo **maxlength** con un valor acorde a cada campo (edad=3, nombre=40, etc)

![Formulario](images/html/formulario_ej.png)

---
## Ejercicio: Formulario

<iframe width="560" height="315" src="https://www.youtube.com/embed/zSbEPLMhBh0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Accesibilidad
La accesibilidad web tiene como objetivo lograr que las páginas web sean utilizables por el máximo número de personas, 
independientemente de sus conocimientos o capacidades personales.

[Accesibilidad Web](http://accesibilidadweb.dlsi.ua.es/?menu=guiabreve-1)

---
## Accesibilidad
![Accesibilidad](images/html/accesibilidad.webp)

---
## Fieldset, Legend y Label
<!-- .slide: style="font-size: 0.85em" -->
* **Fieldset**: representa un conjunto de elementos en un formulario (form), opcionalmente agrupados bajo un mismo nombre. 
Este elemento puede ser útil en formularios grandes, donde la legibilidad y la facilidad de acceso pueden ser mejoradas mediante la segmentación. 
Lo navegadores mostrarán normalmente un marco alrededor de los controles agrupados. 
* **Legend**: Crea un título para un grupo de campos (**fieldset**) de un formulario.
* **label**: representa una etiqueta que puede ser asociada a un campo de formulario.

---
## Fieldset, Legend y Label
<!-- .slide: style="font-size: 0.85em" -->
````html
<fieldset>
    <legend>Persona:</legend>
    <label for="nombre"> Nombre:</label>
    <input type="text" size="30" id="nombre"><br>
    <label for="email"> Email:</label>
    <input type="text" size="30" id="email">
</fieldset>
````
(el **for** del label debe contener el mismo texto que el **id** del input)
<div align="left">
    <fieldset style="border: 5px white solid;padding: 20px">
        <legend>Persona:</legend>
            <label for="nombre"> Nombre:</label>
            <input type="text" size="30" id="nombre"><br>
            <label for="email"> Email:</label>
            <input type="text" size="30" id="email">
    </fieldset>
</div>

---
## [Caption](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/caption)
Es el encargado de darle un título descriptivo a las tablas.
````html
<table border='1'>
    <caption>Tabla con caption</caption>
    <tr> <td> Celda 1 </td><td> Celda 2 </td>  </tr>
    <tr> <td> Celda 3 </td><td> Celda 4 </td>  </tr>
</table>
````

<table border='1'>
    <caption>Tabla con caption</caption>
    <tr> <td> Celda 1 </td><td> Celda 2 </td>  </tr>
    <tr> <td> Celda 3 </td><td> Celda 4 </td>  </tr>
</table>

---
## Accesibilidad: Consejos
![Consejos de Accesibilidad](images/html/claves_accesibilidad.png)

---
## Accesibilidad: Consejos
<!-- .slide: style="font-size: 0.75em" -->
* Use el atributo **alt** en las **imágenes** para describir la función del elemento visual.
*  Emplee el tag **caption** para los titulos de las tablas
*  Emplee la etiqueta **label** y el atributo **for** en los input 
*  Use el elemento map para las zonas activas.
*  Emplee programas **lector de pantalla** (JAWS, NVDA, ETC) para comprobar el correcto funcionamiento de la web. (Fangs Screenenders muestra una version de texto de la pagina web)
*  Utilice correctamente los hipervinculos (deben tener sentido por si mismo. No emplear 'Click Aqui')
*  Utilice encabezados, listas y estructura de manera consistente
*  Describir figuras, diagramas o animaciones con el atributo longdesc
*  Utilice herramientas o servicios como [Accesibility Validator W3](https://validator.w3.org/) para comprobar el adecuado funcionamiento de la página

---
## Ejercicios: Accesibilidad
* En el formulario que creado, emplee la etiqueta **label for=”mismo_id”**
* Agregue el atributo **alt** con el texto alternativo a todas las imágenes de su sitio web.
* Emplee el tag **caption** para agregar títulos a todas las tablas del sitio web.

---
## Ejercicios: Accesibilidad
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZdyJMznlgJ8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
### Etiquetas anidadas
<!-- .slide: style="font-size: 0.80em" -->
Significa que una etiqueta está dentro de otra. Por ejemplo, **strong** y **em** están anidadas dentro de **p**. A su vez, **em** esta anidada dentro de **strong**.

![Etiquetas anidadas](images/html/anidar-etiquetas-1.jpg)

Generalmente la última etiqueta en abrirse es la primera en cerrarse.

Los errores típicos son: olvidarse de cerrar etiquetas y cerrar etiquetas en un orden inadecuado (lo que puede generar demoras al renderizar una página).

---
## Lienzo Canvas
Proporciona una Interfaz de Programación de Aplicaciones (API) para dibujar líneas en dos dimensiones, imágenes y textos.

El lienzo es un contenedor de gráficos y se debe utilizar un script para dibujar o pintar.

Cada pixel dentro del lienzo(canvas) puede ser controlado.

---
## Lienzo Canvas
````html
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #d3d3d3;">
    Your browser does not support the HTML5 canvas tag.
</canvas>
````
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #d3d3d3;">
    Your browser does not support the HTML5 canvas tag.
</canvas>

---
## Multimedia
HTML5 permite incluir audio y video de forma nativa sin incluir pluing de terceros.
    
Para los navegadores que no soporten esta tecnología, se pueden incluir textos que indiquen que es incompatible.
    
---
## Video
Permite añadir archivos de video a la página.
````html
<video src="http://v2v.cc/~j/theora_testsuite/320x240.ogg" controls>
    Tu navegador no implementa el elemento <code>video</code>.
</video>
````
<video src="http://v2v.cc/~j/theora_testsuite/320x240.ogg" controls>
    Tu navegador no implementa el elemento <code>video</code>.
</video>

[Más info](https://www.w3schools.com/html/html5_video.asp)

---
### Video
<!-- .slide: style="font-size: 0.80em" -->
````html
<video width="320" height="240" autoplay muted>
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
Your browser does not support the video tag.
</video> 
````
<video width="320" height="240" autoplay muted>
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
Your browser does not support the video tag.
</video> 

Atributos: controls (play, pause, volumen), width, height, autoplay, muted

Formatos: mp4, webm, ogg.

---
## Audio
Permite añadir archivos de audio a la página.
````html
<audio src="/test/audio.ogg" controls autoplay>
<p>Tu navegador no implementa el elemento audio.</p>
</audio>
````
<audio src="/test/audio.ogg" controls autoplay>
    Tu navegador no implementa el elemento audio.</p>
</audio>

Atributos: src, preload (auto, metadata, none), mediagroup, autoplay, loop, muted, controls

Formato: mp3, ogg, aac, opus, flac, wav

[Más info](https://lenguajehtml.com/p/html/multimedia/etiquetas-html-de-audio)

---
## Ejercicio 7: Multimedia
Empleando el template “ej_animales”, agregue las etiquetas necesarias para:
* Agregar un audio (el mismo se encuentra en la carpeta “resources”)
* Agregar un video (el mismo se encuentra en la carpeta “resources”)
* Agregar un video de youtube

---
## Ejercicio 7: Multimedia
<iframe width="560" height="315" src="https://www.youtube.com/embed/AFtAFhgGDE8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## RECUERDA!!!!
Puedes versionar código, documentos de texto plano...

Pero recuerda que GIT no está optimizado para subir VIDEOS o imágenes muy pesadas, o archivos binarios (como instaladores).

Usa Git sabiamente pequeño padawan.

---
## Consejos
Algunos consejos de 
[Google WebMasters](http://www.google.es/webmasters/learn/)

---
## Verifica tu Web
Permite encontrar con facilidad algunos errores que puede haber en tu página:

[W3C Markup Validation Service](https://validator.w3.org/#validate_by_input)

---
# Bibliografia xD
[![W3School](images/html/logo_w3schoolscom.png)](http://www.w3schools.com/html)

[![MDN](images/html/logo_MDN.png)](https://developer.mozilla.org/es/)

---
## ¿Dudas, Preguntas, Comentarios?
![DUDAS](images/pregunta.gif)
