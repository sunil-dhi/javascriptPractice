// const sum=function(a){
//     return function(b){
//      if(b){
//         return sum(a+b);
//      }
//      return a;
//     }
// }

// const sum=function(a){
//     return function(b){
//      return b?sum(a+b):a
//     }
// }

const sum = a => b => b ? sum(a + b) : a;
  
console.log(sum(1)(2)(3)(4)());

// output:10
