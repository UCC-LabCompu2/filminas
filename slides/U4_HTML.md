---
title: HTML
theme: black
slideNumber: true
---

# Tutorial de HTML
### en HTML (que recursivo :P)
<small>
Created by <i class="fab fa-telegram"></i>
[edme88]("https://t.me/edme88") & 
<i class="fab fa-telegram"></i>
[rmarku]("https://t.me/rmarku")
</small>

---
## Comenzar!
Cuando estás empezando a trabajar con HTML es recomendable tener a mano siempre un CheatSheet con un resumen de los 
comandos más empleados.
[HTML Cheat Sheet](https://campusvirtual.ucc.edu.ar/mod/resource/view.php?id=60351)

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
* **&lt;title&gt; y &lt;/title&gt;:** Se muestra en la barra de título del navegador, al hacer un marcador a la página o en los buscadores de Internet.

* **&lt;meta&gt; y &lt;/meta&gt;:** No son imprescindibles, pero permiten identificar algunos parámetros de la web, como autores, codificación de caracteres, etc.

---
## Github Classroom

[Github Classroom](https://classroom.github.com/a/alV9yr2r)

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
* **Header:** Especifica un encabezado de un documento o sección.
* **Nav:** Define un conjunto de enlaces de navegación.
* **Aside:** Define un contenido que se coloca como una barra lateral.
* **Section:** Define una sección de un documento. (Ejemplo, introducción, contenido, contacto)
* **Article:** Especifica contenido independiente. Debe tener sentido por sí mismo. (Ejemplo mensaje foro, entrada blog, articulo periodico)
* **Footer:** Especifica un pie de página de un documento o sección.

---
## Cuerpo de la Página
````html
<body>
<header>
    <section>
        Logo de la Página + Titulo de la Página
    </section>
</header>
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
Incluir en la pagina 3 secciones:
* Un &lt;header&gt; con imagen y titulo
* Un texto con párrafos. Debe incluir estilos (negrita, itálica y subrayado).
* Un &lt;footer&gt; con el nombre de los autores de la pagina

---
<iframe width="560" height="315" src="https://www.youtube.com/embed/c4dqkCbeHC0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Para realizar pruebas...
[![JSfiddle](images/html/JSfiddle.png)](https://jsfiddle.net/)

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
* Emplear una lista no ordenada
* Emplear una lista ordenada
* En la web principal incluir &lt;nav&gt; y un link a la web creada.

---
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
Cree una tabla con la siguiente estructura:

![Tabla1](images/html/tabla1.png)

---
## Ejercicio: Tablas II
Cree una tabla con la siguiente estructura:
* Utiliza el atributo colspan

![Tabla2](images/html/tabla2.png)

---
## Ejercicio: Tablas III
Cree una tabla con la siguiente estructura:
* Utiliza el atributo rowspan

![Tabla3](images/html/tabla3.png)

---
## Ejercicio: Comentarios
Agrege comentarios a la página web de tablas.

````html
<!--Esto es un comentario-->
````
---
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
## Github Classroom: Proyecto Integrador
[Primer Parcial](https://classroom.github.com/g/SGDqjO4W)

---
## ¿Dudas, Preguntas, Comentarios?
![DUDAS](images/pregunta.gif)
