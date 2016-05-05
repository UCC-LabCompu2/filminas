function numAleatorio(a,b) {
    document.prueba1.textoP.value = Math.round(Math.random()*(b-a)+parseInt(a));
}

function cambioUnidades(valor,unidad) {
    if(unidad=="metro"){
        document.lasUnidades.pulgada.value = valor*39.3701;
        document.lasUnidades.pie.value = valor*3.28084;
        document.lasUnidades.yarda.value = valor*1.09361;
    }
    else if(unidad=="pulgada"){
        document.lasUnidades.metro.value = valor*0.0254;
        document.lasUnidades.pie.value = valor*0.08333;
        document.lasUnidades.yarda.value = valor*0.027778;
    }
    else if(unidad=="pie"){
        document.lasUnidades.metro.value = valor*0.3048;
        document.lasUnidades.pulgada.value = valor*12;
        document.lasUnidades.yarda.value = valor*0.333333;
    }
    else if(unidad=="yarda"){
        document.lasUnidades.metro.value = valor*0.9144;
        document.lasUnidades.pulgada.value = valor*36;
        document.lasUnidades.pie.value = valor*3;
    }
    else{
        alert("Se ingreso un valor invalido en "+unidad);
    }
}

function seMuestra(nombre) {
    if(nombre=="Vinicial" || nombre=="Vfinal"){
        document.getElementById('variasCosas1').style.display = 'block';
    }
    else if(nombre=="Dinicial" || nombre=="Dfinal"){
        document.getElementById('variasCosas2').style.display = 'block';
    }
}

function sumaN() {
    num1=document.getElementById("num1").value;
    alert(num1);
    num2=document.getElementById("num2").value;
    alert(num2);
    document.getElementById("resultado").value=Number(num1) + Number(num2);
}

