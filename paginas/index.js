const depoUnits = document.querySelectorAll('div.depoUnit');
console.log('tacaca');
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
            var video = document.createElement("video");
            
            video.src = "../imagens/depoimentos/video" + mediaNum + ".webm";
            video.width = 320;
            video.height = 240;
            video.autoplay = true;
            video.muted = true;
            video.className = "media" + mediaNum;

            this.appendChild(video);
            videoCreated = true;            
        }
    })
    depo.addEventListener('mouseout', function(){

        if(videoCreated && !$(this).is(":hover")){
        
            console.log('img rodando');

            document.querySelector('.media' + mediaNum).remove();
            var img = document.createElement("img");

            img.src = "../imagens/depoimentos/foto" + mediaNum + ".webp";
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
        var video = document.createElement("video");
        video.src = "../imagens/depoimentos/video" + mediaNum + ".webm";
        video.id = "videolindo";
        video.className = "depoVid";
        video.autoplay = true;
        video.controls = true;
        document.querySelector("body").appendChild(video);
        pop = true;
    }
    else {
        document.getElementById('videolindo').remove();
        pop = false;
    }
})
document.getElementById("depo2").addEventListener('click', function(){

    if(!pop){
        var video = document.createElement("video");
        video.src = "../imagens/depoimentos/video" + mediaNum + ".webm";
        video.id = "videolindo";
        video.className = "depoVid";
        video.autoplay = true;
        video.controls = true;
        document.querySelector("body").appendChild(video);
        pop = true;
    }
    else {
        document.getElementById('videolindo').remove();
        pop = false;
    }
})
document.getElementById("depo3").addEventListener('click', function(){

    if(!pop){
        var video = document.createElement("video");
        video.src = "../imagens/depoimentos/video" + mediaNum + ".webm";
        video.id = "videolindo";
        video.className = "depoVid";
        video.autoplay = true;
        video.controls = true;
        document.querySelector("body").appendChild(video);
        pop = true;
    }
    else {
        document.getElementById('videolindo').remove();
        pop = false;
    }
})
document.getElementById("depo4").addEventListener('click', function(){

    if(!pop){
        var video = document.createElement("video");
        video.src = "../imagens/depoimentos/video" + mediaNum + ".webm";
        video.id = "videolindo";
        video.className = "depoVid";
        video.autoplay = true;
        video.controls = true;
        document.querySelector("body").appendChild(video);
        pop = true;
    }
    else {
        document.getElementById('videolindo').remove();
        pop = false;
    }
})
