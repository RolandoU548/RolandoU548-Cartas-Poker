function obtenerElementosAleatorios(array, elementos) {
    var copiaArray = array.slice(); // Copia el array original
    var elementosSeleccionados = [];

    for (var i = 0; i < elementos; i++) {
        var indiceAleatorio = Math.floor(Math.random() * copiaArray.length); // Genera un índice aleatorio basado en la longitud actual de la copia del array
        var elemento = copiaArray.splice(indiceAleatorio, 1)[0]; // Extrae el elemento correspondiente al índice aleatorio de la copia del array
        elementosSeleccionados.push(elemento); // Agrega el elemento seleccionado a la lista de elementos seleccionados
    }

    return elementosSeleccionados;
}

console.log(obtenerElementosAleatorios(["Jose", "Maria", "Jaime", "Carlota"], 4));