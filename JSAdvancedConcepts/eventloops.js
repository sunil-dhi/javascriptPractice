// JavaScript is a single-threaded programming language which
//  means that only one task can run at a time. It has a call 
//  stack and all the code is executed inside this call stack.

console.log('First!');

setTimeout(function second(){
    console.log('Timed Out!')
}, 1000)

console.log('Final!');     ///output:  first,final,timed out!