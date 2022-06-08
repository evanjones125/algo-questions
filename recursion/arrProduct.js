// take in array and return sum of all elements
const arrProduct = arr => {
    if (arr.length === 1) return arr[0];
    return arr[0] + arrProduct(arr.slice(1));
}

console.log(arrProduct([1, 2, 3, 4, 5]));