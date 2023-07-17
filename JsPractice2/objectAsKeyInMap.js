let newMap=new Map();
newMap.set('name','sunil');
newMap.set('gender','male');

let obj3={name:'jony'};
newMap.set(obj3, true);

console.log(newMap)

// Create an empty object
const funObj = {};

// add a property. Note, passing the key as a number.
funObj[360] = 'My House Number';

// It returns true because the number 360 got converted into the string '360' internally!
console.log(funObj[360] === funObj['360']);
console.log(newMap.has('name'))     /**map search for element with key "name" */
console.log(newMap.delete('gender'))
console.log(newMap)    /**deleted gender key element */
newMap.clear();
console.log(newMap)   /**output: Map(0) {size: 0}  deleted all the key and elements in map */  
