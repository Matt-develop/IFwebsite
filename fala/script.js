var aux;
document.onselectionchange = function() {
    var selObj = window.getSelection();
    var selRange = selObj.toString();
    console.log(selRange);
    aux=selRange;
    document.querySelector('.selection').innerHTML = selRange;
}

$(".selection").draggable({
    cursor: "crosshair"
});

const synth = window.speechSynthesis;

function teste()
{   
    if(aux==undefined)
    {
            aux = "Nenhum texto foi selecionado, por favor selecione um texto para ser lido";
    
            if(textopraserlido!=undefined)
            {
                aux=textopraserlido;
            }
    } 

    let t = aux;
    let voices = synth.getVoices();

    if(voices.length !== 0)
    {
        let msg= new SpeechSynthesisUtterance();
        msg.voice=voices[0];
        msg.rate=1;
        msg.pitch=1;
        msg.text=t;
        msg.lang= "pt-BR"
        synth.speak(msg);
        textopraserlido=undefined;
    }
    
}