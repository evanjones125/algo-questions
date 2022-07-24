// given a string of characters, return the char that occurs the most often
const maxChar = str => {
    const arr = str.split('').sort();
    const store = {};

    for (let i in arr) {
        if (arr[i] !== ' ') store[arr[i]] ? store[arr[i]] ++ : store[arr[i]] = 1;
    }

    let highest = 0;
    let current;

    for (let j in store) {
        if (store[j] > highest) {
            highest = store[j];
            current = j;
        }
    }

    return current;
}

console.log(maxChar('ogres are like onions')); // o
console.log(maxChar('hello world')); // l