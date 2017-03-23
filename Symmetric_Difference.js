function sym(args) {
  
  var arr = [];  // Create a new empty array to store the final result.
      
  for (var i = 0; i < arguments.length; i++){  // Loop the arguments.
     
    var newArray = arguments[i].filter(function(item, pos, self) {  // Filter the repeated elements in a new Array.
        
      return self.indexOf(item) == pos;  // If position is different for an element, it's repeated and won't return.
    });
    
    for (var j = 0; j < newArray.length; j++){  // Loop the new Array.
      
      var index = arr.indexOf(newArray[j]);  // Look for the newArray element inside the final array.   
     
      if (index != -1){  // If index is 0 or higher, it's in the array, and it's repeated.
        
        arr.splice(index,1);  // So splice it out from the final array.
        
      } else {  // If index is -1, the element doesn't exist in the array.
        
        arr.push(newArray[j]);  // So push it into the final array.
      }
    } 
  }
  
  return arr;  // Return the final array.
}

sym([1, 2, 3], [5, 2, 1, 4]); // should return [3, 4, 5].
sym([1, 2, 3], [5, 2, 1, 4]); // should contain only three elements.
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]); // should return [1, 4, 5]
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]); // should contain only three elements.
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]); // should return [1, 4, 5].
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]); // should contain only three elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]); // should return [2, 3, 4, 6, 7].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]); // should contain only five elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]); // should return [1, 2, 4, 5, 6, 7, 8, 9].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]); // should contain only eight elements.
