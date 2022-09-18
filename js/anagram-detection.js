/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */


var isAnagram = function(test, original) {

    //make both lowercase, split them by letter, sort them into alphabetical order, join them back and compare the strings
    return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("")
};




/* -------------- TEST CONDITIONS ------------- */
isAnagram("foefet", "toffee")// true, 'The word foefet is an anagram of toffee'
isAnagram("Buckethead", "DeathCubeK")// true, 'The word Buckethead is an anagram of DeathCubeK'
isAnagram("Twoo", "WooT")// true, 'The word Twoo is an anagram of WooT'

isAnagram("dumble", "bumble")// false, 'Characters do not match for test case dumble, bumble'
isAnagram("ound", "round")// false, 'Missing characters for test case ound, round'
isAnagram("apple", "pale")// false, 'Same letters, but different count'


//PREP
//Paramteres : Taking in two words. One is a jumble, another is the anagram we are checking to see
//Return : Should return true or false
