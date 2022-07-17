const capitalizeFirst = arr => {
    if (arr.length === 1) {
        let first = arr[0];
        return [first[0].toUpperCase() + first.substring(1)];
    }

    else {
        let first = arr[0];
        return [[first[0].toUpperCase() +first.substring(1)], capitalizeFirst(arr.slice(1))].flat();
    }
}

console.log(capitalizeFirst(['car', 'taco', 'banana']));