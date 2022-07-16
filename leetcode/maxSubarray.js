// given an array nums, find the contiguous subarray which has the largest sum
const maxSubarray = nums => {
    const output = [];

    for (let i = 1; i < nums.length + 1; i++) {
        output.push(maxSubarraySum(nums, i));
    }

    return Math.max(...output);
}

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

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubarray([1])); // 1
console.log(maxSubarray([5, 4, -1, 7, 8])); // 23
console.log(maxSubarray([0, 2, 0, 2])); // 4