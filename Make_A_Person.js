
var Person = function(firstAndLast) {

    // Create a blank variable storing where the blank space is inside the string.
   var blank = firstAndLast.indexOf(' ');
  
    // Returns the full name given in the function. 
   this.getFullName = function() {
     return firstAndLast;
   };
    
    // Returns the part of the given string from 0 to the blank space. 
    this.getFirstName = function() {
      return firstAndLast.slice(0, blank);
    };
  
    // Returns the part of the given string from the blank space (no including it) till the end of it. 
    this.getLastName = function() {
      return firstAndLast.slice(blank + 1, firstAndLast.length);
    };
  
    // Sums the new first name string and the given string last name into one.
    this.setFirstName = function(first) {
      firstAndLast = first + firstAndLast.slice(blank, firstAndLast.length);
    };
  
    // Same as before but inversed.
    this.setLastName = function(last) {
      firstAndLast = firstAndLast.slice(0, blank + 1) + last;
      return firstAndLast;
    };
    
    // Replace the whole initial string with a new one and then change blank's value again.
    this.setFullName = function(full) {
      firstAndLast = full;
      blank = firstAndLast.indexOf(' ');
    };
};

// Create a variable that will use Person's function as a value.
var bob = new Person('Bob Ross');
