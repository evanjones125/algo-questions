// accepts an array of arrays and returns a new array with all values flattened
const flatten = arr => {
    let output = [];
    for (let i = 0; i < arr.length; i ++) {
        if (!Array.isArray(arr[i])) output.push(arr[i]);
        if (Array.isArray(arr[i])) {
            output = output.concat(flatten(arr[i]));
        }
    }
    return output;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[[1]], [[[2]]], [[[[[[[[[3]]]]]]]]]])); // [1, 2, 3]