//not optimized

// function moveZero(arr){
//   let arr1=[]
//   let zeroArr1=[];
//   for(let i=0; i<arr.length;i++){
//     if(arr[i]==0){
//       zeroArr1.push(arr[i])
//     }
//     else{
//       arr1.push(arr[i])
//     }
//   }
//   return [...arr1, ...zeroArr1]
// }
// console.log(moveZero([2,3,0,5,0,2,1]));

// optimize
function moveZero(arr) {
  let c = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[c]] = [arr[c], arr[i]];
      c++;
    }
  }
  return arr;
}
console.log(moveZero([8, 0, 10, 20, 0, 10]));
