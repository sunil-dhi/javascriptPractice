// const fun1=function*(){
//     yield "a";
//     yield "b";
//     yield "c";
// }

// let str='';
// for(let i of fun1()){
//     str=str+i;
// }
// console.log(str)

function *generator(){
    yield 1;
    yield 2;
    yield 3;
}
let g=generator();
// console.log([...g])   ///[1,2,3]

console.log(g.next())                    // {value: 1, done: false}
console.log(g.next())
console.log(g.next())
console.log(g.next())          
                                     // {value: 2, done: false}
                                        //  {value: 3, done: false}
                                        // {value: undefined, done: true}


