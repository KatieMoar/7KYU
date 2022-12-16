/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */
// Your task is to write function factorial.


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function factorial(n){
    return (n <= 1 ? 1 : n * factorial(n - 1))
  }

/* -------------------------------------------- */
/*                  TEST CASES                  */
/* -------------------------------------------- */
factorial(0)   // 1);
factorial(1)   // 1);
factorial(4)   // 24);
factorial(7)   // 5040);

