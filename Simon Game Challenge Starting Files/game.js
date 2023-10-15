var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red","blue","green","yellow"];
var level = 0;
var started = false;

function nextSequence() {
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $(`#`+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound("sounds/"+randomChosenColour + ".mp3")
    level += 1;
    $("h1").text(`Level ${level}`);
}

$(".btn").on("click",function(){
    var userChocenColour = $(this).attr("id");
    userClickedPattern.push(userChocenColour);
    playSound("sounds/"+userChocenColour+ ".mp3");
    animatePress(userChocenColour);
    checkAnswer(userClickedPattern.length-1);
});

function playSound(name){
    var audio = new Audio(name);
    audio.play();
} 

function animatePress(currentColour){
    $(`#${currentColour}`).addClass("pressed");
    setTimeout(function(){
        $(`#${currentColour}`).removeClass("pressed");
    },100);
}

$(document).keypress(function(){
    if (started===false){
        nextSequence();
        started = true;
    }
});

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if(gamePattern.length===userClickedPattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        var wrongAudio = new Audio("sounds/wrong.mp3");
        wrongAudio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}