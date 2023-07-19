// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.
for (let i = 0; i <100; i++) {
    let f = i % 3 == 0,
      b = i % 5 == 0;
    // console.log(f ? (b?'fizzbuzz':'Fizz') : b ? 'Buzz' : i)
    if(f)console.log('fizz');
    else if(b) console.log('buzz');
    else console.log(i)
  }

