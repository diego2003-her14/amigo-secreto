// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver
var listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    
    if (nombre.trim() !== "") {
        listaAmigos.push(nombre);
        limpiarCampo("amigo");
        mostrarLista();
    } else {
        alert("El nombre no puede estar vacío.");
    }
}

// Función para retornar un amigo de forma aleatoria
function sortearAmigo() {
    let numeroAmigos = listaAmigos.length;

    if (numeroAmigos > 0) {
        let indice = Math.floor(Math.random() * numeroAmigos);
        document.getElementById("resultado").innerText = `Amigo seleccionado: ${listaAmigos[indice]}`;
    } else {
        alert("La lista de amigos está vacía.");
    }
}

// Función para mostrar la lista actualizada de amigos
function mostrarLista() {
    let listaElement = document.getElementById("listaAmigos");
    listaElement.innerText = listaAmigos.join("\n");
}

// Función para limpiar el campo de entrada
function limpiarCampo(campo) {
    document.getElementById(campo).value = "";
}
