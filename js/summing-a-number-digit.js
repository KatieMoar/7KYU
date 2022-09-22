/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function sumDigits(num) {
    let numString = String(num).split('') // Make a number to a string so you can use the split method
    if(num < 0){
        numString.shift() //checking if there is a negative sign, if so pop that bugger off
    }
    let sum = numString.reduce((acc, curr) => {
            return acc + Number(curr) //need to have Number here so it doesn't concat
        }, 0) // adding the previous and current values together to get sum
    return sum

}



// console.log(sumDigits(10))// 1
// sumDigits(99)// 18
sumDigits(-32)// 5


//PREP

//PARAMETERS: Taking in a single number
//RETURN : Returns the sum of each of the digits
