// You are given an array and you need to find number of tripets of indices such that the elements at those indices are in geometric progression for a given common ratio and

// .

// For example,
// . If , we have and at indices and

// .

// Function Description

// Complete the countTriplets function in the editor below. It should return the number of triplets forming a geometric progression for a given

// as an integer.

// countTriplets has the following parameter(s):

//     arr: an array of integers
//     r: an integer, the common ratio

// Input Format

// The first line contains two space-separated integers
// and , the size of and the common ratio.
// The next line contains space-seperated integers

// .

// Constraints

// Output Format

// Return the count of triplets that form a geometric progression.

// Sample Input 0

// 4 2
// 1 2 2 4

// Sample Output 0

// 2

// Explanation 0

// There are
// triplets in satisfying our criteria, whose indices are and

// Sample Input 1

// 6 3
// 1 3 9 9 27 81

// Sample Output 1

// 6

// Explanation 1

// The triplets satisfying are index
// , , , , and

// .

// Sample Input 2

// 5 5
// 1 5 5 25 125

// Sample Output 2

// 4

// Explanation 2

// The triplets satisfying are index
// , , , .

function countTriplets(arr, r) {
  let left = [];
  let right = [];
  arr.forEach(v => (right[v] ? right[v]++ : (right[v] = 1)));
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    right[arr[i]]--;
    answer += (left[arr[i] / r] || 0) * (right[arr[i] * r] || 0);
    left[arr[i]] ? left[arr[i]]++ : (left[arr[i]] = 1);
  }

  return answer;
}

let arr = [
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1
];

arr = [1, 5, 5, 25, 125];

const r = 5;

console.log(countTriplets(arr, r));
