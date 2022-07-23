const fizzbuzz = num => {
    const output = [];

    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0 && i % 3 === 0) output.push('fizzbuzz');
        else if (i % 3 === 0) output.push('buzz');
        else if (i % 2 === 0) output.push('fizz');
        else output.push(i);
    }

    return output.join(' ');
}

console.log(fizzbuzz(6)); // 1, fizz, buzz, 4, 5, fizzbuzz