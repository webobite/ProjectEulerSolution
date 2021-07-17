const utils = require('../Utils');

const problemStatement = "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.\nThe sum of these multiples is 23.\nFind the sum of all the multiples of 3 or 5 below 1000.";

/**
 * Sum of all the multiples of 3 or 5 below 1000.
 * @params num1
 * @params num2
 * @params maxNumber
 */
module.exports = function (num1, num2, maxNumber) {
  utils.logger(utils.drawLine)
  utils.logger(problemStatement);
  utils.logger(utils.drawLine);

  /**
   * Here the logic goes on...
   */

  let sum = 0;
  // const num1 = 3;
  // const num2 = 5;
  for(let i = 0; i< maxNumber; i++)
  {
    if(i % 3 === 0 || i % 5 === 0)
    {
      sum+= i;
    }
  }
  console.log("result = ", sum);
}