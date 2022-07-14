// given two strings, determine if the second
// string is an anagram of the first
const validAnagram = (str1, str2) => {
    const store = {};

    for (let i of str1) store[i] = ++ store[i] || 1;
    
    let newStr2 = str2.split('');

    for (let j in newStr2) {
        if (store.hasOwnProperty(newStr2[j])) store[newStr2[j]] --;       
    }

    for (let key in store) if (store[key] > 0) return false;
    
    return true;
}

console.log(validAnagram('car', 'rac'));