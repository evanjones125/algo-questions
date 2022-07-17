const capitalizeFirst = arr => {
    if (arr.length === 0) return arr;

    else {
        let upper = arr[0][0].toUpperCase();
        let current = arr[0];
        arr.shift();
        return [upper + current.slice(1), capitalizeFirst(arr)].flat();
    }
}

console.log(capitalizeFirst(['car', 'taco', 'banana']));