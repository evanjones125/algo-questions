// accepts two strings and checks whether characters in the first string
// form a subseqence of the characters in the second string
const isSubsequence = (str1, str2) => {
    let left = 0;
    let right = 0;

    while (right < str2.length) {
        if (left === str1.length - 1) return true;
        if (str1[left] === str2[right]) {
            left ++;
            right ++;
        }
        if (str1[left] !== str2[right]) right ++;
    }
    
    return false;
}

console.log(isSubsequence('hello', 'hello world')); // -> true
console.log(isSubsequence('sing', 'sting')) // -> true
console.log(isSubsequence('abc', 'abracadabra')) // -> true
console.log(isSubsequence('abc', 'acb')) // -> false (order matters)