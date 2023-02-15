//Okay so now let's first boil down the problems into smaller parts.
// function pressedAnimation(element){
//     element.addClass("pressed");
//     setTimeout(function(){
//         element.removeClass("pressed"),1000
//     })
// }

let level = 1;
let array = [];
let heading = $("#level-title");
let activeColor;

$(document).keypress(function(){


    $(heading).text("Level " + level);

    // 1 -> Generate color code
    function generateColor(){
        let n = Math.random();
        let random = Math.floor(n*4) + 1;

        //Generate color name
        switch(random){
            case 1:
                activeColor = "green";
                break;
            case 2:
                activeColor = "red";
                break;
            case 3:
                activeColor = "yellow";
                break;
            case 4:
                activeColor = "blue";
                break;
            default:
                break;
        }
        produceSound(activeColor);
        let hint = $("." + activeColor);
        $(hint).addClass("hide");
        setTimeout(function(){
            hint.removeClass("hide"),2000
        });
    }

    //Working upto here

    //function to restart the game
    function restartGame(){
        n = Math.random();
        random = Math.floor(n*4) + 1;
        level = 1;
        array = [];
        $(heading).text("Level " + level);
    }


    // 2 -> Start the game by generating color
    generateColor();



    //function to produce sound
    function produceSound(activeColor){
        let audio = new Audio();
        switch(activeColor){
            case "green":
                audio.src = "sounds/green.mp3";
                audio.play();
                break;

            case "red":
                audio.src = "sounds/red.mp3";
                audio.play();
                break;

            case "yellow":
                audio.src = "sounds/yellow.mp3";
                audio.play();
                break;

            case "blue":
                audio.src = "sounds/blue.mp3";
                audio.play();
                break;
        
            default:
                audio.src = "sounds/wrong.mp3";
                audio.play();
                break;
            }
        
    }

    function right(){
            //Produce sound
            produceSound(activeColor);

            //animation
            let active = $("."+activeColor);
            $(active).addClass("pressed");
            setTimeout(function(){
                $(active).removeClass("pressed"),2000
            })

            //Change text content
            level++;
            $(heading).text("Level " + level);

            //push the color to array
            array.push(activeColor);

            //Generate next color
            setTimeout(function(){
                generateColor();
            },2000)

    }

    function wrong(){
            //produce sound
            produceSound("wrong");

            //animation
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");
            },5000)

            //change text content
            $("heading").text("Game Over, Press Any Key to Restart");

            //Restart
            restartGame();
    }

    //Remembering each previous color and comparing it with the input color
    // array.push(activeColor);

    //check the users value with the activeColor value;

        $(".btn").click(function(e){
            let check = e.currentTarget;

            let foundAll = 1;
            let i=0;
            while(i<array.length){
                if($(check).hasClass(array[i])){
                produceSound(array[i]);
                let hint = $("." + array[i]);
                $(hint).addClass("pressed");
                setTimeout(function(){
                    hint.removeClass("pressed"),1000
                });
                i++;
            }
                else{
                    foundAll = 0;
                    break;
                }
            }

            //If matched next level
            if(foundAll){

            if($(check).hasClass(activeColor)){
            right();
            }

            //If not matched game is over
            else{
                wrong();
            }
        }

        if(!foundAll){
            wrong();
        }
    })

})


