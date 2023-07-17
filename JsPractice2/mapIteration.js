const ageMap2 = new Map([
    ['Jack', 20],
    ['Alan', 34],
    ['Bill', 10],
    ['Sam', 9]
  ]);

  console.log(ageMap2);

  ageMap2.forEach((val,key)=>{
    console.log(`${key} is ${val} years old! `)
  })

  for (const [keys,values] of ageMap2) {
    console.log(`${keys} is ${values} years old!`)
  }


//   output: Jack is 20 years old!
//   Alan is 34 years old!
//   Bill is 10 years old!
//   Sam is 9 years old!



///map to array conversion. there are two ways using .from and using spread opr.
const map = new Map();
map.set('milk', 200);
map.set("tea", 300);
map.set('coffee', 500);

console.log(Array.from(map));
console.log([...map]);
