let a=[2,7,11,1,6,5,7,3,7,9];
let target=9;
function fun(array,target){
   for(let i=0;i<a.length-1;i++){
     for(let j=i+1;j<a.length-1;j++){
       if(a[i]+a[j]===target){
         console.log(i,j);
       }
     }
   }
}
fun(a,target);