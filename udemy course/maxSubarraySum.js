// given an array and a number n, calculate the
// maximum sum of n consecutive elements in the array
const maxSubarraySum = (arr, n) => {
    if (!arr[0]) return null;
    if (n === 1) return Math.max(...arr);

    let output = 0;

    for (let i = 0; i < arr.length; i++) {
        let segment = 0;
        for (let j = i; j < n + i; j++) {
            segment += arr[j];
        }

        if (segment > output) output = segment;
    }

    return output;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)) // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)) // 13
console.log(maxSubarraySum([], 4)) // null