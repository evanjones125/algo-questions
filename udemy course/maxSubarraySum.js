// given an array and a number n, calculate the
// maximum sum of n consecutive elements in the array

// nested loop approach
// const maxSubarraySum = (arr, n) => {
//     if (!arr[0]) return null;
//     if (n === 1) return Math.max(...arr);
//     let output = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let segment = 0;
//         for (let j = i; j < n + i; j++) segment += arr[j];
//         if (segment > output) output = segment;
//     }
//     return output;
// }

// sliding window approach
const maxSubarraySum = (arr, n) => {
    if (arr.length === 0) return null;
    let maxSum = 0;
    let segment = 0;

    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }

    segment = maxSum;
    for (let i = n; i < arr.length; i++) {
        segment = segment - arr[i - n] + arr[i];
        if (segment > maxSum) maxSum = segment;
    }

    return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)) // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)) // 13
console.log(maxSubarraySum([], 4)) // null