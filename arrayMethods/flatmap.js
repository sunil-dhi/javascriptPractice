let cart=[{
    name:"mobile",
    qty:2,
    price:5000,
},
{
    name:"ipad",
    qty:1,
    price:10000
}]

let newCart=cart.flatMap(item=>{
    if(item.name==='mobile'){
    return [item,{
        name:"screenGuard",
        qty:2,
        price:'complimentry'
    }]
}
    else{ [item]}
})

console.log(newCart)