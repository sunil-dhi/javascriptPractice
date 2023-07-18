function closure(N){
  return function(A){
    return N+A;
  }
}  

let funN=closure(10)
console.log(funN(10));
console.log(funN(20));
console.log(funN('30'));

// output:  20
//  30
// 1030


