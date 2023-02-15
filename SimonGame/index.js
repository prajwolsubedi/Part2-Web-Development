let buttonColors = ["red","blue","green","yellow"];
let gamePattern = [];
let userClickedPattern = [];
let randomColor;
let started = false;
let level = 0;
let heading = $("#level-title");

//Reset the values of level, gamePattern and started variables.
function restart(){
    gamePattern = [];
    started = false;
    level = 0;
}


    //function to produce sound
    function playSound(name) {

        // Take the code we used to play sound in the nextSequence() function and add it to playSound().
        let audio = new Audio("sounds/" + name + ".mp3");
        audio.play();
      }


$(document).keydown(function(){
    if(!started){
        nextSequence();
        started = true;
    }
})

function checkAnswer(currLevel){
    if(userClickedPattern[currLevel] === gamePattern[currLevel]){
    console.log("success");

    //If the sequence if finished produce next sequence
    if(userClickedPattern.length === gamePattern.length){
        setTimeout(function(){
            nextSequence();
        },1000)
    }
}
    else {
        $("body").addClass("game-over");
        playSound("wrong");
        $(heading).text("Game Over Press Any Key To Restart.")
        setTimeout(function(){
        $("body").removeClass("game-over");
        },300)
        restart();
    }
}


let allBtn = $(".btn");
allBtn.click(function(){
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});


function animatePress(currentColor){
    let active = $("#" + currentColor);
    active.addClass("pressed");
    setTimeout(function(){
        active.removeClass("pressed");
    },100)
}

function nextSequence(){
    // Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
    userClickedPattern = [];
    level++;
    $(heading).text("Level " + level);
    let n = Math.random();
    let randomNumber = Math.floor(n*4);
    let randomColor = buttonColors[randomNumber];
    gamePattern.push(randomColor);
    let active = $("#"+randomColor);
    $(active).fadeOut(200).fadeIn(200);
    // produceSound(randomColor)
    playSound(randomColor);
}    




