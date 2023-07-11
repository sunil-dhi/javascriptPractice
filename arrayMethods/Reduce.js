//Array method 

//Reduce method

//syntax::  array.reduce(function(total,currentvalue),initialvalue)

// it returns single value as a result

let num=[1,2,3,5,8,9,17,25,60];
let res=num.reduce(function(total,current){
  return total+current
},0)

console.warn(res);
