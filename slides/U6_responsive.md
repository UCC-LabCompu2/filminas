---
title: Diseño Responsive
theme: black
slideNumber: true
---

# Unidad 6: Aplicaciones Móviles
Created by <i class="fab fa-telegram"></i>
[edme88]("https://t.me/edme88")

---
## Diseño Responsivo
![Diseño Responsive](images/appWeb/responsive-viewport.png)

---
## Diseño Responsivo
Diseño web adaptable, donde la apariencia de las páginas web se adapta al dispositivo que se esté utilizando para visualizarla.
![Dispositivos](images/moviles/img-dispositius.png)

---
## Diseño Responsivo
Se trata de redimensionar y colocar los elementos de la web de forma que se adapten al ancho de cada dispositivo permitiendo una correcta visualización y una mejor experiencia de usuario.
    
Se caracteriza porque los layouts (contenidos) e imágenes son fluidos y se usa código media-queries de CSS3.

---
## Diseño Responsivo
![Diseño Responsivo](images/appWeb/disenio_responsivo.png)

---
## [Media Query](https://developer.mozilla.org/es/docs/CSS/Media_queries)
Se considera un tipo de medio y al menos una consulta que limita las hojas de estilo utilizando características del medio como ancho, alto y color.
    
````css
@media (max-width: 600px) {
  .facet_sidebar {
    display: none;
  }
}

@media (min-width: 700px) and (orientation: landscape) { ... }

````

---
## HTML5: Viewport
![Ejemplo Viewport](images/appWeb/viewport2.jpg)

---
## [HTML5: Viewport](https://developer.mozilla.org/es/docs/M%C3%B3vil/Viewport_meta_tag)
Es el área de la ventana en donde el contenido web está visible. Generalmente no es del mismo tamaño que la página 
renderizada, en donde se brindan barras de desplazamiento para que el usuario pueda acceder a todo el contenido.

---
## HTML5: Viewport
Dispositivos con pantallas angostas muestran la página en una ventana virtual o viewport, que es usualmente más ancho 
que la pantalla y la comprimen de manera que pueda verse completa. El usuario podrá recorrerla y hacer zoom para ver 
diferentes áreas de la página. Por ejemplo, si una pantalla móvil tiene un ancho 640px, las páginas pueden ser procesadas 
con un viewport de 980px, y después comprimidas para que entren en 640px.

---
## HTML5: Viewport
![ejemplo viewport](images/appWeb/viewport.png)

---
## HTML5: Viewport
Esto se hace porque muchas páginas no están optimizadas para dispositivos móviles y se ven mal cuando son procesadas a un 
ancho de viewport pequeño. El viewport virtual es una forma de resolver el problema de sitios no optimizados para móviles, 
logrando que se vean mejor.

---
## HTML5: Viewport
<!-- .slide: style="font-size: 0.80em" -->
La etiqueta viewport permite definir el ancho, alto y escala del área usada por el navegador para mostrar contenido.
Sino por defecto una web tiene siempre 980px de ancho.

Se le puede configurar
* **width:** Ancho que vamos a declarar
* **initial-scale:** zoom que va tener como inicio (min 0.1)
* **maximum-scale:** zoom máximo permitido
* **user-scalable:** control del zoom en la página para darle la opción al usuario de aumentar o disminuir el tamaño

````css
<meta name="viewport" content="width=device-width, user-scalable=no">
````

---
## Ejercicio: Responsive
Empleando Ejercicios-CSS el template ej_instagram, el contenido debe visualizarse:
* Se deben mostrar 3 columnas las imagenes si la pantalla si la pantalla tiene un minimo de 601px
* Se debe mostrar 1 columna si la pantalla tiene como máximo 600px
* Las imagenes deben ocupar el 100% de su columna

---
## Ejercicio: Responsive
<iframe width="560" height="315" src="https://www.youtube.com/embed/nLImEsvaP2g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Diseño Responsivo: Características
* Los layouts o imagenes son fluidos y se adaptan a cada pantalla.
* Permite reducir el tiempo de desarrollo.
* Evita los contenidos duplicados.
* Permite compartir los contenidos de una forma más rápida y natural.

---
### Tu página está correctamente optimizada para móviles?
Deja quw google te ayude a averiguarlo...

https://search.google.com/test/mobile-friendly?utm_source=mft&utm_medium=redirect&utm_campaign=mft-redirect

---
## Ejercicio: Diseño Responsivo
Emplear alguna herramienta para probar si el sitio web es responsivo.
Se sugiere usar ‘Chrome Developer Tools’ Ctrol+Mayus+i
    
---
## Diseño Responsivo: Consejos
* No usar estilos in-line.
* La web no necesariamente se debe ver igual en todos los dispositivos y navegadores.
* No diseñar especificamente para una plataforma.
* Usar Javascript para lo que es (animación y alternado de colores por CSS).
* Maquetar con DIV y etiquetas semánticas.
* Usar unidades relativas.

---
## Diseño Responsivo: Pilares de optimización
* Todos los navegadores y sistemas
* Todas las resoluciones y tamaños de pantalla
* Todas las velocidades de conexión

---
## [Bootstrap](http://getbootstrap.com/)
Es un framework web desarrollado por Twitter para crear interfaces que se adapten al tamaño de pantalla de diversos dispositivo.

Está basado en HTML5 y CSS3 por lo que es compatible con la mayoría de los navegadores web.
    
---
<!--http://academia-binaria.com/formas/-->
## Bootstrap
Contiene plantillas de diseño con tipografía, formularios, botones, cuadros, menús de navegación y otros elementos de diseño y requiere la librería jQuery para que todos los plugins JavaScript funcionen.
    </section>

---
## Ejercicio: Bootstrap
Empleando Ejercicios-CSS el template ej_instagram, el contenido debe visualizarse:
* Se deben mostrar 3 columnas las imagenes si la pantalla es mediana
* Se debe mostrar 1 columna si la pantalla es pequeña
* Las imagenes deben ocupar el 100% de su columna

<!-- ## Ejercicio: Cordova
Utilizando Cordova, hacer una aplicación hibrida de CV. -->

---
## Ejercicio: Bootstrap
<iframe width="560" height="315" src="https://www.youtube.com/embed/6b0R4bNYxb8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Primero el Móvil
La filosofía **Mobile First** implica plantear el proceso de diseño teniendo en cuenta el móvil en primer lugar.

Ventaja: Obliga a concentrarse en lo esencial de un producto y a hacer foco solo en lo que tiene sentido para este dispositivo.

---
## Etapas de Desarrollo
<!-- .slide: style="font-size: 0.80em" -->
1. Conceptualización
2. Definición
3. Diseño
4. Desarrollo
5. Publicación

![Proceso de Diseño](images/appWeb/disenioMovil.png)

---
### 1. Conceptualización
Idea de aplicación, que tiene en cuenta las necesidades y problemas de los usuarios. Esta idea responde a una 
investigación preliminar y a la posterior comprobación de la viabilidad del concepto.
* Ideación
* Investigación
* Formalización de la idea

---
### 2. Definición
Se describe con detalle a los usuarios para quienes se diseñará la aplicación, usando metodologías como «Personas» y 
«Viaje del usuario». También aquí se sientan las bases de la funcionalidad, lo cual determinará el alcance del
proyecto y la complejidad de diseño y programación de la app.
* Definición de usuarios
* Definición funcional

---
### 3. Diseño
Se crean los primeros prototipos para ser probados con usuarios. Se provee al desarrollador de pantallas modelo 
para la programación del código.
* Wireframes
* Prototipos
* Test con usuarios
* Diseño visual

---
### 4. Desarrollo
El programador se encarga de dar vida a los diseños y crear la estructura sobre la cual se apoyará el funcionamiento de la
aplicación. Una vez que existe la versión inicial, dedica gran parte del tiempo a corregir errores funcionales para asegurar el
correcto desempeño de la app y la prepara para su aprobación en las tiendas.
* Programación del código
* Corrección de bugs

---
### 5. Publicación
La aplicación es puesta a disposición de los usuarios en las tiendas. Se realiza un seguimiento a través de analíticas, 
estadísticas y comentarios de usuarios, para evaluar el comportamiento y desempeño de la app, corregir errores, 
realizar mejoras y actualizarla en futuras versiones.
* Lanzamiento
* Seguimiento
* Actualización

---
## ¿Dudas, Preguntas, Comentarios?
![DUDAS](images/pregunta.gif)
