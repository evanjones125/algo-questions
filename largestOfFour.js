// return an array consisting of the largest number from each provided sub-array
// for simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
    const output = []
    const cache = {};
    
    for (let i in arr) cache[i] = -Infinity;
  
    for (let j in arr) {
      for (let k in arr) {
        if (arr[j][k] > cache[j]) cache[j] = arr[j][k]
      }
      output.push(cache[j]);
    }
    
    return output;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));