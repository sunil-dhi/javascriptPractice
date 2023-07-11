//array method
//splice method

//used to add new elements in array
//array.splice(index,deletedvalue,valuetobeadded)
//return deleted items in form of array

let array=[10,25,2,85,55,71,20];
const r=array.splice(2,2,100);

console.log("original array:",array);
console.log("new array of deleted items",r);