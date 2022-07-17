// return the minimal length of a contiguous subarray of which
// the sum is greater than or equal to the integer passed to the function
const minSubarrayLen = (arr, n) => {
    if (Math.max(...arr) >= n) return 1;
    let total = 0;
    for (let i in arr) {
        total += arr[i];
        if (i == arr.length - 1 && total < n) return 0;
    }

    let left = 0;
    let right = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
        if ()
    }
}

console.log(minSubarrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubarrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubarrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubarrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0