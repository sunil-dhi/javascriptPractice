// The cost of a stock on each day is given in an array, find the max profit that you can make by buying and selling in those days. For example, if the given array is {100, 180, 260, 310, 40, 535, 695}, the maximum profit can earned by buying on day 0, selling on day 3. Again buy on day 4 and sell on day 6. If the given array of prices is sorted in decreasing order, then profit cannot be earned at all.

let a2=[7,1,5,3,6,4];
let min=a2[0]
for(let i=0;i<a.length-1;i++){
 if(a2[i+1]<min){
   min=a[i+1];
  //  console.log(min)
  console.log('best time to buy on day:',min)
  // for(let j=min;j<a.length-1;j++)
 }
}
let max=a[min]
// console.log(max)
for(let j=min;j<a.length-1;j++){
  if(a2[j+1]>max){
    max=a[j+1];
  }
  }
  console.log(max);

  console.log('Gross profit is',max-min);