$("document").ready(function() {
    // GLOBAL VAR ASSIGNMENT
    var min = 1; // min value random number
    var max = 100; // max value random number
    var totNumbers = 5; // total of rnd-n
    var rndNumbers = []; // array of rnd-n
    var time = 30; // (sec) after that time cards --> hidden
    var userNumbers = []; // user-numbers
    var userNotRndNumb = []; // user-number not in the rnd-n --> intersection

    // ALGORITHM
    // STEP 1 numbers generator
    rndNumbers = getRndArray(min, max, totNumbers);
    // stamp
    console.log("Numeri estratti:");
    console.log(rndNumbers);

    // STEP 2 create card (with rnd-numbers) in html
    cardCreator(rndNumbers);

    // BONUS STEP countdown timer
    $(".timer").text(time); // start value
    var clock = setInterval(function() {
        time--;
        $(".timer").text(time);
    }, 1000);

    // AFTER "TIME" SEC with visible numbers
    setTimeout(function() {

        // TIMER STOP
        clearInterval(clock);
        // cancel the clock
        $(".timer").remove();

        // STEP 3 --> hidden the cards
        onOffCard();

        setTimeout(function() { // it's necessary :(
            // STEP 4 ask numbers to user
            userNumbers = askNumbers(min, max, totNumbers);
            // stamp
            console.log("Numeri inseriti:");
            console.log(userNumbers);

            // STEP 5 make card visible again
            onOffCard();

            // STEP 6 check user numbers + output
            checkAndStamp(userNumbers, rndNumbers);

            // STEP 7 create user card (there are not in rnd-numbers)
            userNotRndNumb = userNumbers.filter(x => !rndNumbers.includes(x));

            if (userNotRndNumb.length != 0) {
                // add card in html
                userCardGenerator(userNotRndNumb);
            }

        }, 1000);

    }, (time * 1000)); // fine after "time" sec

}); // fine codice js


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

// #2-fold SSSSS ON-OFF CARD SSSSS
// hidden card
function onOffCard() {
    $(".card").toggleClass("hidden");
}
// #/2-fold EEEEE ON-OFF CARD EEEEE

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

// #2-fold SSSSS CHECK AND STAMP SSSSS
// check user-numbers (array1) and rnd-askNumbers (array2) and stamp in HTML
function checkAndStamp(array1, array2) {

    for (var i = 0; i < array2.length; i++) {

        if (array1.includes(array2[i])) {
            // element of array 2 is array 1
            $(".card").eq(i).addClass("found");
        } else {
            // element of array 2 isn't array 1
            $(".card").eq(i).addClass("not-found");
        }

    }
}
// #/2-fold EEEEE CHECK AND STAMP EEEEE

// #2-fold SSSSS user card generator SSSSS
// stam in html the user-number that are not in rnd
function userCardGenerator(array) {
    // LOCAL VAR ASSIGNMENT
    var userCardContainer; // new div --> card-container
    var currentCard; // new card

    // generate the div container
    userCardContainer = $("<div></div>").addClass("container").appendTo($("main"));

    // push the card card container
    for (var i = 0; i < array.length; i++) {
        currentCard = $("<div>" + array[i] + "</div>").addClass("card not-found").appendTo(userCardContainer);
    }

}
// #/2-fold EEEEE user card generator EEEEE

// </1-fold> EEEEE ALL FUNCTION EEEEE
