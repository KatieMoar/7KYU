/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1) returns 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.


//EDIT

// You are given a number "n" (n >= 0) and a digit "d" (0 <= d <= 9).

// Write a function nbDig(n, d) that finds the square of each integer from 0 to n, and returns the number of times that the digit d appears across all the squares. Note that d might appear multiple times in a single square.

// Example:

// n=12, d=1
// Squares from 0 to n=12: 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144
// The function returns 7 because the digit d=1 appears 7 times: in 1, 16, 81, 100, 121 (note: 1 appears twice in 121), and 144.

// n=10, d=0
// Squares from 0 to n=10: 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// The function returns 3 because the digit d=0 appears 3 times: in 0 and 100 (note: 0 appears twice in 100).


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function nbDig(n, d) {
    //square every number from 0 to n
    //d is a number between 0 and 9
    //check how many times d occurs in the n array
    let str = ''
    for (let i = 0; i <= n; i++){
        str += Math.pow(i, 2)
    }
    console.log(str)
    console.log(str.split(d).length - 1)
}

nbDig(12,0)

