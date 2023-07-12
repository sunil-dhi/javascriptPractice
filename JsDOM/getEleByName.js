let btn=document.getElementById("btnn");
let output=document.getElementById("output");

btn.addEventListener('click',()=>{
   let rates=document.getElementsByName('rate');
   rates.forEach((rate)=>{
    if(rate.checked){
        output.innerText=`you selected: ${rate.value}`
    }
   })
})