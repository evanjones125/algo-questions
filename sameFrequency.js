// given two positive integers, find out if the two numbers have the same frequency of digits
const sameFrequency = (int1, int2) => {
    const sorted1 = int1.toString().split('').sort().join('');
    const sorted2 = int2.toString().split('').sort().join('');

    if (sorted1 !== sorted2) return false;
    return true;
}

console.log(sameFrequency(113, 121));
// sameFrequency(182, 281) -> true
// sameFrequency(34, 14) -> false
// sameFrequency(3589578, 5879385) -> true
// sameFrequency(22, 222) -> false