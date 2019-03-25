var HTMLiveCodeTemplate = '<!DOCTYPE html>\n\
<html>\n\
	<head>\n\
		<meta charset="utf-8" \/>\n\
		<title>HTMLiveCode<\/title>\n\
		<style type="text\/css">\n\
			\n\
		<\/style>\n\
		<script type="text\/javascript">\n\
			\n\
test = function() {\n\
	function Person(nombre) {\n\
		this.nombre = nombre;\n\
		alert(\'Persona Iniciada\');\n\
		\n\
	    this.saludar = function(){\n\
	  		alert(this.nombre + \' dice Hola!\');\n\
	    };\n\
	}\n\
	\n\
	Person.prototype.nombre = \'Nombre de Persona\';\n\
	var person1 = new Person(\'Juan\');\n\
	var person2 = new Person(\'María\');\n\
	\n\
	alert (\'person1 se llama \' + person1.nombre);\n\
	alert (\'person2 se llama \' + person2.nombre);\n\
	\n\
	person1.saludar();\n\
};\n\
		<\/script>\n\
	<\/head>\n\n\
	<body>\n\
		Test JS\n\
		<button onclick="test()">Test </button>\n\
	<\/body>\n\
<\/html>';