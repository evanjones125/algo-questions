// check if a string ends with the given target string
function confirmEnding(str, target) {
    if (!target.length) return true;
    if (target[target.length - 1] !== str[str.length - 1]) return false;
  
    return confirmEnding(str.slice(0, -1), target.slice(0, -1));
  }
  
  console.log(confirmEnding("Bastian", "n"));