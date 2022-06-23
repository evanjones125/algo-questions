// given a string, output a count of the incidence of each unique char
const charCount = str => {
    const store = {};
    const sorted = sortString(str);

    for (let char of sorted) {
        if (isAlphaNumeric(char)) store[char] = ++ store[char] || 1;
    }

    return store;
}

const sortString = text => text.split('').sort().join('');

const isAlphaNumeric = char => {
    const code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
        return false
    }
    return true;
}

console.log(charCount("shrek is love!"));