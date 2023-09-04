const abrirBtn = document.getElementById("abrirBtn");
const fecharBtn = document.getElementById("fecharBtn");
const minhaCarta = document.getElementById("minhaCarta");

abrirBtn.addEventListener("click", function () {
    console.log("Botão 'Abrir Carta' clicado."); 
    minhaCarta.style.display = "block";
    abrirBtn.style.display = "none";
    fecharBtn.style.display = "block";
});

fecharBtn.addEventListener("click", function () {
    minhaCarta.style.display = "none";
    abrirBtn.style.display = "block";
    fecharBtn.style.display = "none";
});


