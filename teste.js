const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("closePopup");
const popup = document.getElementById("popup");

openPopupButton.addEventListener("click", () => {
    popup.style.display = "block";
});

closePopupButton.addEventListener("click", () => {
    popup.style.display = "none";
});

// Fechar o pop-up se o usuário clicar fora da área do pop-up
window.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
