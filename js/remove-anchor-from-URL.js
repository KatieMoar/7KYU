/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */


// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function removeUrlAnchor(url){
    //split by #
    let result = url.split('#')
    return result[0]
  }


/* -------------- TEST CONDITION -------------- */
removeUrlAnchor('www.codewars.com#about') //'www.codewars.com'

//Parameters: A url
//Returns: A url without anything after the #

/* ------------------- NOTES ------------------ */

//easy mode