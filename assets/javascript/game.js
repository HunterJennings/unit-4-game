// cant get the counter to show on screen. that is why they are all console.log() but atleas i know the buttons are working properly
var wins = 0;
var losses = 0;
var targetNumber = Math.floor(Math.random() * 90) + 19;
var counter = 0;
var winsText = $("#wins-text");
var lossesText = $("#losses-text");
var counterText = $("#counter-text");
var targetNumberText = $("#targetNumber-text");

//out putting the text onto the html page

$("#winningNumber").text(targetNumber);
$("#wins-text").text("wins: " + wins);
$("#losses-text").text("losses: " + losses);
$("#counter-text").text(" " + counter);
// what happens when you click on the image buttons
// diamond image

var numbers = [];

for (var i = 0; i < 4; i++) {
    var number = Math.floor(Math.random() * 11) + 1;
    numbers.push(number)
}

console.log(numbers)

$("#diamond-image").on("click", function () {
    counter += numbers[0];
    console.log(counter);
    if (counter === targetNumber) {
        wins++;
        counter = 0;
        $("#counter-text").text(" " + counter);
        numbers = [];
        for (var i = 0; i < 4; i++) {
            var number = Math.floor(Math.random() * 12) + 1;
            numbers.push(number)
        }
        targetNumber = Math.floor(Math.random() * 101) + 19;

        console.log(wins)
        $("#winningNumber").text(targetNumber);
        $("#wins-text").text(wins);


    }

    if (counter > targetNumber) {
        losses++;
        counter = 0;
        $("#counter-text").text(" " + counter);
        numbers = [];
        for (var i = 0; i < 4; i++) {
            var number = Math.floor(Math.random() * 12) + 1;
            numbers.push(number)
        }
        targetNumber = Math.floor(Math.random() * 101) + 19;
        $("#losses-text").text(losses);
        console.log(losses)
        $("#winningNumber").text(targetNumber);
    }
});

//emerald image
$("#emerald-image").on("click", function () {
    counter += numbers[1];
    console.log(counter);
    if (counter === targetNumber) {
        wins++;
        counter = 0;
        $("#counter-text").text(" " + counter);
        numbers = [];
        for (var i = 0; i < 4; i++) {
            var number = Math.floor(Math.random() * 12) + 1;
            numbers.push(number)
        }
        targetNumber = Math.floor(Math.random() * 101) + 19;

        console.log(wins)
        $("#wins-text").text(wins);
        $("#winningNumber").text(targetNumber);


    }

    if (counter > targetNumber) {
        losses++;
        counter = 0;
        $("#counter-text").text(" " + counter);
        numbers = [];
        for (var i = 0; i < 4; i++) {
            var number = Math.floor(Math.random() * 12) + 1;
            numbers.push(number)
        }
        targetNumber = Math.floor(Math.random() * 101) + 19;
        $("#losses-text").text(losses);
        console.log(losses)
        $("#winningNumber").text(targetNumber);
    }
});

//ruby image
$("#ruby-image").on("click", function () {
    counter += numbers[2];
    console.log(counter);
    if (counter === targetNumber) {
        wins++;
        counter = 0;
        $("#counter-text").text(" " + counter);
        numbers = [];
        for (var i = 0; i < 4; i++) {
            var number = Math.floor(Math.random() * 12) + 1;
            numbers.push(number)
        }
        targetNumber = Math.floor(Math.random() * 101) + 19;

        console.log(wins)
        $("#wins-text").text(wins);
        $("#winningNumber").text(targetNumber);


    }

    if (counter > targetNumber) {
        losses++;
        counter = 0;
        $("#counter-text").text(" " + counter);
        numbers = [];
        for (var i = 0; i < 4; i++) {
            var number = Math.floor(Math.random() * 12) + 1;
            numbers.push(number)
        }
        targetNumber = Math.floor(Math.random() * 101) + 19;
        $("#losses-text").text(losses);
        console.log(losses)
        $("#winningNumber").text(targetNumber);
    }
});

//topaz image
$("#topaz-image").on("click", function () {
    counter += numbers[3];
    console.log(counter);
    if (counter === targetNumber) {
        wins++;
        counter = 0;
        $("#counter-text").text(" " + counter);
        numbers = [];
        for (var i = 0; i < 4; i++) {
            var number = Math.floor(Math.random() * 12) + 1;
            numbers.push(number)
        }
        targetNumber = Math.floor(Math.random() * 101) + 19;

        console.log(wins)
        $("#wins-text").text(wins);
        $("#winningNumber").text(targetNumber);

    }

    if (counter > targetNumber) {
        losses++;
        counter = 0;
        $("#counter-text").text(" " + counter);
        numbers = [];
        for (var i = 0; i < 4; i++) {
            var number = Math.floor(Math.random() * 12) + 1;
            numbers.push(number)
        }
        targetNumber = Math.floor(Math.random() * 101) + 19;
        $("#losses-text").text(losses);
        console.log(losses)
        $("#winningNumber").text(targetNumber);
    }
});






    