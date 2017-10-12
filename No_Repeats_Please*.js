function permAlone(str) {

  // Splits the string into an array of all the letters.
  // Calls a function and returns the length of the resulting array.
  return permNoRepeat(str.split("")).length;
}

function permNoRepeat(chars) {  
  
  // In case the array is only a letter long.
  if (chars.length === 1) {
    return chars;
  }  
  
  // This variable will store the given permutations.
  var p = [];
  
  // Loop every letter in the array.
  for (var i = 0; i < chars.length; i++) {
  
    // Copy the array.
    var temp = chars.slice();    
    
    // Remove the current letter from the copied array.
    temp.splice(i,1);
    
    // Will create an array with all the permutations.
    var perms = permNoRepeat(temp);
    
    // Each permutation will get the letter appended.
    for (var j = 0; j < perms.length; j++) {
    
      // If the permutation doesn't start with the character given, push it into p.
      if (!perms[j].startsWith(chars[i])) {
        p.push(chars[i] + perms[j]);  
      }        
    }  
  }
  
  return p;  
}
