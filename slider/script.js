const bannerBtn = document.querySelectorAll(".manual-btn");
var radio = document.querySelector('.manual-btn');
var cont = 1;
let timer;

document.getElementById('radio1').checked = true;

setInterval(verif, 1000);

bannerBtn.forEach(button => {

    button.addEventListener("click", () => {
        clearInterval(timer);
        timer = null;
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

function verif() {
    if(timer == null) {

        timer = setInterval(function() {
            proximaImg();
        }, 5000);
    }    
}