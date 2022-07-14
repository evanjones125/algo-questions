// find the first pair where the sum is 0
// return array that includes both values that sum to zero (or undefined)

const sumZero = arr => {
    // iterate through arr twice at the same time
    for (let i in arr) {
        for (let j in arr) {
            if (arr[i] !== 0 && arr[j] !== 0 && arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
                //console.log(arr[i], arr[j]);
            }
        }
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined