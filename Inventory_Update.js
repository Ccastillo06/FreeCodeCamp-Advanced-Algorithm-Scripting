function updateInventory(arr1, arr2) {

  var i, j, x, y, c;
  
  
  for (i=0; i<arr1.length; i++){
    
    for (j=0; j<arr2.length; j++){
      
      if (arr1[i][1] == arr2[j][1]) {
        
        arr1[i][0] = arr1[i][0] + arr2[j][0]; 
        
       arr2.splice(j,1);
 
      }
    }
  }
   
  for (i=0; i<arr2.length; i++){
    
    c = true;
       
    x = arr2[i][1].charCodeAt(arr2[i][1][0]);
     
    for (j=0; j<arr1.length; j++){
      
      y = arr1[j][1].charCodeAt(arr1[j][1][0]);
      
      if (x < y) {
        
        arr1.splice(j, 0, arr2[i]);
        
        j = arr1.length;
        
        c = false;
      }
    }
    
    if ( c == true) {
      
      arr1.push(arr2[i]);
    }
  }
  
  return arr1;
}

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);

