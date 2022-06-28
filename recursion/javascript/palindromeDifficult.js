// takes in string and returns true if it is a palindrome
// works for inputs that have spaces and special characters

const palindrome = str => {
    // create "fixed" str that removes capitals/spaces/punctuation
    const fixedStr = str.toLowerCase();
    
    if (str.length === 1 || str.length === 0) return true;

    if (str[0] === str[str.length - 1]) {
        return palindrome(str.substring(1, str.length - 1));
    }
    
    return false;
}

console.log(palindrome('kayak'));