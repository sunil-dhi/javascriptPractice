let arr2=['a','b','c'];
let obj1=arr2.reduce(
    (acc,it,index)=> ({...acc,[index]:it}),{}

)
console.log(obj1)

// output:
// {0: 'a', 1: 'b', 2: 'c'}