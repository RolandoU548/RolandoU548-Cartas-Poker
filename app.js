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
        let carta = {
            valor : valor,
            pinta : pinta,
        }
        todasCartas.push(carta)
    }
}

function inputLleno(){
    const entrada = document.querySelector("#input");
    const boton = document.querySelector(".divConBotones");
    if (entrada.value != ''){
        cantidadCartas = entrada.value;
        boton.style.display= "flex";
        setInterval(añadirCarta, 10 * 1000)
        añadirCarta();
    }
}

function añadirCarta (){
    const contenedorPrincipal = document.querySelector(".container");
    const fragmento = document.createDocumentFragment();

    const cartas = obtenerCartasAleatorias(todasCartas, cantidadCartas)

    for (let carta of cartas){
        fragmento.appendChild(crearCarta(carta.valor, carta.pinta));
    }

    let boton = contenedorPrincipal.lastElementChild;
    contenedorPrincipal.innerHTML = "";
    contenedorPrincipal.appendChild(fragmento);
    contenedorPrincipal.appendChild(boton);
    
    const cartasFocus = document.querySelectorAll(".carta");
    for (const cartaFocus of cartasFocus){
        cartaFocus.addEventListener("click", añadirFocus);
    }
}

function crearCarta(valor, pinta){
    let carta = document.createElement("div");
    carta.innerHTML = valor;
    carta.classList.add("carta");
    carta.classList.add(pinta);
    return carta;
}

function obtenerCartasAleatorias(array, cantidad) {
    let copiaArray = array.slice();
    let cartasSeleccionadas = [];

    for (let i = 0; i < cantidad; i++) {
        let indiceAleatorio = Math.floor(Math.random() * copiaArray.length);
        let carta = copiaArray.splice(indiceAleatorio, 1)[0];
        cartasSeleccionadas.push(carta);
    }

    return cartasSeleccionadas;
}

function añadirFocus(){
    const cartaFocus = event.target;
    if (cartaFocus.classList.contains("trebol") || cartaFocus.classList.contains("pica")){
        cartaFocus.classList.toggle("focusNegro");
    } else {
        cartaFocus.classList.toggle("focusRojo");
    }
}