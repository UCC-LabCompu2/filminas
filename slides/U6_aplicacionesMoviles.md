---
title: Aplicaciones Móviles
theme: black
slideNumber: true
---

# Unidad 6: Diseño Responsive
Created by <i class="fab fa-telegram"></i>
[edme88]("https://t.me/edme88")

---
## Libros:
![Book](images/book.png)
[“Diseñando APPS para móviles” Javier Cuello y José Vittone](http://appdesignbook.com/es/contenidos/tipos-de-apps/)

---
## Aplicaciones Moviles o APP
Son aplicaciones diseñada para ser ejecutadas en teléfonos inteligentes, tablets y otros dispositivos móviles y que 
permite al usuario efectuar una tarea, facilitando la gestión o actividad a desarrollar.

![Aplicaciones Moviles](images/moviles/aplicaciones-moviles.jpg)

---
## Aplicaciones Moviles o APP
Inicialmente estaban enfocadas en **mejorar la productividad personal**:
* Alarmas
* Calendarios
* Calculadoras
* Clientes de Correo

---
## Diferencia entre APP y Web Móvil
Las APP deben ser descargadas e instaladas antes de usarse.

Las Webs se acceden empleando internet y un navegador.

Las APPs pueden verse sin internet y tienen acceso a ciertas características del hardware del teléfono.

---
## [Ejemplos de Aplicaciones Móviles](https://www.infobae.com/america/tecno/2020/03/03/cuales-son-las-10-aplicaciones-mas-descargadas-del-mundo/)
<!-- .slide: style="font-size: 0.80em" -->
* Whatsap
* Telegram
* Instagram
* Opera Mini
* Clash of Clans

![Apps Mas Descargadas](images/appWeb/appsDescargadas.jpg)

---
## Categorías de Aplicaciones
### Según el contenido:</h3>
* Entretenimiento
* Sociales
* Utilitarias y Productividad
* Educativas e Informativas
* Creación 

---
## Categorías de Aplicaciones
### Según el costo:</h3>
* Apps Gratuitas 
<p class="fragment"> <small>(mayor llegada a los usuarios, disminuye expectativa del producto, suele incluir publicidad) </small></p>

* Apps de Pago 
<p class="fragment"> <small>(altas expectativas, será exitosa si no tiene rivales gratuitos)</small> </p>

* Fremium 
<p class="fragment"><small>(uso básico, que se amplia al pagar)</small> </p>


---
## Tipos de Aplicaciones
* Aplicaciones Nativas
* Aplicaciones Web
* Aplicaciones Hibridas

---
## Características de App
* Capacidad de comunicarse desde cualquier lugar
* Interfaz de usuario para pantalla y teclado pequeno
* Movilidad del dispositivo
* Disponibilidad de muchos sensores

---
## [Sistemas Operativos para Dispositivos móviles](https://gs.statcounter.com/os-market-share/mobile/worldwide)
* Android
* iOS
* kaios
* ~~Windows Phone~~
* ~~Blackberry~~
* ~~Ubuntu Phone~~
* ~~Firefox OS~~
* ~~Tizen~~
* Fucshia <small>(comming soon...)</small></br>

---
## Apps Android
* **Lenguaje:** Java o Kotlin + Librerias Android
* **IDE:** [Android Studio](https://developer.android.com/studio)
* **SO:** Windows, Linux o Mac
* Emuladores de Dispositivos
    
---
## Apps iOS
* **Lenguaje:** ObjetiveC - Swift
* **IDE:** [XCode](https://developer.apple.com/xcode/)
* **SO:** Mac
* Emuladores de Dispositivos
* Para probarlo en dispositivo, pagar licencia de desarollador


<!--
    http://appdesignbook.com/es/contenidos/diseno-visual-apps-nativas/
    http://www.lancetalent.com/blog/tipos-de-aplicaciones-moviles-ventajas-inconvenientes/
    http://www.batanga.com/tech/13241/que-es-apache-cordova
    https://cordova.apache.org/docs/es/latest/guide/overview/
-->

---
## Tipos de Aplicaciones
* Aplicaciones Nativas
* Aplicaciones Web o Webapps
* Aplicaciones Hibridas

![Hybrid App](images/moviles/hybrid-app-development.png)

---
## Aplicaciones Nativas
Se desarrolla de forma específica para un determinado sistema operativo, utilizando el Software
Development Kit o SDK de la plataforma.
    
---
## Aplicaciones Nativas
<table style="font-size: 0.7em">
    <tr>
<td>Ventajas</td>
<td>Desventajas</td>
    </tr>
    <tr>
<td>
    <ul>
        <li>Acceso completo al dispositivo (Acceso a cámara y sensores: GPS, acelerómetro, giróscopo, etc)</li>
        <li>Mejor experiencia del usuario</li>
        <li>Visibilidad en APP Store</li>
        <li>Envio de notificaciones a los usuarios</li>
        <li>No requiere conexion a internet</li>
    </ul>
</td>
<td>
    <ul>
        <li>Diferentes habilidades/idiomas/herramientaspara cada plataforma de destino</li>
        <li>Tienden a ser más caras de desarrollar</li>
        <li>El código cliente no es reutilizable entre las diferentes plataformas</li>
    </ul>
</td>
    </tr>
</table>
    </section>

---
## Web APP
Se ejecutan dentro del propio navegador web del dispositivo a través de una URL. Se desarrollan con HTML, JavaScript y CSS.
    
---
## Web APP
<table style="font-size: 0.7em">
    <tr>
<td>Ventajas</td>
<td>Desventajas</td>
    </tr>
    <tr>
<td>
    <ul>
        <li>El código es reutilizable</li>
        <li>Proceso de desarrollo sencillo y económico</li>
        <li>No Necesita Instalarse</li>
        <li>El usuario siempre dispone de la ultima version</li>
    </ul>
</td>
<td>
    <ul>
        <li>Requiere conexión a Internet</li>
        <li>Acceso limitado a características de hardware</li>
        <li>Experiencia del ususario más propia de la aplicación web que de la app nativa</li>
        <li>Requiere mayor esfuerzo de promoción</li>
        <li>Restricciones e inconvenientes en gestión de memoria</li>
    </ul>
</td>
    </tr>
</table>

---
## Web APP
![Web App Facebook](images/appWeb/webApp_facebook.png)

---
## Aplicación híbrida
Es una combinación de las aplicaciones nativas y las webapss. Se desarrollan con lenguajes: HTML, Javascript y CSS por
lo que permite su uso en diferentes plataformas y el acceso a gran parte de las características del hardware del 
dispositivo. Es posible distribuirla en app store.
    
---
## Aplicación híbrida
Una vez que la aplicación está terminada, se compila o empaqueta, y el resultado final es como si se tratara de una aplicación nativa.

---
## Aplicación híbrida
<table style="font-size: 0.7em">
    <tr>
<td>Ventajas</td>
<td>Desventajas</td>
    </tr>
    <tr>
    <td>
        <ul>
            <li>Acceso al dispositivo (Acceso a cámara y sensores: GPS, acelerómetro, giróscopo, etc)</li>
            <li>Visibilidad en APP Store</li>
            <li>El código es reutilizable</li>
            <li>Proceso de desarrollo sencillo y económico</li>
        </ul>
    </td>
    <td>
        <ul>
            <li>Experiencia del ususario más propia de la aplicación web que de la app nativa. 
            Sin embargo, hay formas de usar controles y botones nativos de cada plataforma</li>
        </ul>
    </td>
    </tr>
</table>

<!--http://blog.aplicacionesmovil.com/aplicaciones-celular/desarrollo-de-aplicaciones-hibridas-->

---
## Aplicación híbrida
![App Hibrida Netflix](images/appWeb/appHibrida_netflix.png)

---
![Nativa vs. Hibrida](images/appWeb/native-v-hybrid.png)

---
![Web y Nativa](images/appWeb/app-web-native.jpg)

---
![Hibrida vs. Nativa](images/moviles/hybrid-native-web.png)

---
## Frameworks Híbridos
* CapacitorJS
* Apache Cordova
* IONIC
* PhoneGap
* Icenium
* React Native
* Appcelerator Titanium

---
## [CapacitorJS](https://capacitorjs.com/)
Es un framework que permite transformar una WebApp en una App Mobile o Desktop mediante el uso de WebView. 
Genera un proyecto de Android Studio o CodeX.

---
## Crear APP en CapacitorJS
1. Crear una nueva aplicación `npm init @capacitor/app`
2. Inicializar capacitor `npx cap init`
3. Instalar android para capacitor `npm install @capacitor/android`
4. Agregar la plataforma `npx cap add android`
5. Correr android `npx cap run android`
6; En Android Studio crear un emulador

---
## [Apache Cordova](https://cordova.apache.org/)
Es un framework para desarrollar aplicaciones "híbridas" dentro de un smartphone.
Cuenta con muchas Apis de diversos dispositivos móviles. Permite desarrollar con HTML, JavaScript y CSS, y luego las
compila directamente con el SDK.
    
---
## Apache Cordova
Permite encapsular CSS, HTML, y código de Javascript dependiendo de la plataforma del dispositivo.
    
Extiende las características de HTML y Javascript para trabajar con el dispositivo.
    
Las aplicaciones resultantes son híbridas ya que están empaquetadas como aplicaciones para su distribución y tienen acceso a las APIs nativas del dispositivo.
    
---
## Ejecución de Cordova
1. Instalar cordova `npm install -g cordova`
2. Crear nuevo proyecto `cordova create MyApp`
3. Agregar tipo de plataforma `cd MyApp cordova platform add android` 
4. Conectar un celular con Android (opciones de desarrollador-Depuración de USB) `cordova run android` 

---
## Ejecución de Cordova 2
1. Abrir el proyecto, y reemplazar el contenido de la carpeta 'www' por un proyecto web
2. Abrir el Android Studio
3. Crear un dispositivo para emular desde 'Tools > Android > AVD Manager'
4. Correr la aplicación en el emulador <pre><code>cordova emulate android</code></pre> 

---
## Por qué Android? 
* Para generar la APP es necesario contar con el Software Development Kit o SDK instalado.
* Android Studio es libre y funciona sobre cualquier SO.
* Para desarrollar APK para iOS se debe emplear MacOS.

<!--https://desarrolloweb.com/manuales/responsive-web-design.html-->

---
## ¿Dudas, Preguntas, Comentarios?
![DUDAS](images/pregunta.gif)
