///find minimum element index in sorted array rotated

var search = function(nums, target) {
    if(nums.includes(target)) return nums.indexOf(target);
    else return -1
};
console.log(search([1,2,3,5,6,9],8))

// output: -1