---
title: Git
theme: black
slideNumber: true
---

# Git: Sistema de Control de Versiones
Created by <i class="fab fa-telegram"></i>
[edme88]("https://t.me/edme88")

---
<!-- .slide: style="font-size: 0.60em" -->
## Temario
<div class="grid-container4">
<div class="grid-item">

### GIT
* Definición

[Ejercicio: Instalar Git](U2_git.md#/3)
* Configuración

[Ejercicio: Configurar Usuario](U2_git.md#/7)
* Servidores

[Ejercicio: Crear Cuenta Github](U2_git.md#/11)
* Estados 
* Comandos
</div>
<div class="grid-item">

### Comandos
* init 
* clone
* status
* add
* commit
* push
* pull
* log
* diff

[Ejercicio: Github Básico](U2_git.md#/26)
* Software VCS

[Ejercicio: Github Básico II](U2_git.md#/38)
* Sobre git
</div>
<div class="grid-item">

### Classroom
* Qué es?

[Ejercicio: Github Classroom](U2_git.md#/42)
* Cursos de git
</div>

---
## Git
* Sistema distribuido de control de versiones
* Libre
* Crea branches y hace merge rapido y facil
* Cada "Clón" es un repositorio completo

[![Git](images/herramientas/git.png)](href="https://git-scm.com/)

---
<!-- .slide: data-background-color="grey"-->
## Ya instalaste Git? 
Si aún no lo descargaste, bajalo del siguiente link!
(Se recomienda **Use Windows default console windows**)

[Git](https://git-scm.com/)

---
## Ejercicio: Instalar Git
<iframe width="560" height="315" src="https://www.youtube.com/embed/WEUliO01zL4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## git config
Este comando permite establecer una configuración específica de usuario, como email, nombre de usuario, tipo de formato, etc

---
## Git: Configuración Usuario
Desde la consola de comandos:
* Configurar usuario de manera Global

```javascript
   git config --global user.name "nombreUsuario"
   git config --global user.email miEmail@domain.com 
```

* Configurar usuario de manera local
```javascript
   git config --local user.name "nombreUsuario"
   git config --local user.email miEmail@domain.com
```

* Ver configuración realizada
```javascript
   git config --list
```
---
## Ejercicio: Configurar Usuario
* Abre la consola de windows **cmd** (símbolo del sistema) o el Bash de Git (depende como lo instalaste)
* Configura tu usuario de git de manera global (Recuerda tu nombre de usuario e email usados. Posteriormente lo usaras para tu cuenta de GitHub)

---
## Ejercicio: Configurar Usuario
<iframe width="560" height="315" src="https://www.youtube.com/embed/R1DgidQBjgc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
<!-- .slide: data-background="images/herramientas/servidoresGIT.png" -->
## Git: Servidores
* Github
* Bitbucket
* GitLab

---
## Git: Servidores
Los servidores permiten tener almacenamiento virtual de tu proyecto. 
Puedes guardar versiones del código y accederlas cuando lo necesites. 

---
## Ejercicio: Creación de Cuenta en GitHub
Create una cuenta en [gitHub]("https://www.github.com") ...**Sign up** ...for Free
Recuerda emplear el mismo nombre de usuario e email que tu usuario de github global.
Una vez creada tu cuenta, enviar el nombre usuario al Profe por email, así puede validarlo!
[![gitHub](images/herramientas/gitHub.png)](https://www.github.com)

---
## Ejercicio: Creación de Cuenta en GitHub
<iframe width="560" height="315" src="https://www.youtube.com/embed/2xr8dkuMb_c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Los 3 estados + Untraking
* **Unmodified** los datos estan almacenados de manera segura en el repositorio
* **Modified** Se ha modificado el archivo pero todavía no se ha confirmado
* **Untrack** el archivo no lleva seguimiento de versionado

---
## Los 3 estados + Untraking
![3 Estados](images/herramientas/three-stages-01.svg)

---
## Git: Comandos
Algunos comandos son:
* init
* clone
* add
* commit
* push
* pull
* log
* diff
etc, etc, etc

---
## git init
Permite crear un nuevo repositorio de git para comenzar a versionar los archivos.
````
git init
````

---
## git clone
Crea una copia local de un repositorio remoto.
````
git clone <repo url>
````
La última versión de los archivos del respositorio remoto se copian en nuestra computadora dentro de una nueva carpeta: NOMBRE_REPO

---
## git status
Muestra la lista de archivos que se han cambiado junto con los archivos que están por ser añadidos (add).
````
git status
````

---
## git add
Permite agregar archivos al index. Es decir, selecciona el/los archivos que seran versionados en el proximo commit.
````
git add mi_archivo.html
````

---
## git commit
Permite guardar los cambios (versionar) en el repositorio local
````
git commit -m "Se agrego un elemento a la pagina"
````

---
## Commit
* Identificadores numéricos de 40bytes
* Identificación de la persona que realizo el commit (nombre y mail)
* Fecha del commit
* Mensaje de texto asociado al commit (comentario personal de los cambios)

![Git Commit](images/herramientas/git_commit.png)

---
## git push
Envia los cambios realizados al repositorio remoto.
````
git push
````

---
## git pull
Trae los cambios del repositorio remoto.
Debe emplearse, por ejemplo, cuando el repositorio remoto ha sido actualizado manualmente, o, en el caso del trabajo colaborativo, si nuestro compañero ha subido cambios con un push.
````
git pull
````
   
---
## git log
Muestra el historial del repositorio, un listado de todos los commits realizados, junto con detalles del autor y fecha del cambio.
````
git log
````

---
## git diff
Muestra los cambios que se realizaron en los archivos (con respecto al último commit)
````
git diff
````

---
## Ejercicio: Github Básico
* Crear un repositorio (inicializarlo)
* Clonar el repositorio
* Agregar archivo
* Guardar cambios en repositorio local
* Guardar el commit en el repositorio remoto
* En el navegador, visualizar los commits realizados
<!--(No te preocupes, hay un [PDF](https://drive.google.com/open?id=15WiD8tBJ1rZtosfbDFEaoFBBAbN8oJh5) con el paso a paso y capturas de pantalla)-->

---
## Ejercicio: Github Básico
````html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Free Web tutorials">
    <meta name="keywords" content="HTML,CSS,XML,JavaScript">
    <meta name="author" content="John Doe">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
</body>
</html>
````
---
## Ejercicio: Github Básico
<iframe width="560" height="315" src="https://www.youtube.com/embed/IxlMd1Mu_40" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Ejercicio: Github Básico
Con este ejercicio aprendimos los comandos para:
* Clonar un respositorio remoto
````
git clone https://github.com/mi_usuario/nombre_repositorio.git
````
* Verificar que archivos del repositorio cambiaron
````
git status
````

---
## Ejercicio: Github Básico
Con este ejercicio aprendimos los comandos para:
* Añadir el cambio al siguiente commit
````
git add nombre_archivo
````
* Guardar cambios en repositorio local
````
git commit -m "Comentario"
````
* Guardar el commit en el repositorio remoto
````
git push
````

---
## Ejercicio: Github Básico
Los siguientes comandos
* git clone
* git status
* git add
* git commit
* git push
### Es lo más importante de Git. APRENDANLO COMO SU NOMBRE!!!

---
## Y si no me gusta emplear lineas de comando?
Hay otras alternativas, como emplear softwares de VCS.

Sin embargo...la mayoría de interfaces gráficas de usuario solo implementan una parte de las características de Git por motivos de simplicidad.
Muchas veces cuando se presentan conflictos en estos softwares, por problemas de configuración o acciones mal realizadas, hay que solucionarlas por linea de comandos.

---
## por que debo emplear lineas de comando?
<!-- .slide: data-background="images/herramientas/hackerman.jpg" -->
Para sentirse como **Hackerman** xD

Aprendiendo **Git** por linea de comandos no dependeras de ningun software, y podras realizar TODAS las acciones.

---
## Esto de la lina de comandos sigue sin convencerme...
En la siguiente filmina tienes algunas opciones de software para VCS. Puedes probar y usar cualquier :D
Depende de ti! (pero en clase solo veremos linea de comandos)

---
<!-- .slide: data-background="images/herramientas/SOFTsubversionado.png" -->
## Software para VCS
* Linea de Comandos
* GitHub for windows
* Tortoise
* SourceTree (BitBucket)
* GitKraken

----

## GitKraken
![Git Kraken](images/herramientas/git_kraken.png)

----

## SourceTree
![Git SourceTree](images/herramientas/git_sourceTree.png)

----

## Git Tortoise
![Git Tortoise](images/herramientas/git_tortoise.png)

---
![Git Commands](images/herramientas/gitCommands.jpg)

---
## Repaso de Terminología
* **Repositorio:** Colección de todas las referencias, base de datos, objetos y una copia de trabajo.
* **Commit:** Es una foto del proyecto en un tiempo determinado.
* **Tag (etiqueta):** Una etiqueta a un commit en particular
* **Ref o referencia:** Cadena de 40 bytes que representa una version/commit.

---
## Ejercicio: Github Básico II
* Realizar un cambio en el repositorio remoto
* Ver el repositorio local (esta ese cambio?)
* Traer los cambios del repositorio remoto al local
<!--(No te preocupes, hay un [PDF](https://drive.google.com/open?id=1fImvKA6bvFDLyq0-17OHXUeUGhJmJLBK) con el paso a paso y capturas de pantalla)-->

---
## Ejercicio: Github Básico II
<iframe width="560" height="315" src="https://www.youtube.com/embed/eqEVgp98qcY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Sobre Git
Puedes versionar código, documentos de texto plano...

Pero recuerda que GIT no está optimizado para subir VIDEOS o imágenes muy pesadas, o archivos binarios (como instaladores).

Usa Git sabiamente pequeño padawan.

---
## GitHub Classroom
Plataforma que facilita el intercambio de código entre alumnos y docentes, manteniendolo versionado.

Permite el trabajo colaborativo, gestión de issues, code reviews, feedback, etc.

---
## Ejercicio: GitHub Classroom
* Crear un repositorio para los ejercicios de la materia, empleando el código base de los ejercicios (servira para avanzar con html, css, js más adelante).

[Link Classroom](https://classroom.github.com/a/alV9yr2r)

<!--Paso a paso aquí...[PDF](https://drive.google.com/open?id=1scW5JZ3puH0uPpmzckFkEgE8TjqSJbV8)-->

---
## Ejercicio: GitHub Classroom
<iframe width="560" height="315" src="https://www.youtube.com/embed/BH2V4aBNkYk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
![Fire](images/herramientas/Fire-commit-push.jpg)

---
## Cursos de Git
* [Learn Git Branching](https://learngitbranching.js.org/)
* [try.github](https://try.github.io)
* [Codecademy](https://www.codecademy.com/learn/learn-git)
* [Acamica](https://www.acamica.com/cursos/29/git)
* [CodeSchool](https://www.codeschool.com/learn/git)

---
## ¿Dudas, Preguntas, Comentarios?
![DUDAS](images/pregunta.gif)
