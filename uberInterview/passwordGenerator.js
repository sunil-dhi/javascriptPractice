let randomPassword=(length)=>{
  let password='';
  let charset='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  for(let i=0;i<length;i++){
    
    let randomIndex=Math.floor(Math.random()*charset.length);
    console.log(randomIndex)
    password+=charset[randomIndex]
  }
  return password
}


console.log(randomPassword(10))

// output: Ko2pXTkGNi