---
title: CSS
theme: black
slideNumber: true
---

# CSS: 2da parte
<small>
Created by <i class="fab fa-telegram"></i>
[edme88]("https://t.me/edme88") & 
<i class="fab fa-telegram"></i>
[rmarku]("https://t.me/rmarku")
</small>

---
## Fondos o Backgrounds
<!-- .slide: style="font-size: 0.70em" -->
La propiedad compuesta background permite definir simultáneamente todas las propiedades relacionadas con el fondo de 
cualquier elemento: 
* backgroud-color: color de fondo
* background-image: imagen de fondo
* background-position: posición
* background-size: tamaño de la imagen de fondo
* background-repeat: si la imagen se repite o no
* background-attachment: si la imagen es fija o no
* background-origin 
* background-clip

---
## Background: Ejemplo
Estas líneas:
````css
div {
  background-image: url("images/imagen_pequena.png");
  background-repeat: no-repeat;
  background-position: 2em 1.5cm;
  background-attachment: fixed;
}
````
Se pueden colocar todas juntas de la siguiente forma:
````css
div {
  background: url("images/imagen_pequena.png") no-repeat 2em 1.5cm fixed;
}
````

---
## Fondos o Backgrounds
Puedes ver más documentación en:

[Mclibre](https://www.mclibre.org/consultar/htmlcss/css/css-fondos.html)

[W3Shool - Background](https://www.w3schools.com/cssref/css3_pr_background.asp)

---
## Ejercicio: Backgrounds
Cree una página nueva, emplee de fondo la imagen “fondo_mario.jpg” ubicada en la carpeta de  “imagenes”. 
Pruebe  los  diferentes  atributos  de  background:  image,  attachment,  blend-mode, clip, color, image, origin, position, repeat, size.

---
## Position
Como posicionar elementos dentro de la pagina.
* static
* relative
* fixed
* absolute
* inherit

[W3School](https://www.w3schools.com/cssref/pr_class_position.asp)

[Learns Layout](http://es.learnlayout.com/position.html)

---
## Position: static;
Los elementos posicionados con "Static" no son afectados por las propiedades top, bottom, left y right.

Por defecto, todos los elementos HTML son Static.

---
## Position: relative
El elemento es posicionado relativo respecto a su posición normal.
Los valores top, left, right, bottom lo mueven respecto a su posición original
Permite que un elemento se desplace respecto a lo que hubiera sido su posición normal; el resto de elementos continúan en su posición ignorando al que se desplaza, lo que puede crear superposiciones; el espacio libre que deja el elemento queda libre.

---
## Position: fixed
El elemento "fixed" es posicionado respecto al area visible.
Los valores top, left, right, bottom lo mueven respecto a su posición original
Permite que un elemento se desplace respecto al origen de coordenadas del primer elemento contenedor posicionado ó respecto a la esquina superior izquierda de la ventana de visualización; el resto de elementos actúan como si el desplazado no existiera, por lo que su espacio será ocupado por otros elementos; puede crear superposiciones.

---
## position: absolute
<!-- .slide: style="font-size: 0.90em" -->
Los elementos con position: absolute; son posicionados mediante top, left... respecto a su ancestro mas secano que este posicionado.
Un elemento posicionado es aquel que tenga en su propiedad position algo distinto a static

Permite fijar un elemento en una posición respecto al origen de coordenadas del primer elemento contenedor posicionado ó respecto a la esquina superior de la ventana de visualización; el elemento se mantendrá en la ventana de visualización o viewport, siempre en una misma posición aunque el usuario se desplace por la web haciendo scroll.

---
## position: inherit;
Se heredan las características del elemento padre.

---
## superposición con z-index
La propiedad z-index indica que elemento va estar posicionado sobre otro elemento.
Los elementos con z-index mayor tapan a los elementos con z-index menor 

---
## Float
Float se usa para envolver imágenes con texto.

[Learns Layout](http://es.learnlayout.com/float.html)

---
## Clear
para controlar el comportamiento de los floats.

[Learns Layout](http://es.learnlayout.com/clear.html)

---
## Ejercicio: 2 Columnas
Emplear <div> con style para lograr que el estilo del texto quede en 2 columnas fluidas.
* Float y Width

---
## Ejercicio: Hoja de Estilo Externa
Modifique la página web del CV para que los estilos incrustados estén en un archivo de estilos.
Asegúrese de por lo menos incluir un estilo por Tag, por ID y por clase.

---
## CSS
¿Porque una Web no funciona igual en diferentes navegadores?
<ul>
<li style="list-style-image: url('images/html/chrome.png');">
<b>Google Chrome</b>
Utiliza para interpretar JavaScript un motor <b>V8</b>, y para el renderizado <b>WebKit</b>.

<li style="list-style-image: url('images/html/firefox.png');">
<b>Firefox</b>
Emplea <b>JagerMonkey</b> para JavaScript y para el renderizado <b>Gecko</b>.

<li style="list-style-image: url('images/html/explorer.png');">
<b>Internet Explore</b>
Emplea <b>Chakra</b> para JavaScript y <b>Trident</b> para renderizado.
</ul>

---
![Prueba Navegadores](images/html/prueba_navegadores.jpg)

---
## Transitions
````css
div {
   width: 100px;
   height: 100px;
   background: red;
   -webkit-transition: width 2s; /* For Safari 3.1 to 6.0 */
   transition: width 2s;
}
   
div:hover {
   width: 300px;
} //Pasa el mouse arriba del rectangulo
````
<div class="divTran"></div>

---
## Transitions 2
<!-- .slide: style="font-size: 0.90em" -->
````css
div {
   width: 100px;
   height: 100px;
   background: red;
   -webkit-transition: width 2s, height 2s, -webkit-transform 2s; /* Safari */
   transition: width 2s, height 2s, transform 2s;
}
   
div:hover {
   width: 200px;
   height: 200px;
   -webkit-transform: rotate(180deg); /* Safari */
   transform: rotate(180deg);
} //Pasa el mouse arriba del rectangulo
````
<div class="divTran2"></div>
---
## Grid
[W3School Grid](https://www.w3schools.com/css/css_grid.asp)

---
##  CSS: Recomendación 
Revisar documentación:
[W3 School](http://www.w3schools.com/css/default.asp)

Autogenerar algunos estilos complicados:
http://css3generator.com/
http://www.css3.me/
http://westciv.com/tools/shadows/

Escribir los colores en hexadecimal:

http://html-color-codes.info/codigos-de-colores-hexadecimales/

---
## Media Queries
<!-- .slide: style="font-size: 0.90em" -->
"Responsive Design" es la estrategia para hacer que un sitio se adapte al navegador y dispositivo en el que se muestra
````css
@media screen and (min-width:600px) {
    nav {
        float: left;
        width: 25%;
    }
    section {
        margin-left: 25%;
    }
}
@media screen and (max-width:599px) {
    nav li {
        display: inline;
    }
}
````
[Learn Layout](http://es.learnlayout.com/media-queries.html)

---
## ¿Dudas, Preguntas, Comentarios?
![DUDAS](images/pregunta.gif)
