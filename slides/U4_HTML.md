---
title: HTML
theme: black
slideNumber: true
---

# Tutorial de HTML
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

### Páginas Web
* Estructura básica
* Contenido mínimo
* Sintaxis
* Etiquetas head

[Ejercicio: Primer HTML](U4_HTML.html#/9)

* Etiquetas semánticas
* Etiquetas body
* Tipos de texto

[Ejercicio: Secciones](U4_HTML.html#/17)

[Ejercicio: Títulos](U4_HTML.html#/18)

</div>
<div class="grid-item">

* Tipos de listas
* Hipervínculos

[Ejercicio: Listas](U4_HTML.html#/24)

[Ejercicio: Link](U4_HTML.html#/25)

* Tablas

[Ejercicio: Tablas 1,2,3,4](U4_HTML.html#/30)

[Ejercicio: Comentarios](U4_HTML.html#/34)

* Div
* Buenas prácticas

</div>
</div>

---
## Comenzar!
Cuando estás empezando a trabajar con HTML es recomendable tener a mano siempre un CheatSheet con un resumen de los 
comandos más empleados.
[HTML Cheat Sheet](https://raw.githubusercontent.com/UCC-LabCompu2/filminas/master/slides/cheatsheet/html5-cheatsheet.pdf)

---
## Estructura Básica
![Estructura Basica](images/html/estructurabasica.png)

---
## Contenido Minimo
![HTML Min](images/html/html_min.png)

---
## Sintaxis
![HTML Sintaxis](images/html/html-sintaxis.png)

---
## ¿Cómo Comenzar?
![Code1](images/html/code1.png)

---
## Etiquetas
* [**&lt;title&gt; y &lt;/title&gt;:**](https://www.w3schools.com/tags/tag_title.asp) Se muestra en la barra de título del navegador, al hacer un marcador a la página o en los buscadores de Internet.

* [**&lt;meta&gt;:**](https://www.w3schools.com/tags/tag_meta.asp) No son imprescindibles, pero permiten identificar algunos parámetros de la web, como autores, codificación de caracteres, etc.

---
## Github Classroom
Repositorio base para realizar todos los ejercicios que veremos en clase:

[Github Classroom](https://classroom.github.com/a/piW5lbnA)

---
## Ejercicio: Primer HTML
* Crear un archivo HTML
* Incluir la etiqueta &lt;head&gt;
* Incluir datos del autor, descripcion y palabras principales

---
<iframe width="560" height="315" src="https://www.youtube.com/embed/k3nX5AdX54s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Etiquetas Semántica
Etiquetas que dan un significado a las partes del documento, indican qué contenido engloban y cuál es su relación con el conjunto de elementos del documento HTML.

---
## Estructura Semántica
![Estructura HTML5](images/html/estructura-HTML5.png)

---
## Estructura Semántica
<!-- .slide: style="font-size: 0.90em" -->
* [**Header:**](https://www.w3schools.com/tags/tag_header.asp) Especifica un encabezado de un documento o sección.
* [**Nav:**](https://www.w3schools.com/tags/tag_nav.asp) Define un conjunto de enlaces de navegación.
* [**Aside:**](https://www.w3schools.com/tags/tag_aside.asp) Define un contenido que se coloca como una barra lateral.
* [**Section:**](https://www.w3schools.com/tags/tag_section.asp) Define una sección de un documento. (Ejemplo, introducción, contenido, contacto)
* [**Article:**](https://www.w3schools.com/tags/tag_article.asp) Especifica contenido independiente. Debe tener sentido por sí mismo. (Ejemplo mensaje foro, entrada blog, articulo periodico)
* [**Footer:**](https://www.w3schools.com/tags/tag_footer.asp) Especifica un pie de página de un documento o sección.

---
## Cuerpo de la Página
````html
<body>
<header>   
        Logo de la Página + Titulo de la Página
</header>
<nav>Botones de navegación</nav>
<section>
    Contenido de la página
</section>
<footer>
    Este es el pie de Pagina
</footer>
</body>
````

---
## CABECERA
````html
<header>
    <img src="images/html/logo.png">
    <h1>NOMBRE DE LA PAGINA</h1>
</header>
````
Los titulos van desde **h1** hasta **h6**

---
## [Tipos de Texto](https://www.w3schools.com/html/html_formatting.asp)
````html
<p>Esto es un párrafo</p>
<p>Esto es un párrafo con un <span>span</span></p>
<b>Esto es Negrita</b>
<i>Esto es Cursiva</i>
<u>Esto es un Subrayado</u>
2<sup>3</sup>=8
Ozono= O<sub>3</sub>
````
<p>Esto es un párrafo</p>
<p>Esto es un párrafo con un <span>span</span></p>
<b>Esto es Negrita</b>
<i>Esto es Cursiva</i>
<u>Esto es un Subrayado</u>
2<sup>3</sup>=8
Ozono= O<sub>3</sub>

---
## Ejercicio: Secciones
Empleando  el  template  “ej_noticia”,  incluir  en  la  página  3  secciones mediante  etiquetas semánticas: 
* En el **header** incluir una imagen y un título(la imagen debe ser descargada de internet e incluida en la carpeta 
‘Ejercicios-HTML/imagenes’)
* En  **section**,  separar  el texto en párrafos.  Debe  incluir  la  utilización  de  estilos  
(negrita, itálica y subrayado).
* El **footer** debe contener el autor de la página

---
## Ejercicio: Títulos
Empleando el template “ej_noticia”, incluir diferentes tipos de título:
* h1 para ‘Diario On-line’
* h3 para ‘Cordobici’
* h6 para la fecha de publicaciónd
* h5 para el sub-titulo de la noticia

---
## Ejercicio: Secciones y Títulos

<iframe width="560" height="315" src="https://www.youtube.com/embed/c4dqkCbeHC0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Tipos de Listas
* Ordenadas
* No Ordenadas

---
## Listas Ordenadas
````html
<ol>
    <li>Item uno</li>
    <li>Item dos</li>
    <li>Item 3</li>
</ol>
````    
1. Item uno
2. Item dos
3. Item 3

---
## Listas No Ordenadas
````html
<ul>
    <li>Item uno</li>
    <li>Item dos</li>
    <li>Item 3</li>
</ul>
````
<ul>
    <li>Item uno</li>
    <li>Item dos</li>
    <li>Item 3</li>
</ul>

---
## Hipervinculo
````html
<a href="http://www.w3schools.com/tags/tag_a.asp" target="_blank">
    Soy un Hipervinculo xD
</a>
<br>
<a href="mailto:edmealiciardi@gmail.com">
    edmealiciardi@gmail.com
</a>
````
<a href="http://www.w3schools.com/tags/tag_a.asp" target="_blank">
    Soy un Hipervinculo xD
</a>
<br>
<a href="mailto:edmealiciardi@gmail.com">
    edmealiciardi@gmail.com
</a>

---
## Ejercicio: Listas
Empleando el template “ej_listas” donde hay una receta, emplear:
* una lista no ordenadapara los ingredientes  
* una lista  ordenada para  los  pasos  de  la  preparación. 
* una imagen de la receta (la misma se encuentra en la carpeta ‘Ejercicios-HTML/imagenes’)

---
## Ejercicio: Link
Empleando el template “ej_noticia”, incluir la etiqueta semántica **nav** debajo de la cabecera de la página,y agregar 
un link a la web de la receta (como si fuera un diario con diferentes secciones).

---
## Ejercicio: Listas y Link
<iframe width="560" height="315" src="https://www.youtube.com/embed/DEd52yU1CHY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Tablas
````html
<table>
    <thead>
    <tr>
        <th>Asignatura</th>
        <th>Nota</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Analisis Matematico</td>
        <td>8</td>
    </tr>
    <tr>
        <td>Fisica I</td>
        <td>9</td>
    </tr>
    <tr>
        <td>Laboratorio de Computacion I</td>
        <td>8</td>
    </tr>
    </tbody>
</table>
````
---
## Tablas
<table style="border: 2px solid white">
    <thead>
    <tr>
        <th>Asignatura</th>
        <th>Nota</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Analisis Matematico</td>
        <td>8</td>
    </tr>
    <tr>
        <td>Fisica I</td>
        <td>9</td>
    </tr>
    <tr>
        <td>Laboratorio de Computacion I</td>
        <td>8</td>
    </tr>
    </tbody>
</table>

---
## Ejemplos de Tablas y bordes
[Tablas y CSS](https://mosaic.uoc.edu/ac/le/es/m6/ud7/index.html)

[W3School](https://www.w3schools.com/css/css_table.asp)

[LibrosWeb](http://librosweb.es/libro/css/capitulo_10.html)

---
## Ejercicio: Tablas I
Empleando el template “ej_tablas”, agregue las siguientes etiquetas:
* table
* tr
* td

![Tabla1](images/html/tabla1.png)

---
## Ejercicio: Tablas II
Empleando el template “ej_tablas”, agregue las siguientes etiquetas:
* thead
* tbody
* th

![Tabla2](images/html/tabla2.png)

---
## Ejercicio: Tablas III
Empleando el template “ej_tablas”, agregue el atributo:
* colspan

Elimine las siglas CPAR, y unifique esa celda con la contigua para que ambas contengan el texto “Campus party”

![Tabla3](images/html/tabla3.png)

---
## Ejercicio: Tablas VI
Empleando el template “ej_tablas”, agregue el atributo:
* rowspan

Como en la columna “Lugar”, ‘Buenos Aires’ se repite, unificar ambas celdas.

![Tabla4](images/html/tabla4.png)

Al contenido de la columna “Web”, agregar links a las páginas correspondientes

---
## Ejercicio: Comentarios
Agrege comentarios a la página web de tablas.

````html
<!--Esto es un comentario-->
````
---
## Ejercicio: Tablas y Comentarios
<iframe width="560" height="315" src="https://www.youtube.com/embed/C-_ZWqhN5YU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Div
````html
<div>
    Contenido de la Caja
</div>
````

<div>
    Contenido de la Caja
</div>

---
## DIV
* **&lt;div&gt;:** Define un bloque de contenido o sección de la página, para poder aplicarle diferentes estilos o para realizar operaciones sobre ese bloque específico.
        
![3Divs](images/html/3divs.png)

---
## Buenas Practicas
* Cerrar las etiquetas
* Nombre de las etiquetas siempre en minúscula
* Poner comillas a todos los atributos
* Validar el código
* Identar el código correctamente
* Tener en cuenta la accesibilidad (alt, title para img-label para inputs)
* No utilizar etiquetas deprecadas
* Usar ficheros externos para CSS y JavaScript

---
## ¿Dudas, Preguntas, Comentarios?
![DUDAS](images/pregunta.gif)

---
## Para realizar pruebas...
[![JSfiddle](images/html/JSfiddle.png)](https://jsfiddle.net/)

