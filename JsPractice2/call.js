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

//   output: jony 26

//call method is used to use method in different objects. it is also known as function borrowing.

let personNew={
    name:'sunil',
    age:22
}

let fun=function(country, state){
    console.log(this.name+''+this.age + ' is from '+country+' and state ' +state)
}

let person3={
    name:'jon',
    age:20
}

 fun.call(personNew)   
// output: sunil 22
fun.call(person3)
// output: jon 20

fun.call(personNew,'india','haryana')
// output: sunil22 is from india and state haryana



