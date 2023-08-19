var isValid = function(s) {
    const stack=[]
    for(let p of s)
    {
        if(p==='(') stack.push(')')
        else if(p==='{') stack.push('}')
        else if(p==='[') stack.push(']')
        else if(s.length===0 || stack.pop()!==p) return false
    }
    return stack.length===0
};

console.log(isValid('(){}]'))

// output:false