function isValidSubsequence(array, sequence) {
    const arrCopy = [];
    
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (sequence[j] === array[i]) {
          arrCopy.push(array[i]);
        }
      }
    }
  
    console.log(arrCopy);
    console.log(sequence);
    
    if (arraysEqual(arrCopy, sequence)) return true;
    return false;
  }
  
  function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  
  console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
  