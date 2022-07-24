// given a string of characters, return the char that occurs the most often
const maxChar = str => {
    const store = {};

    for (let i in str) {
        if (str[i] !== ' ') store[str[i]] ? store[str[i]] ++ : store[str[i]] = 1;
    }

    let highest = 0;
    let maxChar;

    for (let j in store) {
        if (store[j] > highest) {
            highest = store[j];
            maxChar = j;
        }
    }

    return maxChar;
}

console.log(maxChar('ogres are like onions')); // e || o
console.log(maxChar('hello world')); // l