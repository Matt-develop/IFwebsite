const bannerBtn = document.querySelectorAll(".manual-btn");
var radio = document.querySelector('.manual-btn');
var cont = 1;

document.getElementById('radio1').checked = true;

setInterval(function() {
    proximaImg();
}, 5000);

bannerBtn.forEach(button => {

    button.addEventListener("click", () => {
        cont = button.id;
    });

});

function proximaImg() {

    cont++;
    if(cont > 3) {
        cont = 1;
    }

    document.getElementById('radio'+cont).checked = true;
}