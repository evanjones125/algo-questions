// find the first pair where the sum is 0
// return array that includes both values that sum to zero (or undefined)

// const sumZero = arr => {
//     for (let i in arr) {
//         for (let j in arr) {
//             if (arr[i] !== 0 && arr[j] !== 0 && arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }

const sumZero = arr => {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let sum = arr[start] + arr[end];
        if (sum === 0) return [arr[start], arr[end]];
        sum > 0 ? end-- : start++;
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined