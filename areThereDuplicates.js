// implement a function that accepts a variable number of arguments and checks
// whether there are any duplicates among the arguments passed in
const areThereDuplicates = (...args) => {
    // add each arg to an object as a key with a value of its frequency
    const obj = {};

    for (let i of args) {
        obj[i] = ++ obj[i] || 1;
        if (obj[i] > 1) return true;
    }

    return false;
}

console.log(areThereDuplicates('a', 'b', 'a'));