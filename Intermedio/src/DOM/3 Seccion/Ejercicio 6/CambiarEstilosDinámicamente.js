function alternarColor() {
    var colorOriginal = true;
    var div = document.getElementById("miDiv");

    if (colorOriginal) {
        div.style.backgroundColor = "lightgreen";
    } else {
        div.style.backgroundColor = "lightblue";
    }

    colorOriginal = !colorOriginal;
}