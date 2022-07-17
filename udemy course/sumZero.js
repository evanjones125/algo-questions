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
    let left = 0;
    let right = arr.length - 1;

    while (right > left) {
        let sum = arr[left] + arr[right];
        if (sum === 0) return [arr[left], arr[right]];
        if (sum > 0) right --;
        if (sum < 0) left ++;
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined