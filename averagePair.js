// given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where
// the average of the pair equals the target average
const averagePair = (arr, avg) => {
    let left = 0;
    let right = arr.length - 1;

    while (right > left) {
        let total = (arr[left] + arr[right]) / 2;
        if (total === avg) return true;
        if (total > avg) {
            arr[right] > arr[left] ? right -- : left ++;
        }
        if (total < avg) {
            arr[right] > arr[left] ? left ++ : right --;
        }
    }

    return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // -> true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // -> true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // -> false
console.log(averagePair([], 4)); // -> false