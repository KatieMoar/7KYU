/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function getSum( a,b ) {
    let arr = []
    if(a < b) {
        for (let i = a; i <= b; i++) {
            let x = 0
            x += (i)
            arr.push(x)
        }
    } else if (b < a) {
        for (let i = b; i <= a; i++) {
            let x = 0
            x += (i)
            arr.push(x)
        }  
    } else if (a === b) {
        return a
    }
    let sum = arr.reduce((previous, current)=> previous + current, 0)
    return sum
}

getSum(486, 168)


/* -------------------------------------------- */
/*                  BEST ANSWER                 */
/* -------------------------------------------- */

function GetSum( a,b )
{
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}

/* -------------------------------------------- */
/*                     NOTES                    */
/* -------------------------------------------- */

//GOT IT BABY
