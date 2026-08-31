let preguntaActual = 0;
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
        
        let respuestaSuma = numero1 + numero2;

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

let operaciones = []

for (let i = 0; i < 10; i++) {
    operaciones.push(generarOperacion());
}

function mostrarPregunta() {

    let operacionActual = operaciones[preguntaActual];

    let alternativas = generarAlternativas(operacionActual.respuesta);

    console.log(
    operacionActual.numero1 +
    " " +
    operacionActual.signo + 
    " " +
    operacionActual.numero2
    );

    console.log(alternativas);
}

function generarAlternativas(respuestaCorrecta){

    let alternativas = [];

    alternativas.push(respuestaCorrecta);

    while (alternativas.length < 4) {

        let diferencia = Math.floor(Math.random() * 11) - 5;

        let alternativa = respuestaCorrecta + diferencia;

        if (!alternativas.includes(alternativa)) {
            alternativas.push(alternativa);
        }
    }

    alternativas.sort(() => Math.random() - 0.5);
    
    return alternativas;

}

function responder(respuestaElegida){

    let operacionActual = operaciones[preguntaActual];

    comprobarRespuesta(respuestaElegida, operacionActual.respuesta);

    console.log("Correctas: ", correctas);
    console.log("Incorrectas: ", incorrectas);

    preguntaActual++;

    mostrarPregunta();
}
mostrarPregunta();
responder(9);