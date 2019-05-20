//Map Function is to slow... Going to switch to array

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

function countCounter(a, n) {
  a = a.filter(b => b > 0);
  if (
    a.length > 2 ||
    (a.length === 2 && (Math.min(...a) > 1 || Math.max(...a) === 1))
  ) {
    return n;
  } else {
    return n + 1;
  }
}

function substrCount(n, s) {
  let count = 0;

  for (let j = 0; j < n; j++) {
    let subArray = Array(27).fill(0);
    for (let k = j; k < n; k++) {
      subArray[s.charCodeAt(k) - 97]++;

      count = countCounter(subArray, count);
    }
  }
  return count;
}

s = 'aaaa';
n = 4;

console.log(substrCount(n, s));
