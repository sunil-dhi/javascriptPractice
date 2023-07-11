//array method
//flat method

//it creates a new array concatenated with it's subarrays


// let values=[10,20,30,[10,20,50],[[50]]]
// let newvalues=values.flat(1) //by default value is 1

// // output: [10, 20, 30, 10, 20, 50, Array(1)]

// console.log("before flat", values);
// console.log("after flat",newvalues);

let valuess=[10,20,30,[10,20,50],[[50]]]
let newvaluess=valuess.flat(2)
console.log(newvaluess);

// output:[10, 20, 30, 10, 20, 50, 50]