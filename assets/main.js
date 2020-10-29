$("document").ready(function() {
    // GLOBAL VAR ASSIGNMENT
    var min = 1; // min value random number
    var max = 10; // max value random number
    var totNumbers = 5; // total of rnd-n
    var rndNumbers = []; // array of rnd-n

    // ALGORITHM
    // numbers generator
    for (var i = 0; i < totNumbers; i++) {
        currentN = getRndInteger(min, max);
    }

});

// <1-fold SSSSS ALL FUNCTION SSSSS

// #2-fold SSSSS RANDOM INTEGER SSSSS
// generate a random integer from min to max
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// #/2-fold EEEEE RANDOM INTEGER EEEEE

// </1-fold> EEEEE ALL FUNCTION EEEEE
