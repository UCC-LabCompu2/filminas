---
title: Git
theme: black
slideNumber: true
---

# Git: Sistema de Control de Versiones
<small>
Created by <i class="fab fa-telegram"></i>
[edme88]("https://t.me/edme88") & 
<i class="fab fa-telegram"></i>
[rmarku]("https://t.me/rmarku")
</small>

---
## Git
* Sistema distribuido de control de versiones
* Libre
* Crea branches y hace merge rapido y facil
* Cada "Clón" es un repositorio completo

[![Git](images/herramientas/git.png)](href="https://git-scm.com/)

---
## Ya instalaste Git? 
Si aún no lo descargaste, bajalo del siguiente link!
(Se recomienda **Use Windows default console windows**)

[Git]("https://git-scm.com/")

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
* Configura tu usuario de git de manera global (Recuerda tu nombre de usuario e email usados. Posteriorment lo usaras para tu cuenta de GitHub)

---
<!-- .slide: data-background="images/herramientas/servidoresGIT.png" -->
## Git: Servidores
* Github
* Bitbucket

---
## Ejercicio: Creación de Cuenta en GitHub
Create una cuenta en [gitHub]("https://www.github.com") ...**Sign up** ...for Free
Recuerda emplear el mismo nombre de usuario e email que tu usuario de github global.
Una vez creada tu cuenta, enviar el nombre usuario al Profe por email, así puede validarlo!
[![gitHub](images/herramientas/gitHub.png)](https://www.github.com)


---
## Los 3 estados + Untraking
* **Unmodified** los datos estan almacenados de manera segura en el repositorio
* **Modified** Se ha modificado el archivo pero todavía no se ha confirmado
* **Untrack** el archivo no lleva seguimiento de versionado

---
## Los 3 estados + Untraking
![3 Estados](images/herramientas/three-stages-01.svg)

---
## Commit
* Identificadores numéricos de 40bytes
* Identificación de la persona que realizo el commit (nombre y mail)
* Fecha del commit</li>
* Mensaje de texto asociado al commit (comentario personal de los cambios)

![Git Commit](images/herramientas/git_commit.png)

---
## Ejercicio: Github Básico
* Crear un repositorio (inicializarlo)
* Clonar el repositorio
* Agregar archivo
* Guardar cambios en repositorio local
* Guardar el commit en el repositorio remoto
* En el navegador, visualizar los commits realizados
(No te preocupes, hay un [PDF](https://drive.google.com/open?id=15WiD8tBJ1rZtosfbDFEaoFBBAbN8oJh5) con el paso a paso y capturas de pantalla)

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

---
## GitKraken
![Git Kraken](images/herramientas/git_kraken.png)

---
## SourceTree
![Git SourceTree](images/herramientas/git_sourceTree.png)

---
## Git Tortoise
![Git Tortoise](images/herramientas/git_tortoise.png)

---
![Git Commands](images/herramientas/gitCommands.jpg)

---
## Readme.md
Seguramente te estes preguntando: qué es ese readme.md que se autogeneró? 
Es un archivo que deberian tener todos los proyectos de Soft. El mismo se supone que sea una:
* Guía rápida de la aplicación o librería y de cómo empezar a usarla.
* Instrucciones de configuración, instalación, operación, manifiesto de archivos, información sobre licencia y el desarrolador, bug conocidos, solución a problemas, créditos y agradecimientos, registro de cambios o versiones, sección de noticias, etc.
* [Visualizador de Markdown](https://dillinger.io/)

<!--https://jesuslc.com/2016/07/12/como-escribir-un-readme-que-mole/-->

---
## Readme.md
![Markdown](images/herramientas/markdown.png)

---
## Reppaso de Terminología
* **Repositorio:** Colección de todas las referencias, base de datos, objetos y una copia de trabajo.
* **Commit:** Es una foto del proyecto en un tiempo determinado.
* **Tag (etiqueta):** Una etiqueta a un commit en particular
* **Ref o referencia:** Cadena de 40 bytes que representa una version/commit.

---
## Ejercicio: Github Colaborativo
#### Este año (2020), por las complicaciones con las clases, no se hará :(
* Emplear el repositorio del anterior ejercicio
* Configurar el repositorio para trabajar de manera colaborativa con un compañero. (Setting->Collaborators).
* Modificar un archivo desde el navegador
* Comprobar el repositorio local.
* Descargar cambios.

---
## Git Brach
Branch significa **rama**.
Cuando se crea un repositorio, por defecto se emplea la rama principal **master**. 

---
![Branches](images/herramientas/branches.png)

---
## Ejercicio: Github Branchs
Empleando un repositorio, cuyo remote este en Github:
* Visualizar en que rama estamos trabajando
* Cree una nueva rama (develop)
* Vea el listado de todas las branchs existentes en el proyecto y la branch actual
* Cambie de rama
* Realice algún cambio en el código y commit al repositorio local
* Visualice en Github los commits de las branchs
* Merge de la nueva rama con Master
* Borrar una branch
---
## Reppaso de Terminología
* **Branch (rama):** Linea de desarrollo del proyecto
* **Merge:** Mezcla codigo de 2 ramas

---
## Fork
Hacerle **fork** a un repositorio significa copiarlo. Así podemos modifucar el código sin afectar al proyecto original.

Se utiliza para proponer cambios en el proyecto de otra persona u organización ó para utilizar el proyecto de otra persona como punto de partida para nuevas ideas.

---
## Pull Request
Un pull request es una petición que el propietario de un fork de un repositorio hace al propietario del repositorio original para que este último incorpore los commits que están en el fork.

También se denomina pull request a una solicitud que se realiza de una branch a otra para mergearse (generalmente después de un code review y si no se tienen permisos de merge a master).

<!--http://aprendegit.com/que-es-un-pull-request/-->

---   
![Git Puss](images/herramientas/git-puss.jpg)

---
![Git Purr](images/herramientas/git-purr.jpg)

---
![Git Merge-Rebase](images/herramientas/git-merge-rebase.jpg)

---
## Ejercicio: Github Fork
Hacer un fork de las filminas de clases:\
https://github.com/UCC-LabCompu2/filminas
 
---
## Repaso: Comandos Básicos
* Clonar Repositorio
* Actualizar repositorio local a commit más nuevo
* Registrar cambios (añadirlos al Index)
* Hacer un commit
* Enviar cambios a repositorio remoto

---
## Desafío: Comandos Git
![Comandos Git](images/herramientas/comandoGit1.png)

---
![Fire](images/herramientas/Fire-commit-push.jpg)

---
## Cursos de Git
* [try.github](https://try.github.io)
* [Codecademy](https://www.codecademy.com/learn/learn-git)
* [Acamica](https://www.acamica.com/cursos/29/git)
* [CodeSchool](https://www.codeschool.com/learn/git)

---
## ¿Dudas, Preguntas, Comentarios?
![DUDAS](images/pregunta.gif)
