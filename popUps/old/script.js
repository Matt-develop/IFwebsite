$('a[href^="#modal"]').on('click', function() {

    var id = $(this).attr('href').replace("#", "");
    var alvo = document.getElementById(id);
    
    var popUp = new bootstrap.Modal(alvo);

    popUp.show();

    return false;
})

// Testes de Navegacao por Botoes de Header

const navegacao = document.querySelector(".navegacao");
const altNavegacao = navegacao.offsetHeight;

document.documentElement.style.setProperty(
    "--scroll-padding",
    altNavegacao + "px"
);