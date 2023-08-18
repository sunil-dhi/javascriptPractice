var isAnagram = function(s, t) {
    let s1=s.split('').sort()
    let s2=t.split('').sort()
    if(s1.length!=s2.length)return false
    for(let i=0;i<s1.length;i++)
    if(s1[i]!=s2[i])
    return false;
    
     return true
};

let str1="sunil"
let str2="lusin"
console.log(isAnagram(str1,str2))

// output:true