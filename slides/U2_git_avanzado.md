---
title: Git
theme: black
slideNumber: true
---

# Git (parte II)
<small>
Created by <i class="fab fa-telegram"></i>
[edme88]("https://t.me/edme88") & 
</small>

---
### Qué comandos aprendimos la clase pasada?
<ul>
<li class="fragment">git config</li>
<li class="fragment">git init</li>
<li class="fragment">git add</li>
<li class="fragment">git commit</li>
<li class="fragment">git push</li>
<li class="fragment">git pull</li>
<li class="fragment">git log</li>
</ul>

---
### Cómo funcionan los comandos que aprendimos la clase pasada?
![Git Repaso](images/herramientas/comandoGit2.png)

<small class="fragment">1 git add</small>
<small class="fragment">2 git commit -m</small>
<small class="fragment">3 git push</small>
<small class="fragment">4 git clone/pull</small>
<small class="fragment">5 git diff</small>
<small class="fragment">6 git commit -a -m</small>

---
## Readme.md
<!-- .slide: style="font-size: 0.80em" -->
Seguramente te estes preguntando: qué es ese readme.md que se autogeneró? 
Es un archivo que deberian tener todos los proyectos de Soft. El mismo se supone que sea una:
* Guía rápida de la aplicación o librería y de cómo empezar a usarla.
* Instrucciones de configuración, instalación, operación, manifiesto de archivos, información sobre licencia y el desarrolador, bug conocidos, solución a problemas, créditos y agradecimientos, registro de cambios o versiones, sección de noticias, etc.


<!--https://jesuslc.com/2016/07/12/como-escribir-un-readme-que-mole/-->

---
## Ejemplos de Readmes
[RevealJS](https://github.com/hakimel/reveal.js)

[MelonJS](https://github.com/melonjs/melonjs)

---
## Readme.md
![Markdown](images/herramientas/markdown.png)

[Visualizador de Markdown](https://dillinger.io/)

---
## Ejercicio Readme.md
* Agregar títulos secundarios:
 * Autor
 * Contenido/Descripción
* Agregar los autores con items
* Poner los apellidos de los autores en negrita
* Agregar un link del aula virtual
* Agregar info de contacto en una tabla
* Agregar [emoji](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)

---
## Ejercicio Readme.md
<iframe width="560" height="315" src="https://www.youtube.com/embed/NlmsWZmC_IQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Git Brach
Branch significa **rama**. 
Las ramas son caminos que puede tomar el desarrollo de un software, algo que ocurre generalmente para resolver problemas o crear nuevas funcionalidades. 

Las **branch** permiten que nuestro proyecto pueda tener diversos estados y que los desarrolladores sean capaces de pasar de uno a otro de una manera ágil.

El **branching** permite el desarrollo en paralelo sin interferencia entre las diferentes ramas. 

---
## Git Brach
Cuando se crea un repositorio, por defecto se emplea la rama principal **master**. 

Podemos verificar esto entrando a nuestro repositorio (ejercicio1), y escribiendo:
```
git branch
```

---
![Branches](images/herramientas/branches.png)

---
## Branching
* Master: Contiene una versión estable y funcional del código.
* Se pueden crear ramas para desarollar nuevas funcionalidades **feature**
* En equipos de trabajo, Se puede crear una rama para cada desarrollar o **developer**
* Se pueden crear ramas para trabajar en soluciones a los defectos o errores encontrados, **hotfix**

---
## Comandos de Branch
* branch
* checkout
* merge
* push

---
## git branch
Permite visualizar en que rama se está trabajando
````
git branch
````
ó, Permite crear una rama nueva
````
git branch nombre_rama
````

---
## git checkout
Permite movernos de una rama a otra
````
git checkout nueva_rama
````

---
## git merge
A medida que crees ramas y cambies el estado del las carpetas o archivos tu proyecto empezará a divergir de una rama a otra. 
Llegará el momento en el que te interese fusionar ramas para poder incorporar el trabajo realizado a la rama master. 

Parados en la rama **master**:
````
git merge nueva_rama
````

---
## Ejercicio: Github Branchs
Empleando el repositorio ejercicio 1:
* Visualizar en que rama estamos trabajando
* Cree una nueva rama (develop)
* Vea el listado de todas las branchs
* Cambie de rama
* Realice algún cambio en el código y commit al repositorio local
* Visualice en Github los commits de las branchs
* Merge de la nueva rama con Master
* Borrar una branch

---
## Ejercicio: Github Branchs
<iframe width="560" height="315" src="https://www.youtube.com/embed/2KXSZtjzgkA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Repaso de Terminología
* **Branch (rama):** Linea de desarrollo del proyecto
* **Merge:** Mezcla codigo de 2 ramas

---
## Fork
Alguna vez te pasó que en **GitHub** encontraste un código que te era de utilidad? 

Quizás encontraste un código de un juego y te dijiste: "Quiero hacer mi propia versión"?

O un proyecto que era interesante y querias hacer tus propias pruebas? 

Esto se soluciona con un **fork**!!!

---
## Fork
Hacerle **fork** a un repositorio significa copiarlo. Así podemos modificar el código sin afectar al proyecto original.

Se utiliza para proponer cambios en el proyecto de otra persona u organización ó para utilizar el proyecto de otra 
persona como punto de partida para nuevas ideas.

---
## Fork: Ejemplo
Si quisieras investigar como hacer filminas con tecnologia markdown, podrias emplear este [repositorio](https://github.com/UCC-LabCompu2/filminas)
![fork](images/herramientas/fork.png)

---
#### Hice un cambio muy bueno en el repositorio, y quisiera que el autor original del código incorpore ese cambio?!?
Esto se soluciona con un **pull request**

---
## Pull Request
Un pull request es una petición que el propietario de un fork de un repositorio hace al propietario del repositorio 
original para que este último incorpore los commits que están en el fork.

También se denomina pull request a una solicitud que se realiza de una branch a otra para mergearse (generalmente 
después de un code review y si no se tienen permisos de merge a master).

<!--http://aprendegit.com/que-es-un-pull-request/-->
---
## .gitignore
El archivo "gitignore" sirve para decirle a Git qué archivos o directorios completos debe ignorar y no subir al repositorio de código. 

Puede que no sea necesario versionar esos archivos porque: son privados y no se desea compartir, son archivos binarios 
con datos que no se desa versionar (instaladores, diagramas, etc).

---
#### Sigo sin enter como funcionan las ramas con los comandos...
* push
* pull
* merge

No te preocupes, te lo explicamos con gatitos (si, nada que tenga gatitos puede fallar!)


---   
![Git Puss](images/herramientas/git-puss.jpg)

---
![Git Purr](images/herramientas/git-purr.jpg)

---
![Git Merge-Rebase](images/herramientas/git-merge-rebase.jpg)
 
---
## +
Existen muchos comandos de git, y parámetros que se pueden agregar a comandos ya existentes, pero has aprendido lo básico 
(e inclusive un poquito más) para que puedas trabajar versionando tus proyectos de software.
 
---
## ¿Dudas, Preguntas, Comentarios?
![DUDAS](images/pregunta.gif)
