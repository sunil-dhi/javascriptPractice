// call methods

// call method is basically used to change the reference of this in function and objects

let person={
    name:'sunil',
    age:25,
    fun:function(){
        console.log(this.name +' '+this.age) ;
    }
} 
 person.fun()                                                  
//    output: sunil 25

  let person2={
    name:'jony',
    age:26
  }   
  
  person.fun.call(person2)

  output: jony 26