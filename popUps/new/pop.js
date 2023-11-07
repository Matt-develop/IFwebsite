const abrirPopup1 = document.getElementById("abrirPopup1");
const abrirPopup2 = document.getElementById("abrirPopup2");
const abrirPopup3 = document.getElementById("abrirPopup3");
const abrirPopup4 = document.getElementById("abrirPopup4");

// Pop-ups correspondentes
const popup1 = document.getElementById("popup1");
const popup2 = document.getElementById("popup2");
const popup3 = document.getElementById("popup3");
const popup4 = document.getElementById("popup4");

// Botões de fechar pop-up
const fecharPopup1 = document.getElementById("fecharPopup1");
const fecharPopup2 = document.getElementById("fecharPopup2");
const fecharPopup3 = document.getElementById("fecharPopup3");
const fecharPopup4 = document.getElementById("fecharPopup4");

// Função para abrir pop-up
function abrirPopUp(popup) {
    popup.style.display = "block";
}

// Função para fechar pop-up
function fecharPopUp(popup) {
    popup.style.display = "none";
}

// Adicionar eventos de clique para abrir e fechar pop-ups
abrirPopup1.addEventListener("click", () => abrirPopUp(popup1));
abrirPopup2.addEventListener("click", () => abrirPopUp(popup2));
abrirPopup3.addEventListener("click", () => abrirPopUp(popup3));
abrirPopup4.addEventListener("click", () => abrirPopUp(popup4));

fecharPopup1.addEventListener("click", () => fecharPopUp(popup1));
fecharPopup2.addEventListener("click", () => fecharPopUp(popup2));
fecharPopup3.addEventListener("click", () => fecharPopUp(popup3));
fecharPopup4.addEventListener("click", () => fecharPopUp(popup4));
