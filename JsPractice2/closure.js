  const parent=(name)=>{
    let coins=3;
    return ()=>{
     coins-=1;
     if(coins>0){
        console.log(`${name} has ${coins} coins  left`);
     }
     else{
        console.log(`${name} has ${coins} coins left`)
     }
    }
  }

  let son=parent('son');
  let daughter=parent('daughter');
  son();
  son();
  son();
  daughter();
  daughter()

//   output:
// son has 2 coins left
// son has 1 coins left
// son has 0 coins left
// daughter has 2 coins left
// daughter has 1 coins left