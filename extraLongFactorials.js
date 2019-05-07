// The factorial of the integer , written

// , is defined as:

// Calculate and print the factorial of a given integer.

// For example, if
// , we calculate and get

// .

// Function Description

// Complete the extraLongFactorials function in the editor below. It should print the result and return.

// extraLongFactorials has the following parameter(s):

//     n: an integer

// Note: Factorials of
// can't be stored even in a

// long long variable. Big integers must be used for such calculations. Languages like Java, Python, Ruby etc. can handle big integers, but we need to write additional code in C/C++ to handle huge values.

// We recommend solving this challenge using BigIntegers.

// Input Format

// Input consists of a single integer

// Constraints

// Output Format

// Print the factorial of

// .

// Sample Input

// Sample Output

// ExplanationThe factorial of the integer , written

// , is defined as:

// Calculate and print the factorial of a given integer.

// For example, if
// , we calculate and get

// .

// Function Description

// Complete the extraLongFactorials function in the editor below. It should print the result and return.

// extraLongFactorials has the following parameter(s):

//     n: an integer

// Note: Factorials of
// can't be stored even in a

// long long variable. Big integers must be used for such calculations. Languages like Java, Python, Ruby etc. can handle big integers, but we need to write additional code in C/C++ to handle huge values.

// We recommend solving this challenge using BigIntegers.

// Input Format

// Input consists of a single integer

// Constraints

// Output Format

// Print the factorial of

// .

// Sample Input

// Sample Output

// Explanation
//_________Enviroment Test___________

// const BigNumber = require('bignumber.js');

// function extraLongFactorials(b) {
//   let result = new BigNumber(1);
//   for (let i = b; i > 0; i--) {
//     console.log(`fired`);
//     result = result.multiply(i);
//   }
//   console.log(result);
//   console.log(`cool`);
// }

// extraLongFactorials(10);

// hackerRank Problem
//
//
//Used bignumber which is suported on hackerank
function extraLongFactorials(n) {
  const bigNumber = require('bignumber.js');
  let result = new bigNumber(1);
  for (let i = n; i > 0; i--) {
    result = result.mul(i);
  }
  console.log(result.toFixed());
}
