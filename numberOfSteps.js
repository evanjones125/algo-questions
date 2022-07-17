// given a num, return the number of steps to reduce it to zero
// if the number is even, divide it by two; otherwise, subtract 1
const numberOfSteps = (num, count = 0) => {
    if (num === 0) return count;
    return num % 2 === 0 ? numberOfSteps((num / 2), count += 1) : numberOfSteps((num - 1), count += 1);
}

console.log(numberOfSteps(123)); // 12
console.log(numberOfSteps(8)); // 4
console.log(numberOfSteps(14)); // 6