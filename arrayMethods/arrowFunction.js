


// let age = prompt("What is your age?", 18);

// let welcome = (age < 18) ?
//   () => alert('Hello!') :
//   () => alert("Greetings!");

// welcome();

//multiline arrow function

// let sum = (a, b) => {  // the curly brace opens a multiline function
//     let result = a + b;
//     return result; // if we use curly braces, then we need an explicit "return"
//   };
  
//   alert( sum(1, 2) ); // 3


//arrow function in object
 let a,b;
let item={
    name:"anil",
    getName:function(a,b)
    {
        console.warn("normal",a+b)
    },
    getNameArrow:()=>{
        console.log("arrow",this)
    }
}


item.getName(2,2);
item.getNameArrow();
