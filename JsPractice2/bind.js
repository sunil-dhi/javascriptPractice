// only diff betweeb call and bind is------>>>> bind method returns a function which is invoked later

let students={
    name:'sunil dhiman',
    gender:'male',
    age:18
}

function bindd(country,state){
    console.log(this.name+' '+this.gender +' '+ this.age + country + state)
}

let res=bindd.bind(students,'india','ambala')
console.log(res)    //it gives a function as output to print value we need to call function again
res()

// output:sunil dhiman male 18