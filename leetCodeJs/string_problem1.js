//longest substring without repeating chars

var lengthOfLongestSubstring = function(s) {
    let len=0;
    let set=new Set();
    let i=0;
    let j=0;
    while(i<s.length && j<s.length){
        if(!set.has(s[j]))
{
    set.add(s[j]);
    len=Math.max(len,j-i+1);
    j++
} 
else{
    set.delete(s[i]);
    i++
}
   }
   return len
};

console.log(lengthOfLongestSubstring('abcabcbb'))