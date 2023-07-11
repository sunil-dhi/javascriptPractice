//Array method
// creates new array fro original array

let salaries=[2000,2500,8500,5500,4000];
const newSalaries=salaries.map(salary=>{
    return salary*(3/2);
})
console.warn(newSalaries);

//length of new array is alwas equal to past array