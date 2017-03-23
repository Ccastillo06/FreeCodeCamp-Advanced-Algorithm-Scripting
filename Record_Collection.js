var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));


function updateRecords(id, prop, value) {
  
  if (prop === "tracks"){  // If prop is tracks.
    
    if(collection[id][prop] === undefined){  // If tracks is undefined.
      
    collection[id].tracks = [];  // Then it becomes a key with an array.
    }
  
    if(value !== ""){  // If value isn't empty.
      
    collection[id][prop].push(value);  // push that value into the prop.
      
    } else {  // In case value is empty.
      
      delete collection[id][prop];  // Delete its corresponding prop.
    }
    
  } else {  // If prop isn't tracks.
    
    if (value !== ""){  // If value isn't empty
      
      collection[id][prop] = value;  // Update that element prop value.
      
    }else {  // If value is empty.
      
      delete collection[id][prop];  // Delete that corresponding prop.
    }
  }
  
  
  return collection;  // Return the collection.
}

updateRecords(5439, "artist", "ABBA"); // artist should be "ABBA"
updateRecords(5439, "tracks", "Take a Chance on Me"); // tracks should have "Take a Chance on Me" as the last element.
updateRecords(2548, "artist", ""); // artist should not be set
updateRecords(1245, "tracks", "Addicted to Love"); // tracks should have "Addicted to Love" as the last element.
updateRecords(2468, "tracks", "Free"); // tracks should have "1999" as the first element.
updateRecords(2548, "tracks", ""); // tracks should not be set
