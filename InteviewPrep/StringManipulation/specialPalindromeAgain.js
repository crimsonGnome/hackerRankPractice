// // Map Function is to slow... Going to switch to array
// function substrCount(n, s) {
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = i; j < n; j++) {
//       let subMap = new Map();
//       let subString = [...s.slice(i, j + 1)];
//       subString.forEach(x => {
//         subMap.set(x, (subMap.get(x) || 0) + 1);
//       });
//       let mapValues = [...subMap.values()];
//       if (
//         mapValues.length > 2 ||
//         (mapValues.length === 2 && Math.min(...mapValues) > 1)
//       ) {
//         continue;
//       }

//       subString = subString.join('');
//       if (mapValues.length === 1) {
//         count++;
//         continue;
//       }
//       if (subString.length % 2 === 1) {
//         let middleValue = Math.floor(subString.length / 2);
//         subString = subString.slice(middleValue);
//         subString = [...subString];
//         if (subString.every(a => a === a[0])) {
//           count++;
//         }
//         continue;
//       }
//     }
//   }
//   return count;
// }

// function countCounter(a, n) {
//   a = a.filter(b => b > 0);
//   if (
//     a.length > 2 ||
//     (a.length === 2 && (Math.min(...a) > 1 || Math.max(...a) === 1))
//   ) {
//     return n;
//   } else {
//     return n + 1;
//   }
// }

// function substrCount(n, s) {
//   let count = 0;

//   for (let j = 0; j < n; j++) {
//     let subArray = Array(27).fill(0);
//     for (let k = j; k < n; k++) {
//       subArray[s.charCodeAt(k) - 97]++;

//       count = countCounter(subArray, count);
//     }
//   }
//   return count;
// }

// //solution by St_jimoh- hackerRank
//Single loop
function substrCount(n, s) {
  let history = [];
  let historyCount = 0;

  // historyItem = [current, occurrence]
  let historyItem = [s[0], 1];

  let palindromicCount = 0;

  for (let i = 1; i < n; i++)
    if (s[i] === historyItem[0]) historyItem[1]++;
    else {
      // Calcuate all strings that can be formed with the same character
      // Count total substrings  -> n * (n + 1) / 2 for (sum Sequence formula)
      //https://math.stackexchange.com/questions/2260/proof-for-formula-for-sum-of-sequence-123-ldotsn/2263
      palindromicCount += (historyItem[1] * (historyItem[1] + 1)) / 2;

      if (historyCount === 2) {
        // Calcuate all strings that can be formed with the same character except middle character
        if (history[0][0] == historyItem[0] && history[1][1] == 1)
          palindromicCount += Math.min(history[0][1], historyItem[1]);
        console.log(history);
        history.shift();
        historyCount--;
      }

      history.push(historyItem);
      historyCount++;
      historyItem = [s[i], 1];
    }
  console.log(historyItem);
  palindromicCount += (historyItem[1] * (historyItem[1] + 1)) / 2;

  if (historyCount === 2)
    if (history[0][0] == historyItem[0] && history[1][1] == 1)
      palindromicCount += Math.min(history[0][1], historyItem[1]);

  return palindromicCount;
}

s = 'abcbaaa';
n = 7;

console.log(substrCount(n, s));
