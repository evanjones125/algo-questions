// return the sum of all even numbers in an object which may contain nested objects
const nestedEvenSum = (obj, total = 0) => {
    for (let i in obj) {
        if (typeof obj[i] === 'object') {
            total += nestedEvenSum(obj[i]);
        }
        if (typeof obj[i] === 'number') {
            if (obj[i] % 2 === 0) total += obj[i];
        }
    }

    return total;
}

const obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  const obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
  console.log(nestedEvenSum(obj1)); // 6
  console.log(nestedEvenSum(obj2)); // 10