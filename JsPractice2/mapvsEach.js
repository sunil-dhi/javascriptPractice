//   map method in javascript
// it return a new array with changes 

const arr=[20,30,40,10];
const result=arr.map((ele)=>{
     return ele*2;
})
console.log(result)

//forEach method
//It return a new array with changes

const nums=[20,30,10,20];
      nums.forEach((ele,i)=>{
    nums[i]= ele*2;
})

console.log(nums)