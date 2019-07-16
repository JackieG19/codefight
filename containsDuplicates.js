/* Write a function that determines whether the array contains any duplicates. 
return true if any element appears at least twice in the array, 
return false if every element is distinct.*/


function containsDuplicates(a) {
    
    let arryLenght = a.length;
    console.log(arryLenght);
    
    for(var i = 0; i < arryLenght; i++) {
        console.log('i:', i)
        
        for(var j = i+1; j < arryLenght; j++) {
            console.log('ai:', a[i], 'aj:', a[j]);
            
            if(a[i] == a[j]) {
                return true;
            }
        }
    }
    return false;
}
