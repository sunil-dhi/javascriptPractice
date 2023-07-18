// Given an array of integers, return the smallest positive integer not in it
// or example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return.

// method-1 with O(n^2) complexity

function solution(A) {
    for (i = 1; i < 1000000; i++) {
      if(!A.includes(i)) return i;
    }
  }
  console.log(solution([2,6,1,3,5]))
 
//   output:4

//   method-1 using Set
//  with O(n) complexity

function solution2(A){
let set=new Set(A);
let x=1;
while(set.has(x)){
    x++
}
return x;
}
console.log(solution2([1,2,5,6]))

// output: 3