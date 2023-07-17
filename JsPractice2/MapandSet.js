const firstMap=new Map([
    ['name', 'sunil' ],
    ['age',90],
    ['gender','male'],
])
console.log(firstMap);

// output :   Map(3) {'name' => 'sunil', 'age' => 90, 'gender' => 'male'}

firstMap.set('writer','jony')
console.log(firstMap)    

// output: Map(4) {'name' => 'sunil', 'age' => 90, 'gender' => 'male', 'writer' => 'jony'}

firstMap.set('name', 'Replace previous value')
console.log(firstMap);

// output :Map(4) {'name' => 'Replace previous value', 'age' => 90, 'gender' => 'male', 'writer' => 'jony'}

console.log(firstMap.get('name'))