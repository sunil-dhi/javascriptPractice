const ageMap = new Map([
    ['Jack', 20],
    ['Alan', 34],
    ['Bill', 10],
    ['Sam', 9]
  ]);
  console.log(ageMap)

//   output: Map(4) {'Jack' => 20, 'Alan' => 34, 'Bill' => 10, 'Sam' => 9}

// Method 1: map.keys()  
console.log(ageMap.keys())  
// output : {'Jack', 'Alan', 'Bill', 'Sam'}

// Method 2 :map.values()
console.log(ageMap.values())
// output:{20, 34, 10, 9}

// Method 3:Map.enteries()
console.log(ageMap.entries());

// output : {'Jack' => 20, 'Alan' => 34, 'Bill' => 10, 'Sam' => 9}

