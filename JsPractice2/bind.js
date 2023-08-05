// only diff betweeb call and bind is------>>>> bind method returns a function which is invoked later

let students={
    name:'sunil dhiman',
    gender:'male',
    age:18
}

function bindd(){
    console.log(this.name+' '+this.gender +' '+this.age)
}

let res=bindd.bind(students)
console.log(res)    //it gives a function as output to print value we need to call function again
res()

// output:sunil dhiman male 18