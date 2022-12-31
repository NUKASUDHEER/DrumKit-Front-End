
drum = document.getElementsByClassName("drum")
for(let i = 0;i<drum.length;i++){
    let exp = drum[i].innerHTML
    drum[i].addEventListener("click",()=>{
        selectOperation(exp);
        // console.log(exp)
    })
}

document.querySelector(".btn").addEventListener("click",()=>{
    window.location.reload();
})

document.addEventListener("keypress",(event)=>{
    let exp = this.event.key
    selectOperation(exp)
})

function selectOperation(exp){
    switch(exp){
        case 'a':
            document.getElementById("idAudio").src = "./sounds/wood block.wav"
            var audio = new Audio('./sounds/wood block.wav');
            audio.play();
            break;
        case 's':
            document.getElementById("idAudio").src = "./sounds/BassDrum.wav"
            var audio = new Audio('./sounds/BassDrum.wav');
            audio.play();
            break;
        case 'd':
            document.getElementById("idAudio").src = "./sounds/CrashCymbal.wav"
            var audio = new Audio('./sounds/CrashCymbal.wav');
            audio.play();
            break;
        case 'f':
            document.getElementById("idAudio").src = "./sounds/flute.wav"
            var audio = new Audio('./sounds/flute.wav');
            audio.play();
            break;
        case 'j':
            document.getElementById("idAudio").src = "./sounds/gitar.wav"
            var audio = new Audio('./sounds/gitar.wav');
            audio.play();
            break;
        case 'k':
            document.getElementById("idAudio").src = "./sounds/music.wav"
            var audio = new Audio('./sounds/music.wav');
            audio.play();
            break;
        case 'l':;
            document.getElementById("idAudio").src = "./sounds/timbale.wav"
            var audio = new Audio('./sounds/timbale.wav');
            audio.play();
            break;
        default:
            // alert("invalid key")
            break;
    }
}

