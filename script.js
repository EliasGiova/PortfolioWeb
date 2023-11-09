let menuVisible = false;

function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("java");
        habilidades[1].classList.add("php");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("javascript");
        habilidades[4].classList.add("git");
        habilidades[5].classList.add("mysql");
        habilidades[6].classList.add("jira");
        habilidades[7].classList.add("trello");
        habilidades[8].classList.add("html");
        habilidades[9].classList.add("css");
        habilidades[10].classList.add("comunicacion");
        habilidades[11].classList.add("equipo");
        habilidades[12].classList.add("creatividad");
        habilidades[13].classList.add("dedicacion");
        habilidades[14].classList.add("liderazgo");
        habilidades[15].classList.add("gestion");
        habilidades[16].classList.add("resiliencia");
        habilidades[17].classList.add("entusiasmo");
        habilidades[18].classList.add("simpatia");
        habilidades[19].classList.add("adaptacion");


    }
}
window.onscroll = function () {
    efectoHabilidades()
}

document.getElementById("mostrarCartel").addEventListener("click", function () {
    document.querySelector(".cartel").style.display = "block";
    document.querySelector(".overlay").style.display = "block";
});

document.querySelector(".overlay").addEventListener("click", function () {
    document.querySelector(".cartel").style.display = "none";
    this.style.display = "none";
});

function mostrarCartel() {
    const cartel = document.querySelector(".cartel");
    const overlay = document.querySelector(".overlay");

    cartel.style.display = "block";
    overlay.style.display = "block";

    setTimeout(function () {
        cartel.style.display = "none";
        overlay.style.display = "none";
    }, 4000); 
}

document.getElementById("mostrarCartel").addEventListener("click", mostrarCartel);

document.querySelector(".overlay").addEventListener("click", function () {
    document.querySelector(".cartel").style.display = "none";
    this.style.display = "none";
});
