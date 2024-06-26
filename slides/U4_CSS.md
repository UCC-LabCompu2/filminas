---
title: CSS
theme: black
slideNumber: true
---

# CSS
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
<!-- .slide: style="font-size: 0.70em" -->
## Temario
<div class="grid-container2">
<div class="grid-item">

### CSS
* Definición
* Capas de diseño
* Sintaxis
* Estilos en línea
* Estilos incrustados
* Hoja de estilo enlazada
* Propiedades tipográficas
* Colores
* Estilo: Tag, #ID, .clase

[Ejercicio: Propiedades tipográficas](U4_CSS.html#/16)

[Ejercicio: CSS incrustado](U4_CSS.html#/17)

</div>
<div class="grid-item">

* Descendientes

[Ejercicio: Estilos con descendientes](U4_CSS.html#/21)

* Pseudo clases

[Ejercicio: Pseudo Clases](U4_CSS.html#/25)

* Modelo de cajas: Margin, border, padding
* Unidades de medida
* Fondos y Gradientes
* Favicon

[Ejercicio: CV](U4_CSS.html#/35)

* Comentarios
* Buenas prácticas
</div>
</div>

---
## CCS: Cascading Style Sheets
Hojas de Estilo en Cascada (CSS) es un lenguaje de estilo de hojas usado para describir la presentación de las páginas web escrito en HTML o XML.

CSS permite la separación del contenido del documento de la presentación del documento (disposición, colores, fuentes, etcétera).

---
## Capas del Diseño Web
![Capas](images/html/capas.png)

---
## CCS3: Cascading Style Sheets
Estilos visual del documento.
* Selectores
* Modelos de Caja
* Fondos y Bordes
* Valores de imagenes y Remplazo de contenido
* Efectos de texto
* Transformaciones 2D/3D
* Animaciones
* Multiples columnas
* Interfaz de Usuario

---
## CSS: Sintaxis
![CSS Sintaxis](images/html/css-sintaxis.png)

---
## Comenzar!
Cuando estás empezando a trabajar con CSS es recomendable tener a mano siempre un CheatSheet con un resumen de los 
comandos más empleados.
[CSS Cheat Sheet](https://raw.githubusercontent.com/UCC-LabCompu2/filminas/master/slides/cheatsheet/css3-cheatsheet.pdf)

---
## Formas de Agregar Estilos
* Estilo en Línea
* Incrustando una Hoja de Estilo
* Enlazando una hoja de Estilo Externa

---
## Estilo en Línea
* Se usa el atributo "style" para definir como la etiqueta debe mostrarse.
* Ejemplo:
````html
<h1 style="color: red; font-type: helvetica; font-size: 2em">
````

---
## Estilo en Línea: Desventajas
* Difícil de mantener
* Solución poco elegante
* Código duplicado para que varios elementos posean el mismo estilo visual
* La estructura y el estilo se mezclan

---
## Hoja de Estilo Incrustada
* Se incorpora en &lt;head&gt;
*  Se describe:
````html
<style>
   Selector{
propiedad: valor;
   }
</style>
````
Ejemplo:
````html
h1{
color: #333333;
font-weight: bold;
margin-left: 15px;
}
````
---
## Hoja de Estilo Externa o Enlazada
* En el &lt;head&gt; se emplea un link a un archivo externo
````css
<link rel="stylesheet" href="estilos.css" type="text/css">
````

---
### Hoja de Estilo Externa o Enlazada: Ventajas
* Se separa la estructura del estilo
* Fácil de mantener
* Permite compartir estilos similares en todas las páginas

---
## Propiedades tipográficas
<!-- .slide: style="font-size: 0.80em" -->
* **font-family:** se define tipografía por orden de prioridad
* **font-size:** Se define tamaño
* **font-style:** italic, normal
* **font-weight:** bold, normal, ultrabold, o números 100,200,300
* **color:** nombre, hexadecimal, rgb
* **letter-spacing:** interletrado
* **world-spacing:** espacio entre palabras
* **line-height:** tamaño del renglon (altura de línea)
* **text-align:** right, left, center
* **text-decoration:** underline, line-through, none
* **text-indent:** sangría
* **text-transform:** uppercase, lowercase

---
## Colores
* Por nombre: <h1 style="color: red>

* Hexadecimal: <h1 style="color: #CA98E3>

* RGB: <h1 style="color: rgb(205, 92, 92)>

---
##  ¿Como Escribir un Estilo? 
<!-- .slide: style="font-size: 0.90em" -->

1. **por Tag** (se aplica a TODOS los selectores)
````html
selector{nombreEstilo: valor;}
Ej. section{font-family: Arial, Helvetica;}
````

2. **por ID** (para identificar elementos unívocos)
````html
#nombreID {nombreEstilo: valor;}
Ej. #nombreUsuario {color: #ff00cc;}
````

3. **por Clase**
````html
.nombreClass {nombreEstilo: valor;}
Ej. .myStl {background-color: rgb(234,55,76);}
````

---
## Ejercicio: Propiedades tipográficas
Empleando el template “ej_columnas”, agregue estilo en línea para cambiar:
1. Color del texto del título de la página.
2. Tamaño de la fuente del título de la noticia.
3. Tipo de fuente o letra de toda la página.

---
## Ejercicio: Incrustado
Empleando el template “ej_columnas”, cambie los estilos en línea por estilos incrustados.
1. El título de la página debe estar definido por ID
2. El título de la noticia debe estar definido por clase
3. El tipo de fuente para toda la página debe estar definido por Tag

---
## Ejercicio: Propiedades tipográficas e Inscrustado
<iframe width="560" height="315" src="https://www.youtube.com/embed/1cssxcEdTBs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
##  Descendientes
Un elemento HTML es descendiente de otro cuando se encuentra contenido dentro de las etiquetas de apertura y cierre del otro elemento:
````
<div>
    <span>En este ejemplo, "span"</span>  es descendiente de div
</div>
````
---

##  Descendientes
* **selectores:** 
````css
ul li{nombreEstilo: valor;}
````

* **de ID:** 
````css
#nombreID h1{nombreEstilo: valor;}
````

* **de Clase:**
````css
.nombreClass p{nombreEstilo: valor;}
````
---
## Ejercicio: Estilo con Descendientes
Empleando el template “ej_leyes” y hoja de estilo incrustada, agregue los estilos necesarios para cambiar: 
1. La  primera  lista  ordenada  para  visualizarla  con  números  romanos  y  una  tipografía  de mayor tamaño (upper-roman). 
2. La segunda lista ordenada para visualizarla con letras (lower-alpha).
   
---
## Ejercicio: Estilo con Descendientes
<iframe width="560" height="315" src="https://www.youtube.com/embed/u9wBB3DoAyc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   
---
## Pseudo Clases
<!-- .slide: style="font-size: 0.75em" -->
Es una palabra clave que se añade a los selectores y que especifica un estado especial del elemento seleccionado.

Ejemplos:
* hover: se activa cuando pasa el mouse por encima de un elemento
* active: se activa cuando el usuario activa un elemento (haciendo click)
* focus: se activa cuando el elemento tiene el foco del navegador (está seleccionado)
* link: enlaces que todavía no han sido visitados por el usuario
* visited: enlaces que han sido visitados al menos una vez por el usuario
* first-child: selecciona el primer elemento hijo de un elemento

---
## Pseudo Clases
````css
/* unvisited link */
a:link {
   color: #FF0000;
}

/* visited link */
a:visited {
   color: #00FF00;
}

/* mouse over link */
a:hover {
   color: #FF00FF;
}

/* selected link */
a:active {
   color: #0000FF;
}
````

---
## Ejercicio: Pseudo Clases
Al hipervinculo de la página de ej_columnas, empleando Pseudo clases modifique:
* Link visitado o no visitado con el mismo color
* Al posicionar el mouse arriba del link, modificar el tamaño de la fuente
* Al seleccionar el link, seleccionar BOLD

---
## Ejercicio: Pseudo Clases
<iframe width="560" height="315" src="https://www.youtube.com/embed/LUuAI1UFd30" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Modelo de Cajas
![Padding y Margin](images/html/pading_margin.gif)

---
##  Alto y Ancho 
````css
div{
   width: 80%;
   height: 100px;
}
````
unidad de medida | porcentaje | auto | inherit (hereda del padre)

<!-- .slide: style="font-size: 0.75em" -->
Nota: No se debe agregar espacio entre el valor y la unidad. Es incorrecto escribir "20 px"

---
##  Unidades de Medida 
<!-- .slide: style="font-size: 0.80em" -->
Las unidades relativas disponibles son:
* **em:** el tamaño de fuente del elemento contenedor
* **ex:** la altura de la letra x de la fuente del elemento contenedor
* **ch:** la altura de la cifra 0 (cero) de la fuente del elemento contenedor
* **rem:** el tamaño de la fuente del elemento raíz de la página
* **vw:** % del ancho visible
* **vh:** % del alto visible
* **vmin:** % del valor menor entre ancho y alto visible
* **vmax:** % del valor mayor entre ancho y alto visible

### En la práctica, las unidades relativas más utilizadas son em y rem, vw y vh.

---
Las unidades absolutas disponibles son:
* **px:** píxeles
* **cm:** centímetros
* **mm:** milímetros
* **q:** cuartos de milímetros
* **in:** pulgadas (1in = 2.54cm = 25.4mm)
* **pc:** picas, la sexta parte de una pulgada
* **pt:** puntos, la doceava parte de una pica

---
##  Margin & Padding 
<!-- .slide: style="font-size: 0.70em" -->
1. Establecerlos por separado
````css
div{margin-top: 15px;
    margin-right: 20px;
    margin-bottom: 10px;
    margin-left: 5px;}
````
2. Establecer top-bottom & right-left:
````css
div{margin: 15px 20px;}
````
3. Establecer todo junto:
````css
div{margin: 15px 20px 10px 5px;}
````

4. Margenes iguales:
````css
div{margin: 15px;}
````

5. Establecer top, right/left, bottom:
````css
div{margin: 15px 20px 5px;}
````

---
##  Borde 
* .estilo-borde {border: grosor tipo color}
````css
.estilo-borde{2px solid blue;}
/*dotted, dashed, solid, double, groove, ridge, inset, outset*/
````

---
<!-- .slide: data-background="linear-gradient(to right, red , yellow)" -->
## Fondo y Gradientes
````css
/* solo color */
background: red;
background-color: rgba(255,0,0, 0.5);
/* gradiente */
background: linear-gradient(to right, red , yellow);
/* imagen de fondo */
background: url("fondo.png");
background-image: url("paper.gif");
background-repeat: repeat-x; /*repeat-y; no-repeat;*/
background-attachment: fixed; /*scroll; con respecto al resto de la imagen*/
background-position: right top; /*posision de inicio de imagen de fondo*/
/*Shorthand*/
background: #ffffff url("img_tree.png") no-repeat right top;

````

---
## FavIcon
<!-- .slide: style="font-size: 0.80em" -->
Es una pequeña imagen que se muestra junto al título de la página en la pestaña del navegador, o cuando se agrega a favoritos/marcadores.

Se puede usar cualquier imagen como favicon, o se puede crear favicon propios en sitios como https://favicon.cc
````css
<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
````
![Favicon](images/html/img_favicon.png)

---
## Ejercicio: CV
<!-- .slide: style="font-size: 0.70em" -->
Diseñe un CV y agregue estilos empleando una hoja de estilo incrustada:
* Hacer que el borde de los divs sea visible
* Agregue atributos de margin y padding a los divs
* Agregar color plano a los divs y ponerle opacity
* Agregar una imagen en el primer **div** y alinee a la izquierda
* Centrar todo el contenido del body.
* Agregar <a href="https://fonts.google.com/" target="_blank"> fuentes de google </a> para personalizar la página
* Agregar background al body, que posea <a href="https://www.w3schools.com/csS/css3_gradients.asp" target="_blank">gradiente</a>
* Redondear las esquinas de la imagen para dejarla circular.
* Redondear las esquinas de los &lt;div&gt;
* Agregar favicon
* Agregar sombras a los textos y a los títulos
* Agregar sombras a los divs
* Asegúrese de por lo menos incluir un estilo por Tag, por ID y por clase

---
## Ejercicio: CV
![CV Imagen](images/html/cv_imagen.png)

---
## Ejercicio: CV
<iframe width="560" height="315" src="https://www.youtube.com/embed/9aJKvSPW5GA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Comentario
Se puede agregar comentarios de una ó multiples líneas.
````css
/* Comentario de una sola línea */

/* Este es un
comentario CSS de varias
lineas */
````

---
## CCS3
Buenas Prácticas:
* Comprobar el diseño en varios navegadores
* Depuración (Ej. firebug)
* Comentar el código
* Identar y hacer el código fácil de leer
* Usar sistema común de nombrado
* Evitar tamaños absolutos en fuentes o elementos
* Utilizar notación de colores en hexadecimal
* Ordenar los elementos según pertenezcan a cabecera, contenido principal o pie de página

---
# Bibliografía xD
[![W3School](images/html/logo_w3schoolscom.png)](http://www.w3schools.com/css)

[![MDN](images/html/logo_MDN.png)](https://developer.mozilla.org/es/docs/Web/CSS)

---
## ¿Dudas, Preguntas, Comentarios?
![DUDAS](images/pregunta.gif)
