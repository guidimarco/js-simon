$("document").ready(function() {
    // GLOBAL VAR ASSIGNMENT
    var min = 1; // min value random number
    var max = 100; // max value random number
    var totNumbers = 5; // total of rnd-n
    var rndNumbers = []; // array of rnd-n
    var time = 2; // (sec) after that time cards --> hidden
    var userNumbers = []; // user-numbers

    // ALGORITHM
    // STEP 1 numbers generator
    rndNumbers = getRndArray(min, max, totNumbers);
    // stamp
    console.log(rndNumbers);

    // STEP 2 create card (with numbers) in html
    cardCreator(rndNumbers);

    // AFTER "TIME" SEC
    setTimeout(function() {
        // STEP 3 hidden the cards
        hiddenCard();

        $("document").ready(function() {
            // STEP 4 ask numbers to user
            userNumbers = askNumbers(min, max, totNumbers);
            // stamp
            console.log(userNumbers);

            // userNumbers = askANumber(2, 5);

            // STEP 4 control user numbers
            // STEP 5 show correct answer

        });


    }, (time * 1000));

});


// <1-fold SSSSS ALL FUNCTION SSSSS

// #2-fold SSSSS RANDOM INTEGER SSSSS
// generate a random integer from min to max
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// #/2-fold EEEEE RANDOM INTEGER EEEEE

// #2-fold SSSSS RANDOM INTEGER ARRAY SSSSS
// generate tot rnd number
function getRndArray(min, max, tot) {
    // LOCAL VAR ASSIGNMENT
    var n; // rnd-number
    var array = [];

    while (array.length != tot) {
        n = getRndInteger(min, max);

        if (!array.includes(n)) {
            array.push(n);
        }
        console.log(n);
    }

    return array;
}
// #/2-fold EEEEE RANDOM INTEGER ARRAY EEEEE

// #2-fold SSSSS CARD CREATOR SSSSS
// generate card with number
function cardCreator(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        $("<div>" + numbers[i] + "</div>").addClass("card").appendTo($(".container"));
    }
}
// #/2-fold EEEEE CARD CREATOR EEEEE

// #2-fold SSSSS HIDDEN CARD SSSSS
// hidden card
function hiddenCard() {
    $(".card").addClass("hidden");
}
// #/2-fold EEEEE HIDDEN CARD EEEEE

// #2-fold SSSSS ASK A NUMBER SSSSS
// ask a CORRECT number from min to max INCLUDES
function askANumber(min, max) {
    var n; // number
    do {
        n = parseInt(prompt("Inserisci un numero:"));
    } while (!(!isNaN(n) && n >= min && n <= max));
    return n;
}
// #/2-fold EEEEE ASK A NUMBER EEEEE

// #2-fold SSSSS ASK TOT NUMBER SSSSS
// ask tot CORRECT number from min to max INCLUDES
function askNumbers(min, max, tot) {
    var n; // number
    var array = [];
    while (tot != array.length) {
        // ask 1 number
        n = askANumber(min, max);
        if (!array.includes(n)) {
            array.push(n);
        }
    }

    return array;
}
// #/2-fold EEEEE ASK TOT NUMBER EEEEE


// </1-fold> EEEEE ALL FUNCTION EEEEE
