function agregarElemento() {
    var lista = document.getElementById("miLista");
    var nuevoElemento = document.createElement("li");
    var textoElemento = document.createTextNode("Nuevo Elemento");

    nuevoElemento.appendChild(textoElemento);



    lista.appendChild(nuevoElemento);
}