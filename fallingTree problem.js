const s = 7;
const t = 11;
const appleTree = 5;
const orangeTree = 15;
const apples = [-2, 2, 1];
const oranges = [5, -6, -7];

const fruitFall = (tree, fruit) => {
  let fruitDistance = tree + fruit;
  return fruitDistance;
};

function countApplesAndOranges(s, t, appleTree, orangeTree, apples, oranges) {
  let fruitDistance;
  let re = /\,/gi;
  let answerArray = [0, 0];
  for (let i = 0; i < apples.length; i++) {
    fruitDistance = fruitFall(appleTree, apples[i]);
    if (t >= fruitDistance && fruitDistance >= s) {
      answerArray[0] = answerArray[0] + 1;
    }
  }
  for (let i = 0; i < oranges.length; i++) {
    fruitDistance = fruitFall(orangeTree, oranges[i]);
    if (t >= fruitDistance && fruitDistance >= s) {
      answerArray[1] = answerArray[1] + 1;
    }
  }
  answerArray = answerArray.toString().replace(re, '\n');
  return answerArray;
}

console.log(
  countApplesAndOranges(s, t, appleTree, orangeTree, apples, oranges)
);
