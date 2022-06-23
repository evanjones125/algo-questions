// given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where
// the average of the pair equals the target average
const averagePair = (arr, avg) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if ((arr[j] + arr[i]) / 2 === avg) return true;
        }
    }
    return false;
}

console.log(averagePair([1, 2, 3], 2.5));
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) -> true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1) -> false
// averagePair([], 4) -> false