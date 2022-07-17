// count the unique values in an array

// const countUniqueValues = arr => {
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== arr[i + 1]) count ++;
//     }

//     return count;
// }

const countUniqueValues = arr => {
    let count = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[count] !== arr[i]) {
            count ++;
            arr[count] = arr[i];
        }
    }

    return count + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4