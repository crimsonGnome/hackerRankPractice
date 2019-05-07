// The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.

// Laura plants a Utopian Tree sapling with a height of 1 meter at the onset of spring. How tall will her tree be after

// growth cycles?

// For example, if the number of growth cycles is

// , the calculations are as follows:

// Period  Height
// 0          1
// 1          2
// 2          3
// 3          6
// 4          7
// 5          14

// Function Description

// Complete the utopianTree function in the editor below. It should return the integer height of the tree after the input number of growth cycles.

// utopianTree has the following parameter(s):

//     n: an integer, the number of growth cycles to simulate

// Input Format

// The first line contains an integer,
// , the number of test cases.
// subsequent lines each contain an integer,

// , denoting the number of cycles for that test case.

// Constraints

// Output Format

// For each test case, print the height of the Utopian Tree after

// cycles. Each height must be printed on a new line.

// Sample Input

// 3
// 0
// 1
// 4

// Sample Output

// 1
// 2
// 7

// Explanation

// There are 3 test cases.

// In the first case (
// ), the initial height (

// ) of the tree remains unchanged.

// In the second case (
// ), the tree doubles in height and is

// meters tall after the spring cycle.

// In the third case (
// ), the tree doubles its height in spring (, ), then grows a meter in summer (, ), then doubles after the next spring (, ), and grows another meter after summer (, ). Thus, at the end of 4 cycles, its height is meters.

function summer(e) {
  return e + 1;
}

function spring(e) {
  return e * 2;
}

function utopianTree(e) {
  const n = [e];
  let answerArray = [];
  let utopianTree = [1];
  let height = 1;

  const maxItteration = Math.max(...n);

  for (let i = 0; i < maxItteration; i++) {
    if (i % 2 === 0 || i === 0) {
      height = spring(height);
      utopianTree.push(height);
    } else {
      height = summer(height);
      utopianTree.push(height);
    }
  }
  for (let k = 0; k < n.length; k++) {
    let answer = utopianTree[n[k]];
    answerArray.push(answer);
  }
  return answerArray;
}

const n = [0, 1, 4];

console.log(utopianTree(n));
