var root = document.querySelector(":root");

// home do site - verde escuro
if(window.location.pathname == "/index.html" || window.location.pathname == "/") {
    root.style.setProperty('--primary', '#008060')
}
// galeria - roxo
if(window.location.pathname == "/galeriaa/galeria.html") {
    root.style.setProperty('--primary', '#a9a1f9')
}
// por que fazer - azul
if(window.location.pathname == "/paginas/pro.html") {
    root.style.setProperty('--primary', '#1073c0')
}