/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function reverseLetter(str) {
    //check if string is a letter or character
    str = str.split('')
    //creating empty array to hold the values of the for / if conditional
    let arr = []
    //for loop to loop through the elements and select only the letters (using regex had to google that)
    for(let i = 0; i < str.length; i ++) {
        if(/^[A-Z]$/i.test(str[i])) {
            //pushing onto the empty array
            arr.push(str[i])
        }
    }
    //reversing and joining to make a string
    arr = arr.reverse('').join('')
    return arr
  }


/* -------------- TEST CONDITION -------------- */

//reverseLetter("krishan")//"nahsirk"

reverseLetter("ultr53o?n")//"nortlu"

//reverseLetter("ab23c")//"cba"

//reverseLetter("krish21an")//"nahsirk"


//PREP
//Parameters: Taking in a string
//Return : Returns that string, reversed and without and special characters

/* -------------------------------------------- */
/*                  BEST ANSWER                 */
/* -------------------------------------------- */
reverseLetter= (s) => s.replace(/[^a-z]/gi,'').split('').reverse().join('');