let colors = ["blue", "red", "yellow", "green"];
let gamePattern = [];
let userPattern = [];
let level = 0;
let heading = $("#level-title");
let body = $("body");
let allButton = $(".btn");
let start = 0

function restart(){
    gamePattern = [];
    userPattern = [];
    level = 0;
    start = 0;
}

//When pressed any button start the game but do it only once
if(!start){
    body.keydown(function(){
        heading.text("Level " + level);
        start = 1;
        nextSequence();
    });
}


allButton.click(function(e){
    let userChosenColour = $(this).attr("id");
    userPattern.push(userChosenColour);
    playAnimation(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userPattern.length - 1);
})


function checkAnswer(currLevel){

    if(userPattern[currLevel] === gamePattern[currLevel]){
        console.log("success");
        //Check if all userPattern is already scanned
        if(userPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000)
        }
    }
    else{
        heading.text("Game Over Press any Key to continue again.");
        body.addClass("game-over");
        playSound("wrong");
        setTimeout(function(){
            body.removeClass("game-over");
        },300)
        restart();
    }
    
}

function nextSequence(){
    userPattern = [];
    level++;
    heading.text("Level " + level);
    let x = Math.random();
    let random = Math.floor(x*4);
    let randomColor = colors[random];
    gamePattern.push(randomColor);
    playSound(randomColor);
    playAnimation(randomColor);
    let active = $("#"+randomColor);
    active.fadeOut(100).fadeIn(100);
}

//Play Animation
function playAnimation(active){
    let activeClass = $("." + active);
    activeClass.addClass("pressed");
    setTimeout(function(){
        activeClass.removeClass("pressed");
    },100)
}


//Play Sound
function playSound(name){
    let audio = new Audio;
    audio.src = "sounds/" + name + ".mp3";
    audio.play();
}
