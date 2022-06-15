function someRecursive(arr, callback){
    //   for (let i = 0; i < arr.length; i++) {
    //       if (callback(arr[i])) return true;
    //   }
    //   return false;
    
    if (callback(arr[0])) return true;
    return someRecursive(arr.slice(1), callback);
}

const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1, 2, 3], isOdd));