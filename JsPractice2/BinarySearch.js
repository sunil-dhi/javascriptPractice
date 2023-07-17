//finding minimum element of the array using binary search



// let BinaryFun=function(nums){
//    let SortedArray=nums.sort((a,b)=>{return a-b})
//    console.log(SortedArray);
//    let start=0;
//    let end=SortedArray.length-1;
//    while(start<end){
//     let mid=Math.floor((start+end)/2);
//     if(SortedArray[mid]>SortedArray[end]){
//         start=mid+1;
//     }else{
//         end=mid;
//     }
//    }
//    return SortedArray[start]
// }

let BinaryFun1=function(nums2)
{
    let sorted=nums2.sort((a,b)=>{return a-b})
    console.log(sorted)
    let start=sorted[0]
    let end =sorted.length-1
    console.log(start)       
    //output: minimum element would be 9;
    console.log(sorted[end])
    //maximum element would be 400
}


console.log(BinaryFun1([20,400,100,9,23,54,12,90,57,10]))