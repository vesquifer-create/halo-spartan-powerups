function cambiar(n) {
    let personaje = document.getElementById("personaje");

    if (n == 1) {
        personaje.src = "assets/char-item1.png";
        document.body.style.backgroundColor = "#102542";
    }

    if (n == 2) {
        personaje.src = "assets/char-item2.png";
        document.body.style.backgroundColor = "#1b3c59";
    }

    if (n == 3) {
        personaje.src = "assets/char-item3.png";
        document.body.style.backgroundColor = "#2b2d42";
    }

    if (n == 4) {
        personaje.src = "assets/char-item4.png";
        document.body.style.backgroundColor = "#3a0ca3";
    }
}

function volverMenu() {
    document.getElementById("personaje").src = "assets/char-default.webp";
    document.body.style.background = "#0b1622";
}
