let a=[1,2,3,5,6,7,8,2,5]
function checkIfArrayIsUnique(myArray) 
    {
        for (var i = 0; i < myArray.length; i++) 
        {
            for (var j = i+1; j < myArray.length; j++) 
            {
                
                
                    if (myArray[i] == myArray[j]) 
                    {
                        return true; // means there are duplicate values
                    }
                
            }
        }
        return false; // means there are no duplicate values.
    }

    
console.log(checkIfArrayIsUnique(a))