function abc(name){
this.name=name;
this.getName=()=>this.name;
}

let a=new abc('Sunil dhiman')
console.log(a.getName())

// function abc(name) {
//     this.name = name;
//     this.getName = () => this.name;
//   }
//   const p = new abc("Lubana");
//   console.log(p.getName());