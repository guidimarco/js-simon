$("document").ready(function() {
    // GLOBAL VAR ASSIGNMENT
    var min = 1; // min value random number
    var max = 100; // max value random number
    var totNumbers = 5; // total of rnd-n
    var rndNumbers = []; // array of rnd-n

    // ALGORITHM
    // STEP 1 numbers generator
    rndNumbers = getRndArray(min, max, totNumbers);
    // stamp
    console.log(rndNumbers);

    // STEP 2 create card (with numbers) in html
    cardCreator(rndNumbers);

    // STEP 3 hidden card after 30s
    // STEP 3 ask numbers to user
    // STEP 4 control user numbers
    // STEP 5 show correct answer

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

// </1-fold> EEEEE ALL FUNCTION EEEEE
