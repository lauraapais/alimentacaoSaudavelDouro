//levels
var alimentosSazonais = document.getElementById("alimentosSazonais");
var alimentosRegionais = document.getElementById("alimentosRegionais");
var rodadosAlimentos = document.getElementById("rodadosAlimentos");
var alimentacaoEquilibrada = document.getElementById("alimentacaoEquilibrada");

alimentosSazonais.addEventListener("click", function () {
    window.location.href = "nivel1.html";
});
alimentosRegionais.addEventListener("click", function () {
    window.location.href = "nivel2.html";
});
rodadosAlimentos.addEventListener("click", function () {
    window.location.href = "nivel3.html";
});
alimentacaoEquilibrada.addEventListener("click", function () {
    window.location.href = "nivel4.html";
});


