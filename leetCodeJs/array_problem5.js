var maxSubArray = function(nums) {
    let sum = 0,
     result = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = Math.max(0, sum + nums[i]);
        result = Math.max(sum, result);
    }
    return result ;
};

let nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));

// output:6
