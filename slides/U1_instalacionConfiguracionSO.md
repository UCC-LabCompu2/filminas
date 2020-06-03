---
title: Instalación y Configuración de Sistemas Operativos
theme: black
slideNumber: true
---

# Sistemas Operativos
<small>
Created by <i class="fab fa-telegram"></i>
[edme88]("https://t.me/edme88") & 
<i class="fab fa-telegram"></i>
[rmarku]("https://t.me/rmarku")
</small>

---
## Sistema Operativo
    
Es un programa que administra el Hardware de una computadora. 
Proporciona las bases para los programas de aplicación y actúa como un intermediario entre el usuario y el hardware.

---
## Sistema Operativo
![SO](images/configSO/SO.png)

---
## SO: Tareas
Las tareas que hace un SO son:
* Realizar el interfaz Sistema-Usuario
* Compartir los recursos de Hardware entre los usuarios
* Permitir a los usuarios comaprtir sus datos entre ellos
* Prevenir que las actividades de un usuario no interfieran en las de los demás usuarios
* Calendarizar los recursos de los usuarios
* Facilitar el acceso a los dispositivos de E/S
* Recuperarse de fallas o errores
* Llevar el control sobre el uso de los recursos

---
##  [Ejemplos de Sistema Operativo](http://gs.statcounter.com/os-market-share)
<!-- .slide: data-background="images/configSO/OtrosOS.png" data-background-size="50%" -->
Para PC:
* Solaris
* Linux
* Windows 7
* Mac OS X
* FreeBSD

Para dispositivos móviles:
* Android
* Windows phone
* iOS
* Blackberry

---
## Criterios para Definir SO
* Tipo de Interfaz
  * Gráfica (GUI)
  * Línea de comandos
* Cantidad de tareas
  * Multitarea
  * Monotarea
* Cliente o Servidor</li>
* Tipo de Licencia
  * Propietario
  * Libre

---
## Recursos de Hardware
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
## Requisitos mínimos de 
## Windows 3.11
* Año: 1990
* Procesador 80386sx o superior (25 MHz)
* 3 MB de ram (se recomienda 4 MB)
* Al menos 6.2 MB de espacio disponible en disco duro (se recomienda 14.5 MB)

---
## Requisitos mínimos de
## Windows NT Server
* Año: 1993
* Procesador de 32 bits basado en intel x86: 80486 a 33 Mhz o superior
* 16 MB de memoria ram
* Al menos 125 MB de espacio disponible en disco duro
* adaptador de pantalla de video con resolución VGA o superior
   
---
## Requisitos mínimos de
## Windows 95
* Año: 1995
* Procesador 386DX 33 MHz o superior
* Mínimo 4 MB de RAM (de preferencia 8 MB)
* Mínimo 55 Mb de espacio disponible en disco duro
* 1 unidad de disco de alta densidad de 3,5 pulgadas
* Resolución VGA o superior (se recomienda SVGA de 256 colores)

---
## Requisitos mínimos de
## Windows 98
* Año: 1998
* Procesador 486DX de 66 MHz o superior
* Mínimo 16 MB de RAM (de preferencia 24 MB)
* 120 a 295 MB de espacio disponible en disco duro
* 1 unidad de disco de alta densidad de 3,5 pulgadas
* Resolución VGA o superior (se recomienda SVGA de 256 colores)
* Internet (MSN, Mensajeria): Modem 14,4 bits por segundo (bps),recomendado 28,8 bits o más rapido

---
## Requisitos mínimos de
## Windows XP
* Año: 2001
* Procesador Pentium 233 MHz o superior (de preferencia de 300 HMz)
* Mínimo 64 MB de RAM (de preferencia 128 MB)
* Mínimo 1,5 GB de espacio disponible en disco duro
* Tarjeta gráfica y monitor de resolución Súper VGA (800x600) o superior
![Windows XP](images/configSO/winXP.png)

---
## Requisitos mínimos de
## Windows 7
* Año: 2007
* Procesador de 32bit o 64bits a 1GHz o más
* 1GB de RAM para 32bits, o 2GB de RAM para 64bits
* 16GB de espacio disponible en disco duro para 32bits, o 20GB para 64bits
* Dispositivo gráfico DirectX9.
![Windows 7](images/configSO/win7.png)

---
## Requisitos mínimos de
## Windows 10
* Año: 2015
* Procesador de 32bit o 64bits a 1GHz o más
* 1GB de RAM para 32bits, o 2GB de RAM para 64bits
* 16GB de espacio disponible en disco duro para 32bits, o 20GB para 64bits
* Dispositivo gráfico DirectX9.
![Windows 10](images/configSO/windows10-logo.png)
<!---https://www.xataka.com/especiales/maquinas-virtuales-que-son-como-funcionan-y-como-utilizarlas-->

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
## IMPORTANTE!!!
<!-- .slide: data-background="images/herramientas/Busydesk-desarrollo.png" -->
Recuerda **ANTES** de formatear hacer backup de tus datos, así evitas perder información.

---
## Particionado de Discos
Una **partición** es la división de espacio que se le asigna a un disco duro.

Un disco duro puede tener varias particiones, que son de cierto modo independientes entre si, dado que cada una de ellas tiene su propio sistema de archivos o formato, y el SO lo reconoce como un disco independiente (aunque físicamente sea uno).

Se puede formatear una partición sin necesidad de formatear todo el disco.

---
## Tipos de Particiones
**Partición Primaria:** Se encarga de iniciar la carga del SO

**Partición Extendida o Secundaria:** Almacenan información

![Particiones](images/configSO/partitions.png)

---
## ¿Dudas, Preguntas, Comentarios?
![DUDAS](images/pregunta.gif)