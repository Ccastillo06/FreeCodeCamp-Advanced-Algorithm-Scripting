function checkCashRegister(price, cash, cid) {

  var change = cash - price;
  var register = [0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00];
  var changeArr = [];
  
  // Sum the total change in the register using reduce (function to use every element in the array consecutively).
  var total = cid.reduce(function (sum, value) {
    return sum + value[1];
  }, 0);
  
  // Round the value given by reduce to have only two decimal.
  total = Math.round(total * 100) / 100;
  
  // In case total and change are equal, the box is closed.
  if (total === change) {
    return "Closed";
  }
  
  // Loop through the array cid from end to first position.
  for (var i = cid.length - 1; i > -1; i--) {
  
    // New variable to use as acummulator for the fnal array.
    var value = 0;
    
    // If the value in cid is bigger that 0 and if change is bigger than register (original value of money).
    while (cid[i][1] > 0 && change >= register[i]) {
      
      change -= register[i];
      change = Math.round(change * 100) / 100;
      
      cid[i][1] -= register[i];
      value += register[i];
    }
    
    // After repeating until the change can move to the next cid value, push it into the final array if value's over 0.
    if (value > 0) {
      changeArr.push([cid[i][0], value]);
    }
  }
  
  // Sum the total content of the changeArr to get the avaliable money in total.
  var avali = changeArr.reduce(function (sum, value) {
    return sum + value[1];
  }, 0);
  
  avali = Math.round(avali * 100) / 100;
  
  // If avaliable money if less than the change needed (counting with the amount of coins and bills neccesary), return the string.
  if (avali < change) {
    return "Insufficient Funds";
  }
 
  // Return the  final array.
  return changeArr;
}


checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]); //should return an array.
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // should return a string.
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // should return a string.
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]); // should return [["QUARTER", 0.50]].
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]); // should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // should return "Insufficient Funds".
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // should return "Insufficient Funds".
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // should return "Closed". 
