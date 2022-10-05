/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function SeriesSum(n)
{
  if(n === 1){
    return "1.00"
  } else if (n === 0){
    return "0.00"
  } else {
  let firstTerm = 1
  let secondTerm = 4
  let arr = [1, (firstTerm/secondTerm)]
  for(let i = 2; n < 3; i++){
    secondTerm += 3
    let result = firstTerm/secondTerm
    arr.push(result)
  }
  let sum = arr.reduce((prev, current) => prev + current, 0)
  let fixedSum = sum.toFixed(2)
  return fixedSum
}
}



/* -------------------------------------------- */
/*                TEST CONDITIONS               */
/* -------------------------------------------- */
// SeriesSum(1)// "1.00"
// SeriesSum(2)// "1.25"
// SeriesSum(3)// "1.39"
SeriesSum(4)// "1.49"