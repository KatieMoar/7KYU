/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

var capitals = function (word) {
    let arr = []
	let split = word.split('')
    for (let i = 0; i < split.length; i++) {
        if(split[i] == split[i].toUpperCase()) {
            arr.push(i)

        }
    }
    return arr
};



capitals('CodEWaRs')// [0,3,4,6] 