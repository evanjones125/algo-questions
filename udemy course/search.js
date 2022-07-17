// given a sorted array and a value n, return the index where n is located
// if value is not found, return -1

// solution without divide and conquer pattern
const search = (arr, n) => {
    for (let i in arr) if (arr[i] === n) return i;
    return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)) // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)) // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)) // -1