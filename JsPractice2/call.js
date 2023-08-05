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

      