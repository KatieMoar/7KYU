/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

var number = function(busStops){
    let addition = []
    let subtraction = []
    for(let i = 0; i < busStops.length; i++){
        addition.push(busStops[i][0])
        subtraction.push(busStops[i][1])
    }
    let additionResults = addition.reduce((prev, acc) => prev + acc, 0)
    let subtractionResults = subtraction.reduce((prev, acc) => prev + acc, 0)
    let results = additionResults - subtractionResults
    return results
  }



/* -------------------------------------------- */
/*                  TEST CASES                  */
/* -------------------------------------------- */

number([[10,0],[3,5],[5,8]]) //5
number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) //17
number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]) //21
number([[0,0]]) //0


var number = function(busStops){
    var totalPeople = 0;
    for (var i=0; i<busStops.length; i++) {
      totalPeople += busStops[i][0];
      totalPeople -= busStops[i][1];
    }
    return totalPeople;
  }

  //ya this makes more sense lol. Same idea, just streamlined