function numAleatorio(a, b) {
  document.prueba1.textoP.value = Math.round(Math.random() * (b - a) + parseInt(a));
}

function cambioUnidades(valor, unidad) {
  if(isNaN(valor)){
    alert("Se ingreso un valor invalido en " + unidad);
    document.lasUnidades.yarda.value = "";
    document.lasUnidades.metro.value = "";
    document.lasUnidades.pulgada.value = "";
    document.lasUnidades.pie.value = "";
  }
  else if (unidad == "metro") {
    document.lasUnidades.pulgada.value = valor * 39.3701;
    document.lasUnidades.pie.value = valor * 3.28084;
    document.lasUnidades.yarda.value = valor * 1.09361;
  }
  else if (unidad == "pulgada") {
    document.lasUnidades.metro.value = valor * 0.0254;
    document.lasUnidades.pie.value = valor * 0.08333;
    document.lasUnidades.yarda.value = valor * 0.027778;
  }
  else if (unidad == "pie") {
    document.lasUnidades.metro.value = valor * 0.3048;
    document.lasUnidades.pulgada.value = valor * 12;
    document.lasUnidades.yarda.value = valor * 0.333333;
  }
  else if (unidad == "yarda") {
    document.lasUnidades.metro.value = valor * 0.9144;
    document.lasUnidades.pulgada.value = valor * 36;
    document.lasUnidades.pie.value = valor * 3;
  }
}

function seMuestra(nombre) {
  if (nombre == "Vinicial" || nombre == "Vfinal") {
    document.getElementById('variasCosas1').style.display = 'block';
  }
  else if (nombre == "NingunaV") {
    document.getElementById('variasCosas1').style.display = 'none';
  }
  else if (nombre == "Dinicial" || nombre == "Dfinal") {
    document.getElementById('variasCosas2').style.display = 'block';
  }
}

function sumaN() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var resultado = Number(num1) + Number(num2);
  document.getElementById("resultado").value = resultado;
}

function potenciaN() {
  var numP = document.getElementById("num3").value;
  numP = Math.pow(numP,3);
  alert("El cubo del numero ingresado es "+numP);
}

function raizN() {
  var numP = document.getElementById("num3").value;
  numP = Math.pow(numP,1/3);
  alert("La raiz cubica del numero ingresado es "+numP);
}

function senN() {
  var senNum = document.getElementById("num4").value;
  //Math.sin(x) donde x en radianes
  var valorSen = Math.sin(senNum*Math.PI/180);
  alert("El seno de "+ senNum +" = "+ Math.round(valorSen*100)/100);
}

function dibujo() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#000";

  //fillRect(x, y, width, height)
  ctx.fillRect (10, 15, 20, 25);

  ctx.beginPath();
  ctx.moveTo(75,50);
  ctx.lineTo(100,75);
  ctx.lineTo(100,25);
  ctx.fill();
}

function dibujo2() {
  var canvas = document.getElementById("canvas2");
  var ctx = canvas.getContext("2d");

  //Dibuja lineas horizontales
  for(var i=0; i<300;){
    ctx.moveTo(0,i);
    ctx.lineTo(600,i);
    ctx.strokeStyle = "#D8D8D8";
    ctx.stroke();
    i=i+20;
  }

  //Dibuja lineas verticales
  for(var i=0; i<600;){
    ctx.moveTo(i,0);
    ctx.lineTo(i,600);
    ctx.strokeStyle = "#D8D8D8";
    ctx.stroke();
    i=i+20;
  }

  //Eje X
  ctx.beginPath();
  ctx.moveTo(600,160);
  ctx.lineTo(0,160);
  ctx.strokeStyle = "#FA5858";
  ctx.stroke();

  //Eje Y
  ctx.beginPath();
  ctx.moveTo(300,0);
  ctx.lineTo(300,300);
  ctx.strokeStyle = "#FA5858";
  ctx.stroke();
}

function dibujoParabola() {
  var canvas = document.getElementById("canvas3");
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  //ctx.arc(X, Y, radio, angulo inicial, angulo final);
  ctx.arc(300, 250, 200, 1* Math.PI, 2 * Math.PI);
  ctx.stroke();
}

function dibujoArcT() {
  var c = document.getElementById("canvas4");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(20, 120);
  ctx.lineTo(100, 40);
  ctx.arcTo(130, 10, 150, 40, 20);
  ctx.lineTo(220, 120);
  ctx.stroke();
}

function dibujoArcT() {
  var c = document.getElementById("canvas4");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(20, 120);
  ctx.lineTo(100, 40);
  ctx.arcTo(130, 10, 150, 40, 20);
  ctx.lineTo(220, 120);
  ctx.stroke();
}

function calculoFun(numDist, numAng, longi, angul) {

  if(isNaN(numDist) || isNaN(numAng)){
    alert("Los valores ingresados no son numeros");
  }
  else{
      if(longi=="pulgadas")
          numDist=convertMetros(numDist);

      if(angul=="radianes")
          numAng=convertGrados(numAng);

      document.getElementById("distR").value=numDist;
      document.getElementById("angR").value=numAng;
      document.getElementById("result").value=numDist*Math.sin(numAng*Math.PI/180);
  }
}

function convertMetros(distPulgadas) {
    var enMetros=distPulgadas*0.0254;
    enMetros=Math.round(enMetros*10000)/10000;
  return enMetros;
}

function convertGrados(radianes) {
  var enGrados=radianes*180/Math.PI;
  enGrados=Math.round(enGrados*10000)/10000;
  return enGrados;
}