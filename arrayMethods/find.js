//array method
//find method

//It returns the first element we'r looking for

let obj = [
    {
        id: 1,
        name: "sunnu",
        age: 28,
      },
  {
    id: 1,
    name: "sunil",
    age: 28,
  },
 
  {
    id: 2,
    name: "jony",
    age: 27,
  },
];

const resl=obj.find(ele=>{
    return ele.id===1
})

console.log(resl)