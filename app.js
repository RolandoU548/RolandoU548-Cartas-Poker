window.onload = () => {
    const entrada = document.querySelector("#input");
    const boton = document.querySelector("#boton");
    entrada.addEventListener("blur", inputLleno);
    boton.addEventListener("click", añadirCarta);
}

var cantidadCartas;
const pintasCarta = ["diamante", "corazon", "pica", "trebol"];
const valoresCarta = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
var todasCartas = [];

for (let pinta of pintasCarta){
    for (let valor of valoresCarta){
        
    }
}


function inputLleno(){
    const entrada = document.querySelector("#input");
    const boton = document.querySelector(".divConBotones");
    cantidadCartas = entrada.value;
    if (entrada.value != ''){
        entrada.style.display= "none";
        boton.style.display= "flex";
        añadirCarta();
    }
}

function añadirCarta (){
    const contenedorPrincipal = document.querySelector(".container");
    const fragmento = document.createDocumentFragment();

    for (let i = 0; i <cantidadCartas; i++){
        fragmento.appendChild(crearCarta(generarValor(), generarpinta()));
    }

    let boton = contenedorPrincipal.lastElementChild;
    contenedorPrincipal.innerHTML = "";
    contenedorPrincipal.appendChild(fragmento);
    contenedorPrincipal.appendChild(boton);
}

function generarpinta() {
    let pintasCarta = ["diamante", "corazon", "pica", "trebol"];
    let pintaAleatoria = Math.floor(Math.random() * pintasCarta.length);
    return pintasCarta[pintaAleatoria];
}

function generarValor() {
    let valoresCarta = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    let valorAleatorio = Math.floor(Math.random() * valoresCarta.length);
    return valoresCarta[valorAleatorio];
}

function crearCarta(valor, pinta){
    carta = document.createElement("div");
    carta.innerHTML = valor;
    carta.classList.add("carta");
    carta.classList.add(pinta);
    carta.setAttribute("tabIndex", 1);
    return carta;
}

function obtenerCartasAleatorias(array, elementos) {
    var copiaArray = array.slice();
    var elementosSeleccionados = [];

    for (var i = 0; i < elementos; i++) {
        var indiceAleatorio = Math.floor(Math.random() * copiaArray.length);
        var elemento = copiaArray.splice(indiceAleatorio, 1)[0]; // Extrae el elemento correspondiente al índice aleatorio de la copia del array
        elementosSeleccionados.push(elemento);
    }

    return elementosSeleccionados;
}