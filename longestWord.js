// return the length of the longest word in the provided sentence
function findLongestWordLength(str) {
    const toArr = str.split(' ');
    const cache = {};
  
    cache.longest = toArr[0].length;
  
    for (let i = 1; i < toArr.length; i++) {
      if (toArr[i].length > cache.longest) cache.longest = toArr[i].length;
    }
  
    return cache.longest;

    // method chaining solution:
    // return Math.max(...(str.split(' ').map(el => el.length)));;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));