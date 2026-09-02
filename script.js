let preguntaActual = 0;

let correctas = 0;
let incorrectas = 0;

let tiempoInicio; 
let tiempoFinal;


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

    document.getElementById("numeroPregunta").textContent = 
        "Pregunta " + (preguntaActual + 1) + " de 10";

    let alternativas = generarAlternativas(operacionActual.respuesta);

    document.getElementById("operacion").textContent = 
        operacionActual.numero1 +
        " " +
        operacionActual.signo + 
        " " +
        operacionActual.numero2;

    let botones = document.querySelectorAll("#alternativas button");

    for (let i = 0; i < botones.length; i++) {

        botones[i].textContent = alternativas[i];

        botones[i].onclick = function() {
            responder(alternativas[i]);
        };
    }

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

    if (preguntaActual === 9) {


        tiempoFinal = Date.now();

        let tiempoTotal = (tiempoFinal-tiempoInicio) / 1000;

        document.getElementById("juego").style.display = "none";

        document.getElementById("resultado").style.display = "block";

        console.log("Juego Terminado");
        console.log("Tiempo: ", tiempoTotal, "segundos");

        document.getElementById("resultadoCorrectas").textContent = "Correctas: " + correctas;
        document.getElementById("resultadoIncorrectas").textContent = "Incorrectas: " + incorrectas;
        document.getElementById("resultadoTiempo").textContent = "Tiempo: " + tiempoTotal + " segundos";

    } else {

        preguntaActual++;

        mostrarPregunta();
    }

    
}
tiempoInicio = Date.now();
mostrarPregunta();
