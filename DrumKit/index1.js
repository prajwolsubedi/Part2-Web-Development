
const playSound = document.querySelectorAll(".drum");
const drumCount = playSound.length;
let audio = new Audio();
//1. Detecting mouse press
    for(let i=0; i<drumCount; i++){
        playSound[i].addEventListener('click',function(){
            let buttonInnerHTML = this.innerHTML;
            makeSound(buttonInnerHTML);
            showAnimation(buttonInnerHTML);
        });
    }

//2.Detecting key press
    document.addEventListener('keydown', function(e){
        makeSound(e.key);
        showAnimation(e.key);
    })

//Add sound
function makeSound(activeBtn){
    switch(activeBtn){
        case "w" : 
            audio.src = "sounds/tom-1.mp3";
            audio.play();
            break;
        case "a" : 
            audio.src = "sounds/tom-2.mp3";
            audio.play();
            break;
        case "s" : 
            audio.src = "sounds/tom-3.mp3";
            audio.play(); 
            break;     
        case "d" : 
            audio.src = "sounds/tom-4.mp3";
            audio.play();
            break;
        case "j" : 
            audio.src = "sounds/snare.mp3";
            audio.play();
            break;
        case "k" : 
            audio.src = "sounds/crash.mp3";
            audio.play();
            break;
        case "l" : 
            audio.src = "sounds/kick-bass.mp3";
            audio.play();
            break;
        default:
        break;
    }
}

//Add animation
function showAnimation(key){
    let activeBtn = document.querySelector("." + key);
    activeBtn.classList.add("pressed");
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    },100)
}