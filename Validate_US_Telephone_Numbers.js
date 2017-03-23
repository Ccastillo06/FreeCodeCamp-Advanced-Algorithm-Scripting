function telephoneCheck(str) {
  
  var res = str.replace(/\s/g,"");  // Remove all blank spaces.
  var arr = res.split("");  // Make an array.
  
  
  var counter = 0;  // Counter for every time a number appears.
  var par = 0;  // Counter for every parenthesis. 
  
  for(var i = arr.length-1; i >= 0; i--){  // Loop the array.
    
    var check = arr[i]>=0 && arr[i] < 10;  // Boolean to check if there is no number in that position.
    
    if (counter < 3){  // If the last 4 elements are not numbers return false.
      if (check === false){
        return false;  
      }
    }
    
    if(check === false){  // If there is no number.
      if(arr[i] !== '-' && arr[i] !== '(' && arr[i] !== ')'){  // And there is no -, ( or ) return false.
        return false;
      }
    }
    
    if (arr[i] === ')' || arr[i] === '('){  // If there is a parenthesis, par +1.
      par++;
    }
    
    if(check){  // If there is a number, counter +1.
    counter++;
    }
   }
  
  if(counter == 11){  // If counter is 11, then the first number must be a 1.
    if(arr[0] != 1){
      return false;
    }
  }
  
  if (counter < 10 || counter > 11){  // If there is less than 10 numbers or more than 11, then false.
    return false;
  } 
  
  if (par > 0 && par < 2){  // If a parenthesis appears alone, then false.
    return false;
  }
  
  return true;  // In any other case, return true.
}



telephoneCheck("555-555-5555"); // should return a boolean.
telephoneCheck("1 555-555-5555"); // should return true.
telephoneCheck("1 (555) 555-5555"); // should return true.
telephoneCheck("5555555555"); // should return true.
telephoneCheck("555-555-5555"); // should return true.
telephoneCheck("(555)555-5555"); // should return true.
telephoneCheck("1(555)555-5555"); // should return true.
telephoneCheck("555-5555"); // should return false.
telephoneCheck("5555555"); // should return false.
telephoneCheck("1 555)555-5555"); // should return false.
telephoneCheck("1 555 555 5555"); // should return true.
telephoneCheck("1 456 789 4444"); // should return true.
telephoneCheck("123**&!!asdf#"); // should return false.
telephoneCheck("55555555"); // should return false.
telephoneCheck("(6505552368)"); // should return false
telephoneCheck("2 (757) 622-7382"); // should return false.
telephoneCheck("0 (757) 622-7382"); // should return false.
telephoneCheck("-1 (757) 622-7382"); // should return false
telephoneCheck("2 757 622-7382"); // should return false.
telephoneCheck("10 (757) 622-7382"); // should return false.
telephoneCheck("27576227382"); // should return false.
telephoneCheck("(275)76227382"); // should return false.
telephoneCheck("2(757)6227382"); // should return false.
telephoneCheck("2(757)622-7382"); // should return false.
telephoneCheck("555)-555-5555"); // should return false.
telephoneCheck("(555-555-5555"); // should return false.
telephoneCheck("(555)5(55?)-5555"); // should return false.
