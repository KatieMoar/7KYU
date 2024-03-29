/* -------------------------------------------- */
/*                   QUESTIONS                  */
/* -------------------------------------------- */


// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */


function solution(nums){
    return nums ? nums.sort(function(a, b) { return a - b;}) : [];
  }

console.log(solution([1,10,2,3,5]))
