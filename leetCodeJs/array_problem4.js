function selfprodcuct(arr) {
  let resarr = [];
  let product;
  for (let i = 0; i < arr.length; i++) {
    product = 1;

    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        product *= arr[j];
      }
    }
    resarr.push(product);
  }
  return resarr;
}
let a4 = [1, 2, 3, 4];
console.log(selfprodcuct(a4));


// output:[24,12,8,6]
