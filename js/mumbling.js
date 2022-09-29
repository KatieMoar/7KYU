/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function accum(s) {
    //split to look at numbers individually
    s = s.split('')
    //make an empty array to hold the inputs of the for loop
    let repeatedText = []
    //run a for loop so you can use .repeat to duplicate the letter as many times as the index + 1
    for(let i = 0; i < s.length; i++){
        repeatedText.push((s[i].repeat([i+1])))
    }
    //make a new array to make all the letters lowercase except the first
    let result = repeatedText.map(element => {
        return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
    })
    //join string back together with a - as the seperator
    result = result.join('-')
    return result
}


accum("ZpglnRxqenU")// "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
// accum("NyffsGeyylB")// "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
// accum("MjtkuBovqrU")// "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
// accum("EvidjUnokmM")// "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
// accum("HbideVbxncC")// "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"


//PREP
//PARAMETERS: Taking in a random string of letters (case senstivie)
//RETURN: Returns the string but with the amount of times it prints depending on what place it is in the word. The first letter will be capital regardless of the orginal letter