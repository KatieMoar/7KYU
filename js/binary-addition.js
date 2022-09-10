/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)



/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function addBinary(a,b) {
    console.log((a + b).toString(2))
}

//PREP
//Parameter: taking in two random numbers
//Return: should return the adition in binary as a string

// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

addBinary(5,9)

/* ------------------- NOTES ------------------ */

//Did not get this , apparenlty toString takes in an integer as a argument? I guess just remember toString(2) gives you binary... as though I will ever need that again lol.

