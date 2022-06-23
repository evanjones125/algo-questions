// given a string, output a count of the incidence of each unique char
const charCount = str => {
    const store = {};
    const sorted = sortString(str);

    for (let i in sorted) {
        const char = sorted[i].toLowerCase();
        if (store[char]) store[char] ++;
        if (!store[char]) store[char] = 1;
        // if (char === ' ') null;
    }

    return store;
}

const sortString = text => text.split('').sort().join('');

console.log(charCount("Testing"));