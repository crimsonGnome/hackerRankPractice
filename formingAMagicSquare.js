// We define a magic square to be an matrix of distinct positive integers from to where the sum of any row, column, or diagonal of length

// is always equal to the same number: the magic constant.

// You will be given a
// matrix of integers in the inclusive range . We can convert any digit to any other digit in the range at cost of . Given

// , convert it into a magic square at minimal cost. Print this cost on a new line.

// Note: The resulting magic square must contain distinct integers in the inclusive range

// .

// For example, we start with the following matrix

// :

// 5 3 4
// 1 5 8
// 6 4 2

// We can convert it to the following magic square:

// 8 3 4
// 1 5 9
// 6 7 2

// This took three replacements at a cost of

// .

// Function Description

// Complete the formingMagicSquare function in the editor below. It should return an integer that represents the minimal total cost of converting the input square to a magic square.

// formingMagicSquare has the following parameter(s):

//     s: a

//     array of integers

// Input Format

// Each of the lines contains three space-separated integers of row

// .

// Constraints

// Output Format

// Print an integer denoting the minimum cost of turning matrix

// into a magic square.

// Sample Input 0

// 4 9 2
// 3 5 7
// 8 1 5

// Sample Output 0

// 1

// Explanation 0

// If we change the bottom right value,
// , from to at a cost of ,

// becomes a magic square at the minimum possible cost.

// Sample Input 1

// 4 8 2
// 4 5 7
// 6 1 6

// Sample Output 1

// 4

// Explanation 1

// Using 0-based indexing, if we make

// -> at a cost of -> at a cost of -> at a cost of

//     ,

// then the total cost will be
// .

// function magicSquareCalc(flatMap, orginal) {
//   magicArr = [];
//   let tempNum = 0;

//   for (let i = 0; i < 3; i++) {
//     let tempNum = 0;
//     for (let k = 0; k < 3; k++) {
//       tempNum = tempNum + orginal[i][k];
//     }
//     magicArr.push(tempNum);
//   }
//   for (let i = 0; i < 3; i++) {
//     let tempNum = 0;
//     for (let k = 0; k < 3; k++) {
//       tempNum = tempNum + orginal[k][i];
//     }
//     magicArr.push(tempNum);
//   }
//   for (let i = 0; i < 3; i++) {
//     tempNum = tempNum + orginal[i][i];
//   }
//   magicArr.push(tempNum);
//   tempNum = 0;
//   for (let i = 0; i < 3; i++) {
//     tempNum = tempNum + flatMap[6 - i * 3];
//   }
//   magicArr.push(tempNum);
//   return magicArr;
// }

function formingMagicSquare(s) {
  let diffenceArr = [];
  let tempAnswer = 0;
  let magicArrays = [
    [8, 1, 6, 3, 5, 7, 4, 9, 2],
    [6, 1, 8, 7, 5, 3, 2, 9, 4],
    [4, 9, 2, 3, 5, 7, 8, 1, 6],
    [2, 9, 4, 7, 5, 3, 6, 1, 8],
    [8, 3, 4, 1, 5, 9, 6, 7, 2],
    [4, 3, 8, 9, 5, 1, 2, 7, 6],
    [6, 7, 2, 1, 5, 9, 8, 3, 4],
    [2, 7, 6, 9, 5, 1, 4, 3, 8]
  ];

  for (let i = 0; i < 8; i++) {
    tempAnswer =
      Math.abs(s[0][0] - magicArrays[i][0]) +
      Math.abs(s[0][1] - magicArrays[i][1]) +
      Math.abs(s[0][2] - magicArrays[i][2]) +
      Math.abs(s[1][0] - magicArrays[i][3]) +
      Math.abs(s[1][1] - magicArrays[i][4]) +
      Math.abs(s[1][2] - magicArrays[i][5]) +
      Math.abs(s[2][0] - magicArrays[i][6]) +
      Math.abs(s[2][1] - magicArrays[i][7]) +
      Math.abs(s[2][2] - magicArrays[i][8]);

    diffenceArr.push(tempAnswer);
  }
  diffenceArr.sort((a, b) => a - b);
  return diffenceArr[0];
}

let s = [[4, 5, 8], [2, 4, 1], [1, 9, 7]];
console.log(formingMagicSquare(s));
