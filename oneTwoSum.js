let math = 2 ^ 1;
console.log(math);
const a = `2
2
4
8
16`;

const b = `2
4
2
2
2`;

const calcGapNum = (arrayA, arrayB) => {
  let gapNum;
  let tempArray = [];
  let temp;
  let found = tempArray.find(element => element === temp);

  for (let k = 1; k < arrayB + 1; k++) {
    temp = 2 * k;
    found = tempArray.find(element => element === temp);
    if (found !== temp) {
      tempArray.push(temp);
    }

    temp = Math.pow(2, k);
    found = tempArray.find(element => element === temp);

    if (found !== temp) {
      tempArray.push(temp);
    }
    let x = arrayB - k;
    temp = Math.pow(2, k) + 2 * x;
    found = tempArray.find(element => element === temp);
    if (found !== temp) {
      tempArray.push(temp);
      tempArray.sort((a, b) => a - b);
    }
  }
  console.log(tempArray);
  gapNum = Math.pow(2, arrayB) - tempArray.length;

  if (arrayA !== 0) {
    let map = tempArray.map(x => x + 1);
    tempArray = [...tempArray, ...map, 1].sort((a, b) => a - b);
    if (arrayA < arrayB) {
      console.log(`${tempArray} this is when a is not = to zero `);

      gapNum = tempArray.length + arrayA - 2 + arrayA;
    }
    if (arrayA >= arrayB) {
      console.log(`${tempArray} this is when a is not = to zero `);
      gapNum = tempArray.length + arrayA - 2 + arrayA;
    }
  }
  console.log(
    `${gapNum} for array element for array A ${arrayA}__________ and array B ${arrayB} `
  );
  return gapNum;
};

function onesAndTwos(a, b) {
  let arrayA = a
    .toString()
    .trim()
    .split('\n');
  let arrayB = b
    .toString()
    .trim()
    .split('\n');

  let masterArray = [];
  let re = /\,/gi;
  for (let i = 0; i < arrayA.length; i++) {
    let tempAnswer;
    const tempA = Number(arrayA[i]);
    const tempB = Number(arrayB[i]);

    if (tempB === 0) {
      tempAnswer = arrayA[i];
    } else if (tempA >= tempB) {
      tempAnswer = Math.pow(2, tempB) + tempA;
    } else {
      tempAnswer = calcGapNum(tempA, tempB);
    }

    console.log(tempAnswer);
    masterArray.push(tempAnswer);
  }
  console.log(masterArray);

  masterArray = masterArray.toString().replace(re, '\n');

  return masterArray;
}
console.log(onesAndTwos(a, b));
