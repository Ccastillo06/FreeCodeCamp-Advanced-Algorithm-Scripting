function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var alt, sum, a, x, orbPer;
  
  for (x=0; x < arr.length; x++){
    
    alt = arr[x].avgAlt;
    sum = alt + earthRadius;
    a = Math.pow(sum, 3);
    
    orbPer = (2*Math.PI) * Math.sqrt(a/GM);
    
    arr[x].orbitalPeriod = Math.round(orbPer);
    delete arr[x].avgAlt;
  }
   
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
