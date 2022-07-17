// given an array and a target, return indices of the two numbers such that they add up to target

const twoSum = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum === target) return [left, right];
        if (sum > target) {
            nums[right] > nums[left] ? right -- : left ++;
        }
        if (sum < target) {
            nums[right] > nums[left] ? left ++ : right --;
        }
    }
}

console.log(twoSum([2, 5, 5, 11], 10)); // [1, 2]
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]

    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 1; j < arr.length; j++) {
    //         if (arr[i] + arr[j] === target) {
    //             if (i !== j) return [i, j];
    //         }
    //     }
    // }