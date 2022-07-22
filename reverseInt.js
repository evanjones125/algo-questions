const reverseInt = n => {
    return n
        .toString()
        .split('')
        .reverse()
        .join('');
}

console.log(reverseInt(123)); // 321