---
title: Instalación y Configuración de Sistemas Operativos
theme: black
slideNumber: true
---

# Sistemas Operativos
Created by <i class="fab fa-telegram"></i>
[edme88]("https://t.me/edme88")

---
<style>
.grid-container4 {
    display: grid;
    grid-template-columns: auto auto auto auto;
    font-size: 0.8em;
    text-align: left !important;
}

.grid-container3 {
    display: grid;
    grid-template-columns: auto auto auto;
    font-size: 0.8em;
    text-align: left !important;
}

.grid-item {
    border: 3px solid rgba(121, 177, 217, 0.8);
    padding: 20px;
    text-align: left !important;
}
</style>
<!-- .slide: style="font-size: 0.60em" -->
## Temario
<div class="grid-container4">
<div class="grid-item">

### Sistema Operativo
* Definición
* Tareas
* Ejemplos de SO
* Criterios de Clasificación
[Ejercicio: Criterios de SO](U1_instalacionConfiguracionSO.html#/6/1)
* Recursos de Hardware
[Ejercicio: Comparar SO](U1_instalacionConfiguracionSO.html#/9)

* Actualización en los SO
</div>
<div class="grid-item">

### Máquinas Virtuales
* Definición 
* Características
* Ventajas
* Aplicaciones
[Ejercicio: MV Windows](U1_instalacionConfiguracionSO.html#/21)
* Docker
* MV vs Docker 
</div>
<div class="grid-item">

### BIOS y UEFI
* Definición
* Función
* Forma de funcionamiento
[Ejercicio: Bios o UEFI](U1_instalacionConfiguracionSO.html#/33)
</div>
<div class="grid-item">

### Formateo y Partición
* Formateo de Discos
* Rufus
* MBR vs GTP
[Ejercicio: Rufus](U1_instalacionConfiguracionSO.html#/40)
* Particionado de Discos
* Pasos de Instalción de un SO
</div>
</div>

---

## Sistema Operativo
    
Es un programa que administra el Hardware de una computadora. 
Proporciona las bases para los programas de aplicación y actúa como un intermediario entre el usuario y el hardware.

---
## Sistema Operativo
![SO](images/configSO/so.png)

---
## SO: Tareas
<!-- .slide: style="font-size: 0.90em" -->
Las tareas que hace un SO son:
* Realizar el interfaz Sistema-Usuario
* Compartir los recursos de Hardware entre los usuarios
* Permitir a los usuarios compartir sus datos entre ellos
* Prevenir que las actividades de un usuario no interfieran en las de los demás usuarios
* Calendarizar los recursos de los usuarios
* Facilitar el acceso a los dispositivos de E/S
* Recuperarse de fallas o errores
* Llevar el control sobre el uso de los recursos

---
##  [Ejemplos de Sistema Operativo](http://gs.statcounter.com/os-market-share)
<!-- .slide: data-background="images/configSO/OtrosOS.png" data-background-size="50%" style="font-size: 0.80em" -->
<div class="grid-container3">
<div class="grid-item">

Para PC:
* Linux
* Windows 7
* Mac OS X
* RactOS
* FreeDOS
* Chromium OS
* ArcaOS
* Haiku
</div>
<div class="grid-item">

Para dispositivos móviles:
* Android
* ~~Windows phone~~
* iOS
* Fuchsia
* ~~Blackberry~~
* ~~Symbian~~
</div>
<div class="grid-item">

Para servidores: 
* FreeBSD
* Mac OS X Server
* Microsoft Servers
* Novell Netware
* Solaris

</div>

---
## Criterios para Definir SO
* Tipo de Interfaz
  * Gráfica (GUI)
  * Línea de comandos
* Cantidad de tareas
  * Multitarea
  * Monotarea
* Cliente o Servidor
* Tipo de Licencia
  * Propietario
  * Libre

---
<!-- .slide: style="font-size: 0.80em" -->
## [Ejercicio: Criterios de SO](https://docs.google.com/document/d/1U8oEEb7HMQVZxbTH55FgOpdqoxX8QGPJchaX3eztLSQ/edit)

En base a tus conocimientos previos, completa la siguiente tabla:
<table>
<tr>
    <td>SO</td>
    <td>Año</td>
    <td colspan="2">Tipo de Interfaz</td>
    <td colspan="2">Tareas</td>
    <td colspan="2">Arquitectura</td>
    <td colspan="2">Licencia</td>
</tr>
<tr>
    <td></td>
    <td></td>
    <td>GUI</td>
    <td>CLI</td>
    <td>Mono</td>
    <td>Multi</td>
    <td>Cliente</td>
    <td>Servidor</td>
    <td>Libre</td>
    <td>Propietario</td>
</tr>
<tr>
    <td>Windows 3.11</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td>Windows NT</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td>Windows 95</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td>Windows 10</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td>Ubuntu 20</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td>Ubuntu Server</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td>Red Hat</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td>Mac OS X</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
</table>

---
## Recursos de Hardware
<!-- .slide: style="font-size: 0.80em" -->
Los SO requieren ciertos recursos de Hardware para funcionar:
1. Memoria RAM
2. Espacio disponible en Disco Duro
3. Tipo y velocidad del procesador
4. Resolución de video

![Recursos Hardware](images/configSO/hardware.png)

---
## Hardware: Mínimo y Recomendado
Con la configuración del hardware **mínima** el rendimiento del sistema suele ser pobre, ya que el SO sólo podrá ejecutar funciones básicas.

Con la configuración de hardware **recomendada** el SO funciona a una velocidad adecuada.

---
## Ejercicio: Comparar SO
<!-- .slide: style="font-size: 0.80em" -->
En base a las siguientes diapositivas, completa la tabla:
<table>
<tr>
    <td>Requisitos</td>
    <td>3.11</td>
    <td>NT</td>
    <td>95</td>
    <td>98</td>
    <td>XP</td>
    <td>7</td>
    <td>10</td>
    <td>11</td>
</tr>
<tr>
    <td>Año</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td>Procesador</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td>Memoria Ram</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td>Disco Duro</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td>Tarjeta Gráfica</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>

</table>
Objetivo: Ver como el software va evolucionando en conjunto con el hardware.

---

#### Advertencia: Algunas de las siguientes imágenes nos harán viajar en el tiempo... 
<small>Solo hay algunas versiones, NO todo</small>
<!--Descargar audio https://www.youtube.com/watch?v=tHr46P2r514-->
![Máquina del Tiempo](images/configSO/maquinaTiempo.jpeg)

----

## Requisitos mínimos de 
## Windows 3.11
* Año: 1990
* Procesador 80386sx o superior (25 MHz)
* 3 MB de ram (se recomienda 4 MB)
* Al menos 6.2 MB de espacio disponible en disco duro (se recomienda 14.5 MB)
* Monotarea

----

## Windows 3.11
![Windows 3.11](images/configSO/Windows_3.11.png)

----


## Requisitos mínimos de
## Windows NT Server
* Año: 1993
* Procesador de 32 bits basado en intel x86: 80486 a 33 Mhz o superior
* 16 MB de memoria ram
* 125 MB de espacio disponible en disco duro
* adaptador de pantalla de video con resolución VGA o superior
* Multitarea
   
----

## Windows NT

![Windows NT](images/configSO/Windows_NT.jpeg)

----

## Requisitos mínimos de
## Windows 95
<!-- .slide: style="font-size: 0.90em" -->
* Año: 1995
* Procesador 386DX 33 MHz o superior
* Mínimo 4 MB de RAM (de preferencia 8 MB)
* Mínimo 55 Mb de espacio disponible en disco duro
* 1 unidad de disco de alta densidad de 3,5 pulgadas
* Resolución VGA o superior (se recomienda SVGA de 256 colores)
* Multitarea

----

## Windows 95
![Windows 95](images/configSO/windows_95.jpeg)

----

## Windows 95
https://www.tiktok.com/@shtunner/video/6953654804665093381?is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=6955970873513772550

----

## Requisitos mínimos de
## Windows 98
<!-- .slide: style="font-size: 0.90em" -->
* Año: 1998
* Procesador 486DX de 66 MHz o superior
* Mínimo 16 MB de RAM (de preferencia 24 MB)
* 120 a 295 MB de espacio disponible en disco duro
* 1 unidad de disco de alta densidad de 3,5 pulgadas
* Resolución VGA o superior (se recomienda SVGA de 256 colores)
* Internet (MSN, Mensajeria): Modem 14,4 bits por segundo (bps),recomendado 28,8 bits o más rapido

----

## Windows 98
![Windows 98](images/configSO/Windows_98.png)

----

## Requisitos mínimos de
## Windows XP
* Año: 2001
* Procesador Pentium 233 MHz o superior (de preferencia de 300 HMz)
* Mínimo 64 MB de RAM (de preferencia 128 MB)
* Mínimo 1,5 GB de espacio disponible en disco duro
* Tarjeta gráfica y monitor de resolución Súper VGA (800x600) o superior
![Windows XP](images/configSO/winXP.png)

----

## Windows XP
![Windows XP](images/configSO/Windows_XP.png)

----

## Requisitos mínimos de
## Windows 7
* Año: 2007
* Procesador de 32bit o 64bits a 1GHz o más
* 1GB de RAM para 32bits, o 2GB de RAM para 64bits
* 16GB de espacio disponible en disco duro para 32bits, o 20GB para 64bits
* Dispositivo gráfico DirectX9.
![Windows 7](images/configSO/win7.png)

----

## Windows 7
![Windows 7](images/configSO/Windows_7.webp)

----

## Requisitos mínimos de
## Windows 10
* Año: 2015
* Procesador de 32bit o 64bits a 1GHz o más
* 1GB de RAM para 32bits, o 2GB de RAM para 64bits
* 16GB de espacio disponible en disco duro para 32bits, o 20GB para 64bits
* Dispositivo gráfico DirectX9.
![Windows 10](images/configSO/windows10-logo.png)
<!---https://www.xataka.com/especiales/maquinas-virtuales-que-son-como-funcionan-y-como-utilizarlas-->

----

## Windows 10
![Windows 10](images/configSO/Windows_10.jpeg)

----

## Requisitos mínimos de
## Windows 11
* Año: 2021
* Procesador de 64 bits con 2 o más núcleos
* Memoria Ram: 4 GB
* Almacenamiento: 64 GB
* Chip gráfico: Compatible con DirectX 12 con el controlador WDDM 2.0.
* Firmware: UEFI compatible con la función de ‘Arranque Seguro’.
* Pantalla: 9 pulgadas con resolución HD.

---
### Actualizaciones en los SO
<!-- .slide: style="font-size: 0.90em" -->
Ventajas:
* Ayudan a mantener el SO más seguro, reduciendo las vulnerabilidades (la mayoría de los parches son de seguridad)
* Menor fragmentación (evitan conflictos, ya que todos los usuarios tendrían la última versión. No son necesarios parches intermedios)
* Windows a partir de la versión 10 mudo a Saas (software as a service), y no hay versiones (SI compilaciones), que se actualizan continuamente.

---
### Actualizaciones en los SO
<!-- .slide: style="font-size: 0.90em" -->
Desventajas:
* Usuarios empresariales pueden llegar a tener conflictos que otros software que emplean a diario.
* Emplean ancho de banda
* Pueden generarse conflictos con otros SO

---
### Actualizaciones en los SO
![Actualiciones SO](images/configSO/actualizacionesSO.jpg)

---
## Máquina Virtual
Es un software que simula a un computadora y puede ejecutar programas.
Se puede configurar para que los procesos que ejecutan están limitados por los recursos proporcionados.
Habitualmente se usa para ejecutar sistemas operativos y "probarlos".

---
## Máquina Virtual
![Maquina Virtual](images/configSO/maquinaVirtual.png)

---
![Maquina Virtual](images/configSO/ej_maquina-virtual.jpg)

---
## Máquina Virtual: Características
* La MV no puede acceder al resto de datos de la máquina anfitrion.
* Para funcionar, una MV mapea los dispositivos virtuales que ofrece a su invitado con los dispositivos reales presentes en la máquina física.
* Copias de Seguridad y Clonación
* Crear entornos de prueba

---
## Máquina Virtual: Ventajas
* Probar sistemas operativos
* Ejecutar programas antiguos
* Usar software que no esta disponible en nuestro SO
* Probar una aplicación en distintos sistemas
* Copias de Seguridad y Clonación
* Crear entornos de prueba

---
## Máquinas Virtuales: Aplicaciones
* VMWare
* Virtual Box
* Qemu
* Parallels

---
## Ejercicio: Windows-Máquina Virtual
**Instale Windows** en una computadora o máquina virtual (recuerde sacar screenshots del proceso).

Descarga SO:
[Windows 10](https://www.microsoft.com/es-es/software-download/windows10)

Descarga Máquina Virtual: 
[VirtualBox](https://www.virtualbox.org/)

---
## Ejercicio: Windows-Máquina Virtual
<iframe width="560" height="315" src="https://www.youtube.com/embed/upEIXtOcl9g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## ¿Qué es Docker?
Permite crear contenedores ligeros y portables para que las aplicaciones de software puedan ejecutarse en cualquier máquina 
con Docker instalado (independientemente del sistema operativo que la máquina tenga por debajo), facilitando los despliegues.

Dentro del contenedor se alojan todas las dependencias que nuestra aplicación necesite para ser ejecutada: código, 
librerías del sistema, entorno de ejecución o cualquier tipo de configuración. 

---
### MV vs Contenedores
![MV vs Contenedores](images/configSO/virtualizacion-vs-contenedores.png)

---
### MV vs Contenedores... Que elegir?
<!-- .slide: style="font-size: 0.60em" -->
|Máquinas Virtuales|Contenedores|
|------------------|------------|
| Alojar cargas de trabajo tradicionales, monolíticas y heredadas | Diseñar aplicaciones en la nube |
| Aislar ciclos de desarrollo riesgosos | Empaquetar microservicios |
| Implementar recursos de infraestructura (como redes, servidores y datos) | Implantar gradualmente las prácticas de DevOps o CI
| Ejecutar un sistema operativo diferente dentro de otro sistema operativo (por ejemplo, ejecutar Unix en Linux) | Trasladar proyectos de TI escalables con el mismo sistema operativo |

---
## Basic Input/Output System
La BIOS es el software que localiza y reconoce los dispositivos necesarios para cargar el Sistema Operativo en la memoria RAM.

![BIOS](images/configSO/BIOS.jpg)

---
## Basic Input/Output System
Es el encargado de gestionar el hardware y permite gestionar el arranque, es decir, seleccionar desde qué dispositivo debería leer el SO.

También Puede controlar la frecuencia de la RAM, de la tarjeta gráfica, las revoluciones de los ventiladores, periféricos, etc.

---
## Basic Input/Output System
Está integrado en un chip en la placa madre, y el firmware puede ser actualizado y grabado en la memoria flash que posee integrada.

Sólo puede ser modificado por una actualización del fabricante,. Su memoria es de solo lectura.

---
## Basic Input/Output System
Una vez que el BIOS comprueba que los componentes de la computadora funcionan correctamente, le pasa el control del hardware al sistema operativo.

---
## Basic Input/Output System
![BIOS](images/configSO/Bios2.jpg)

---
## Basic Input/Output System
![BIOS](images/configSO/bios2_phoenix.png)

---
## Basic Input/Output System
![BIOS](images/configSO/Bios1.jpg)

---
## Unified Extensible Firmware Interface
Es una interfaz entre el sistema operativo y el firmware que reemplaza la antigua interfaz del BIOS.
![UEFI](images/configSO/uefi.png)

---
## Unified Extensible Firmware Interface
![UEFI](images/configSO/uefi.jpg)

---
## UEFI: Mejoras
* La interfaz permite usar el mouse, e incluye sonidos y animaciones.
* El SO carga más rápido, a la velocidad del SSD (Disco Estado Sólido)
* Compatible con sistemas de archivos GTP (Guid Partition Table). Discos de 9.4 Zetabytes. 128 particiones.
* Compatibilidad nativa con 64bits
* Mayor seguridad durante el inicio (evita bootkits, virus que se ejecutan antes de que Windows inicie)

---
![Historieta](images/configSO/commitStrip-bios.jpg)

---
## Ejercicio: BIOS o UEFI
Entre a la sección del “BOOT Loader” dentro de la BIOS y ordene adecuadamente los dispositivos de arranque del sistema. (F1, F2, Del)

---
## Formateado de Discos
**Formatear** un disco duro consiste en restablecer a este a su estado original para ser reutilizado o reescrito con una nueva información.
        
Al realizar esta operación se elimina toda la información contenida en el.

---
## Formateado de Discos (lógico)
* **Windows:** ExFAT, FAT, FAT16, FAT32, NTFS, EFS.
* **Linux:** ext2, ext3, ext4, JFS, ReiserFS, Reiser4, XFS.
* **Solaris:** UFS, ZFS.
* **Mac OS:** HFS, HFS+.
* **IBM:** JFS, GPFS. 
* **Discos Ópticos:** UDF.

---
### Comparación
<!-- .slide: style="font-size: 0.60em" -->
| | NTFS | FAT32 | ExFAT |
|-|------|-------|-------|
| Utilización | Discos duros interno con Windows | Discos que requieran compatibilidad con varios SO | Unidades flash|
| Ventajas | Permite copias de seguridad | Amplia compatibilidad con varios SO | Sistema de archivos livianos - Compatible con Windows, Mac, Linux |
| Desventajas | Incompatibilidad con SO antiguos | No permite archivos de más de 4GB - No permite parciciones de más de 4 TB| Sin funciones de seguridad |

---
## IMPORTANTE!!!
<!-- .slide: data-background="images/herramientas/Busydesk-desarrollo.png" -->
Recuerda **ANTES** de formatear hacer backup de tus datos, así evitas perder información.


---
## [Qué es Rufus?](https://rufus.ie/)
<!-- .slide: style="font-size: 0.80em" -->
Rufus es una utilidad que le ayuda a formatear y crear soportes USB de arranque, como pendrives, tarjetas de memoria, etc.

Es especialmente útil en casos donde:
* necesite crear medios de instalación USB a partir de ISOs arrancables (Windows, Linux, UEFI, etc.)
* necesite trabajar en un equipo que no tenga un sistema operativo instalado
* necesite actualizar el firmware o BIOS de un ordenador desde DOS
* quiera ejecutar una utilidad de bajo nivel

---
## [Qué es Rufus?](https://rufus.ie/)
![Rufus](images/configSO/rufus_en_2x.png)

---
## MBR vs GPT
#### Master Boot Table vs GUI Partition Table
| MBR | GTP |
|-----|-----|
| Compatible con todos los SO | Compatible con SO de 64 bits |
| Maneja discos de hasta 2TB | Maneja discos hasta 256TB |
| Admite hasta 4 particiones primarias | Admite hasta 128 particiones primarias. No existen las particiones lógicas |

---
## Ejercicio: Rufus
Crear un pen drive autobooteable de Windows 10 empleado Rufus.

---
## Ejercicio: Rufus
<iframe width="560" height="315" src="https://www.youtube.com/embed/8DAoywHszD8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
## Particionado de Discos
Una **partición** es la división de espacio que se le asigna a un disco duro.

Un disco duro puede tener varias particiones, que son de cierto modo independientes entre si, dado que cada una de ellas tiene su propio sistema de archivos o formato, y el SO lo reconoce como un disco independiente (aunque físicamente sea uno).

Se puede formatear una partición sin necesidad de formatear todo el disco.

---
## Tipos de Particiones
<!-- .slide: style="font-size: 0.80em" -->
**Partición Primaria:** Se encarga de iniciar la carga del SO

**Partición Extendida o Secundaria:** Almacenan información

![Particiones](images/configSO/partitions.png)

---
### ¿Qué formato tienen en sus discos? ¿Su disco esta particionado?
Equipo > Administrar > Almacenamiento > Administración de Discos

---
## Pasos de Instalación de un SO
1. Cofiguración de dispositivo de arranque en la BIOS
2. Formateo de Discos
3. Particionado de discos
4. Creación de sistema de ficheros
5. Configuración de la red, dispositivos, pantalla, idioma, usuarios, etc.

---
## ¿Dudas, Preguntas, Comentarios?
![DUDAS](images/pregunta.gif)

---
## Preguntas Frecuentes
* En el exámen habrá preguntas del tipo: "Qué microprocesador tenia Win95"?

Toda la información relativa a las características puntuales de cada SO: año, procesador, ram, disco duro, video NO son preguntas de examen.
