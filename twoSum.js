// given an array and a target, return indices of the two numbers such that they add up to target

const twoSum = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                if (i !== j) return [i, j];
            }
        }
    }
}

console.log(twoSum([2, 5, 5, 11], 10));