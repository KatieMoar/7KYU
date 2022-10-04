/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    console.log(enteredCode, correctCode, currentDate, )
    if(enteredCode === correctCode) {
        let currentDateParse = Date.parse(currentDate)
        let expirationDateParse = Date.parse(expirationDate)
        if(currentDateParse < expirationDateParse || currentDateParse === expirationDateParse) {
            return true
        } else {
            return false
        }
    } else 
    return false
}


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode===correctCode && new Date(currentDate) <= new Date(expirationDate);
  }

// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  //  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  //  false

// checkCoupon('123','123','September 5, 2014','October 1, 201')// true);
// checkCoupon('123a','123','September 5, 2014','October 1, 2014')// false);
