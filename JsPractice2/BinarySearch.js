//finding minimum element of the array using binary search



let BinaryFun=function(nums){
   let SortedArray=nums.sort((a,b)=>{return a-b})
   console.log(SortedArray);
   let start=0;
   let end=SortedArray.length-1;
   while(start<end){
    let mid=Math.floor((start+end)/2);
    if(SortedArray[mid]>SortedArray[end]){
        start=mid+1;
    }else{
        end=mid;
    }
   }
   return SortedArray[start]
}



console.log(BinaryFun([20,400,100,9,23,54,12,90,57,10]))