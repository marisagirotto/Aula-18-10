function tocaSomGrilo() {

    document.querySelector("#som_tecla_grilo").play();    
}

document.querySelector(".tecla_grilo").onclick = tocaSomGrilo;

const listaDeTeclas = document.querySelectorAll(".tecla");
listaDeTeclas[4].onclick = tocaSomGrolo;
