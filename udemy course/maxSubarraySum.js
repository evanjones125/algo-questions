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
// const maxSubarraySum = (arr, n) => {
//     if (arr.length === 0) return null;
//     let maxSum = 0;
//     let segment = 0;

//     for (let i = 0; i < n; i++) {
//         maxSum += arr[i];
//     }

//     segment = maxSum;
//     for (let i = n; i < arr.length; i++) {
//         segment = segment - arr[i - n] + arr[i];
//         if (segment > maxSum) maxSum = segment;
//     }

//     return maxSum;
// }

function maxSubarraySum(arr, n){
    if (n > arr.length) return null;
    if (n === 1) return Math.max(...arr);
    
    let max = 0;
    let segment = 0;

    // find first segment total
    for (let i = 0; i < n; i++) {
        segment += arr[i];
    }
    
    max = segment;
    
    for (let i = 0; i < arr.length; i++) {
        segment = segment - arr[i] + arr[i + n];
        if (segment > max) max = segment;
    }
    
    return max;
  }

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
// console.log(maxSubarraySum([4, 2, 1, 6], 1)) // 6
// console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)) // 13
// console.log(maxSubarraySum([], 4)) // null
// console.log(maxSubarraySum([100, 200, 300, 400], 2)) // 700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)) // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)) // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)) // 5
// console.log(maxSubarraySum([2, 3], 3)) // null