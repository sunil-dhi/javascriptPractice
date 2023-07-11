//Array method
//filter method

//used to perform filteration on given array

let gifts=['chocolate','ring','watch','mobile','watch','ring'];

//if we want to filter only rings and watches 

const filteredArray=gifts.filter(gift=>{
    if(gift=='watch' || gift=='ring')
    return gift;
})
console.warn(filteredArray);

//always gives a new array as a result