---
title: Drivers
theme: black
slideNumber: true
---

# Drivers
Created by <i class="fab fa-telegram"></i>
[edme88]("https://t.me/edme88")

---
<!-- .slide: style="font-size: 0.60em" -->
## Temario
<div class="grid-item">

### Driver
* Definición
* Tipos de Drivers
* Actualización
* Descarga
* Requisitos mínimos
</div>

---
## Driver o Controlador de Dispositivo
Es un programa que permite al SO interaccionar con un periférico (impresora, scaner, etc) o dispositivo hardware (tarjeta gráfica, tarjeta de sonido, modem, etc), haciendo una abstracción del mismo y proporcionando una interfaz para poder utilizarlo. <br><br>

Le indica al SO como controlar y comunicarse con un dispositivo particular.

---
![Drivers](images/configSO/drivers.png)

---
## Tipos de Drivers
Existen tantos tipos de controladores como tipos de periféricos.

Puede haber más de un controlador para un mismo dispositivo.

---
## Tipos de Drivers: Ejemplos
* de Audio (Realtek, SoundBlast)
* de Video (ATI, NVIDIA)
* LAN o Ethernet
* Wireless
* Escáners
* Impresoras
* Mouse
* Teclados
* Webcam

---
## Tipos de Drivers
* Fabricantes de dispositivos (quien hace el hardware, provee el driver)
* Genéricos o Universales (funcionan la mayoria de los dispositivos)
* Comunidad de Usuarios

---
## Drivers en Windows
Los drivers críticos (fundamentales, como los de la CPU), están integrados dentro del sistema operativo. 
Estos controladores genéricos no permiten conseguir el máximo rendimiento posible del hardware, 
pero sí un primer arranque con las funciones básicas para que, a partir de ahí, se apliquen los 
controladores específicos para cada componentes de hardware.

---
## Drivers: Actualización
Los fabricantes de hardware suelen actualizar los drivers para otorgar más funcionalidades, 
mejorar el rendimiento o aumentar las medidas de seguridad con la finalidad de corregir errores o 
vulnerabilidades que podrían comprometer el equipo de los usuarios.

---
## Descargar los controladores
* CD del fabricante
* Administrador de dispositivos
* Windows Update
* Descarga manual
* Programas que descargan drivers
* Sitio web del fabricante

---
### Windows
### Administrador de Dispositivos
El usuario puede:
* Comprobar si el funcionamiento de los dispositivos es correcto
* Actualizar el software de controlador o Driver
* Modificar o establecer propiedades a un dispositivo
* Habilitar o deshabilitar dispositivos

---          
![Administrador de Dispositivos](images/configSO/administradorEquipos.gif)

---          
### Administrador de Dispositivos
![Administrador de Dispositivos](images/configSO/admDispositivos2.jpg)

---
### Administrador de Dispositivos
| Simbolo | Definición |
|--------------------------------------------------|------------------------------------------------------------------|
| ![Simbolo1](images/configSO/driver_simbolo1.png) | Ocurrió un problema. Muestra un código de error del dispositivo. |
| ![Simbolo2](images/configSO/driver_simbolo2.png) | El dispositivo está desactivado (está presente físicamente, consume recursos, pero no tiene un controlador cargado en modo protegido. |
| ![Simbolo3](images/configSO/driver_simbolo3.png) | Configuración manual en lugar de automática. |
| ![Simbolo4](images/configSO/driver_simbolo4.png) | El controlador específico del dispositivo no está disponible y se instalo un controlador compatible. |

---
### Linux
### Administrador de Dispositivos
* Los drivers son módulos del ***Kernel***
* Con el comando lsmod
* Desde el visor de hardware del entorno gráfico

---
### HardwareMap
![HardwareMap](images/herramientas/hardwareMap.png)

---
### HardwareMap
Suministra información detallada del Hardware. Se enumeran los equipos y servicios en la red local y hardware conectado. 
Al hacer clic en un dispositivo, muestra las propiedades del dispositivo y permite realizar acciones comunes para ese dispositivo.
Para instalar HardwareMap en Ubuntu karmic.
````
sudo add-apt-repository ppa:ccouzens/ppa
sudo apt-get update
sudo apt-get install hardwaremap
````

---
## ¿Dudas, Preguntas, Comentarios?
![DUDAS](images/pregunta.gif)
