let ar=[2,5,8,3,21,3,2,1,45,3]
console.log(ar.sort((a,b)=>{return a-b}))

/// gives output in ascending order
///output:  [1, 2, 2, 3, 3, 3, 5, 8, 21, 45]


let ar1=[2,5,8,3,21,3,2,1,45,3]
console.log(ar1.sort((a,b)=>{return b-a}))

//gives output in descending order
//output:[45, 21, 8, 5, 3, 3, 3, 2, 2, 1]

let str1=['banana','hello','sunil','sushila','sushili','sushilali'];
console.log(str1.sort())

// output:   ['banana', 'hello', 'sunil', 'sushila', 'sushilali', 'sushili']
let str2=['banana','hello','sunil','sushila','sushili','sushilali'];
let r=str2.sort()
console.log(r.reverse())


// output: using reverse method we can have descending ordered string
// ['sushili', 'sushilali', 'sushila', 'sunil', 'hello', 'banana']