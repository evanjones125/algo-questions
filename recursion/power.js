// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, x){
    if (x === 0) return 1;
    if (x === 1) return base;

    return base * power(base, x - 1);
}

console.log(power(5, 3));