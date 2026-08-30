let preguntaActual = 1;
let correctas = 0;
let incorrectas = 0;

function comprobarRespuesta(respuestaElegida, respuestaCorrecta) {
    
    if (respuestaElegida === respuestaCorrecta) {
        
        correctas += 1;
        
    } else {
        incorrectas += 1;
    }
}

function generarNumero(){
    return Math.floor(Math.random() * 99) + 1;
}


function signos(){
    return Math.floor(Math.random() * 2);
}

function generarOperacion() {
    
    let numero1 = generarNumero();
    let numero2 = generarNumero();

    let signoOperacion = signos();

    if (signoOperacion === 0) {
        
        let = respuestaSuma = numero1 + numero2;

        return {
            numero1: numero1,
            numero2: numero2,
            signo: "+",
            respuesta: respuestaSuma
        };

    } else {
        if (numero1 < numero2) {
            let numeroTemporal = numero1;
            numero1 = numero2;
            numero2 = numeroTemporal;
        }
        let respuestaResta = numero1 - numero2;

        return {
            numero1: numero1,
            numero2: numero2,
            signo: "-",
            respuesta: respuestaResta
        };
    } 
}