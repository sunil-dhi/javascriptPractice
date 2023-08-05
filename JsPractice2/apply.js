//apply method:
// only diff between call and apply method is in case of apply it accepts array as arguments

let person4={
    name:'sunil apply',
    age:25,
}
let person5={
    name:'jony',
    age:20
}

let funApply=function(state){
    console.log(this.name+' '+this.age+ state)  
}
funApply.apply(person4,['canada'])
funApply.apply(person5,['india'])
// output:  sunil apply 25undefined
//         jony 20undefined