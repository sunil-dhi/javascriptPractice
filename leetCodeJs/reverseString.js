//whole string is reversed

// let reverse=(s1)=>{
//    return s1.split('').reverse().join('')
// }

// console.log(reverse('sunil is a hardworking person'))


// output:linus si a drah gnikrow nosrep


var s1='sunil is a hard working person';
var res=reverse(s1, "");
console.log(res)
var res2=reverse(res, " ");
console.log(res2)
function reverse(s1,separator){
    
   return s1.split(separator).reverse().join(separator)
}


// output:  linus si a drah gnikrow nosrep



