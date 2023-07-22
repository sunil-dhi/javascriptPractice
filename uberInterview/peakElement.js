// Given an array arr[] of integers. Find a peak element i.e. an element that is not smaller than its neighbors. 
// Note: For corner elements, we need to consider only one neighbor. 
// Example:
// Input: array[]= {5, 10, 20, 15}
// Output: 20
// Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20.


function peakElement(arr){
 for(let i=1;i<arr.length-1;i++){
    if(arr[i]>arr[i-1]&& arr[i]>arr[i+1])
    return arr[i];
 }


}
console.log(peakElement([1,5,75,3,18,79,5,6]));

// output:75