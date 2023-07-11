//array method

//findindex

//function is executed for each element of the array
//it return "index" of that element which first pass test
//otherwise -1

let ages=[12,1,25,28,65,5,23];
let resulted=ages.findIndex(ele=>{
    return ele>15;
})
console.log(resulted)