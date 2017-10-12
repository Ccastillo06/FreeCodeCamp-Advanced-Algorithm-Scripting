function pairwise(arr, arg) {
  // Array to store pairs and their index.
  var pairArr = [];
  var pairInd = [];
  var sum = 0;
  
  // For to loop trhough the first element to the last.
  for (var i=0; i<arr.length; i++){
    
    // Using reduce makes easier to loop through the array in a single function.
    var pair = arr.reduce(function(init, next, index) {
 
      // If index isn't i, it can continue.
      if (index != i) {
        // If the element taken from the main array and the reduce sum is the same as arg, continue.
        if(arr[i] + next == arg) {
          
          pairArr.push([arr[i], next]);
          pairInd.push([i,index]);
          
          // Whenever an element is used, it can't be used again.
          arr[i] = NaN;
          arr[index] = NaN;
        }
      }
    }, 0);
  }
  
  // Double loop in the pairInd to sum all index.
  for (var j=0; j<pairInd.length; j++) {
    
   for (var c=0; c<pairInd[j].length; c++) {
     
     sum = sum + pairInd[j][c];
     
   }
  }
  
  return sum;
}

pairwise([1, 4, 2, 3, 0, 5], 7); // should return 11.
pairwise([1, 3, 2, 4], 4); // should return 1.
pairwise([1, 1, 1], 2); // should return 1.
pairwise([0, 0, 0, 0, 1, 1], 1); // should return 10.
pairwise([], 100); // should return 0. 
