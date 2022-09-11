/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1
    let l1 = a1.map(str => str.length)
    let l2 = a2.map(str => str.length)
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
  }

/* -------------- WORKING THROUGH ------------- */

function mxdiflg(a1, a2) {
    //checking if the length of the array is greater than 0 if not return the -1
    if (a1.length === 0 || a2.length === 0) return -1
    //mapping a new array which shows the value of the string letters for both arrays
    let l1 = a1.map(str => str.length)
    console.log(l1)
    let l2 = a2.map(str => str.length)
    console.log(l2)
    //math.max returns the largest number in a set of given numbers
    //math.min returns the smallest number in a set of given numbers
    console.log(Math.min(...l2))
    console.log(Math.max(...l1))
    console.log(Math.max(1, 13))
    //13 is the larger number
  }


// var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
//     var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
//     assert.strictEqual(mxdiflg(s1, s2), 13);

mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"])