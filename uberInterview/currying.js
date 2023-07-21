let newArray=(arr)=>{
    // console.log(arr)
    var cache=new Array()
    for(let i=0;i<arr.length;i++){
        var product=1;
        for(let j=0;j<arr.length;j++){
            if(j!=i){
                product=product*arr[j];
            }else{}
        }
        cache.push(product)

    }
    return cache
}

console.log(newArray([1,2,3,4,5]))


// output:  [120, 60, 40, 30, 24]