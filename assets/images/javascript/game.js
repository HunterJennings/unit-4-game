//images numbers need to stay the same, they need to be outputed onto the html file so that you can see and keep track of your score/wins/losses after wins/or lose needs to reset

//var I will be using threwout the game
var wins = 0;
var losses = 0;
var targetNumber = Math.floor(Math.random() * 101) + 19;
var counter = 0;
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var counterText = document.getElementById("counter-text");
var targetNumberText = document.getElementById("targetNumber-text");

//out putting the text onto the html page
$(document).ready(function() {
    $("#winningNumber").text(targetNumber);
    $("#wins-text").text("wins: " + wins);
    $("#losses-text").text("losses: " + losses);
    $("#counter-text").text(" " + counter);
    // what happens when you click on the image buttons
    // diamond image
    $("#diamond-image").on("click", function () {
        counter = Math.floor(Math.random() * 12) + 1;
        console.log(counter);
    });
    
    //emerald image
    $("#emerald-image").on("click", function () {
        counter = Math.floor(Math.random() * 12) + 1;
        console.log(counter);
    });
    
    //ruby image
    $("#ruby-image").on("click", function () {
        counter = Math.floor(Math.random() * 12) + 1;
    });
    
    //topaz image
    $("#topaz-image").on("click", function () {
        counter = Math.floor(Math.random() * 12) + 1;
    });
    // bases for how the game is played and what happens when you win/ loose
    if (counter === targetNumber) {
        wins++;
        ("#wins-text").html(win);
        counter = 0;
    } else if (counter >= targetNumber) {
        losses++;
        ("#losses-text").html(losses);
        counter = 0;                 
    }
});
// I couldnt get the images to keep the same number after I clicked on them one time. I kept testing them using console.log() but couldn't figure it out. 
// I will be in for morning session to try and get help with this. I struggled for hours running into one problem at a time. 
// I slowly figured it out so with time I know I will understand this. 