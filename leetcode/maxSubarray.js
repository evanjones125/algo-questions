// given an array nums, find the contiguous subarray which has the largest sum
const maxSubarray = nums => {
    let maxSub = nums[0];
    let curr = 0;

    for (let i = 0; i < nums.length; i++) {
        if (curr < 0) curr = 0;
        curr += nums[i];
        if (curr > maxSub) maxSub = curr;
    }

    return maxSub;
}

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubarray([1])); // 1
console.log(maxSubarray([5, 4, -1, 7, 8])); // 23
console.log(maxSubarray([0, 2, 0, 2])); // 4