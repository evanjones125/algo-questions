// accepts two strings and checks whether characters in the first string
// form a subseqence of the characters in the second string
const isSubsequence = (str1, str2) => {
    // if (str2.includes(str1)) return true;

    // iterate through str2 and remove any characters that aren't str1[i]
    // for (let i in str1) {
        let newStr = str2;
        for (let i = 0; i < newStr.length; i++) {
            if (newStr[i] !== str1[i]) newStr.replace(str2[i], '');
        }
    // }
    return newStr;
    return false;
}

console.log(isSubsequence('hello', 'hello world'));
// isSubsequence('hello', 'hello world') -> true
// isSubsequence('sing', 'sting') -> true
// isSubsequence('abc', 'abracadabra') -> true
// isSubsequence('abc', 'acb') -> false (order matters)