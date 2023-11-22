var root = document.querySelector(":root");

if(window.location.pathname == "/index.html") {
    root.style.setProperty('--primary', '#1073c0')
}
else if(window.location.pathname == "/galeriaa/galeria.html") {
    root.style.setProperty('--primary', '#a9a1f9')
}

console.log(window.location.pathname)