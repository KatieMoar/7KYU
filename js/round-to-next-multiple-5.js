/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */
// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function roundToNext5(n){
    //if statement that adds +1 to the number until modulus of 5??
    return Math.ceil(n / 5) * 5
  }



roundToNext5(0) // 0
roundToNext5(3) // 5
roundToNext5(-2) // 0
roundToNext5(21) // 25
roundToNext5(25) // 25
