const depoUnits = document.querySelectorAll('div.depoUnit');
let videoCreated = false;
let mediaNum;
let pop = false;
var doga = "cooperfeito";

depoUnits.forEach(depo => {
    depo.addEventListener('mouseover', function(){

        switch(this.id) {
            case "depo1":
                mediaNum = 1;
                break;
            case "depo2":
                mediaNum = 2;
                break;
            case "depo3":
                mediaNum = 3;
                break;
            case "depo4":
                mediaNum = 4;
                break;
        }

        if(!videoCreated){

            console.log('video rodando');

            document.querySelector('.media' + mediaNum).remove();
            var img = document.createElement("img");
            
            img.src = "./video.gif";
            img.width = 320;
            img.height = 240;
            img.autoplay = true;
            img.muted = true;
            img.className = "media" + mediaNum;

            this.appendChild(img);
            videoCreated = true;            
        }
    })
    depo.addEventListener('mouseout', function(){

        if(videoCreated && !$(this).is(":hover")){
        
            console.log('img rodando');

            document.querySelector('.media' + mediaNum).remove();
            var img = document.createElement("img");

            img.src = "./foto.png";
            img.width = 320;
            img.height = 240;
            img.className = "media" + mediaNum;
                
            this.appendChild(img);
            videoCreated = false

        }
    })
})

document.getElementById("depo1").addEventListener('click', function(){

    if(!pop){
        var img = document.createElement("img");
        img.src = "./video.gif";
        img.id = "videolindo";
        img.className = "depoVid";
        document.querySelector("body").appendChild(img);
        pop = true;
    }
    else {
        document.getElementById('videolindo').remove();
        pop = false;
    }
})
document.getElementById("depo2").addEventListener('click', function(){

    if(!pop){
        var img = document.createElement("img");
        img.src = "./video.gif";
        img.id = "videolindo";
        img.className = "depoVid";
        document.querySelector("body").appendChild(img);
        pop = true;
    }
    else {
        document.getElementById('videolindo').remove();
        pop = false;
    }
})
document.getElementById("depo3").addEventListener('click', function(){

    if(!pop){
        var img = document.createElement("img");
        img.src = "./video.gif";
        img.id = "videolindo";
        img.className = "depoVid";
        document.querySelector("body").appendChild(img);
        pop = true;
    }
    else {
        document.getElementById('videolindo').remove();
        pop = false;
    }
})
document.getElementById("depo4").addEventListener('click', function(){

    if(!pop){
        var img = document.createElement("img");
        img.src = "./video.gif";
        img.id = "videolindo";
        img.className = "depoVid";
        document.querySelector("body").appendChild(img);
        pop = true;
    }
    else {
        document.getElementById('videolindo').remove();
        pop = false;
    }
})
