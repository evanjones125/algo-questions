// given an array of words, return a new array with each word capitalized
const capitalizeWords = arr => {
    if (arr.length === 1) return arr[0].toUpperCase();
    return [arr[0].toUpperCase(), capitalizeWords(arr.slice(1))].flat();
}

console.log(capitalizeWords(['i', 'am', 'learning', 'recursion'])); // ['I', 'AM', 'LEARNING', 'RECURSION']