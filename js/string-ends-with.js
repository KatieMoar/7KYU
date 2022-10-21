/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function solution(str, ending){
    return str.endsWith(ending)
  }


/* -------------------------------------------- */
/*                  TEST CASES                  */
/* -------------------------------------------- */
solution('abcde', 'cde') //true
solution('abcde', 'abc') //false


//PREP
//PARAMETERS: taking in two strings, the second string has to be the end of the first string
//RETURNS : true or false