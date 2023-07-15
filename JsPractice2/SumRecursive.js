// function Sum(a){
//     return function(b) {
//       if(b){
//         return Sum(a + b);
//       }
//       return a
//     }
//   }
//   console.log(Sum(1)(2)());


function sum(a){
    return function(b){
        if(b){
            return sum(a+b);
        }
        return a;
    }
}
console.log(sum(2)(3)());

////with 3 arguments below


// function sum(a){
//     return function(b){
//         return function(c){
//             if(c){
//                 return sum(a+b+c);
//             }
//             return sum(a+b);
//         }
//     }
// }

// console.log(sum(2)(3)(4))