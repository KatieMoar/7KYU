/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function findShort(s){
    //split s into an array 
    s = s.split(' ')
    let arr = []
    //loop through the words and check the length
    for(let i = 0 ; i < s.length; i++){
        arr.push(s[i].length)
    }
    return Math.min(...arr)
}


/* -------------------------------------------- */
/*                  TEST CASES                  */
/* -------------------------------------------- */

// findShort("bitcoin take over the world maybe who knows perhaps")   // 3);
// findShort("turns out random test cases are easier than writing out basic ones")   // 3); 
findShort("Let's travel abroad shall we")   // 2);
