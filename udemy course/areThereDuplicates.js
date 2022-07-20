// implement a function that accepts a variable number of arguments and checks
// whether there are any duplicates among the arguments passed in
const areThereDuplicates = (...args) => {
    const obj = {};

    for (let i of args) {
        obj[i] = ++ obj[i] || 1;
        if (obj[i] > 1) return true;
    }

    return false;
}

console.log(areThereDuplicates('a', 'b', 'a'));
// areThereDuplicates(1, 2, 3) -> false
// areThereDuplicates(1, 2, 2) -> true
// areThereDuplicates('a', 'b', 'c') -> true