// takes in string and returns true if it is a palindrome

const palindrome = str => {
    if (str.length === 1 || str.length === 0) return true;

    if (str[0] === str[str.length - 1]) {
        return palindrome(str.substring(1, str.length - 1));
    }
    
    return false;
}

console.log(palindrome('kayak'));