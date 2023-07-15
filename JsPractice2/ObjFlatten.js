const obj = {
    name: "Toshal",
    lastName: "Lubana",
    address: {
        pincode: 134107,
        houseNumber: 469,
        fullAddress: {
            full: "chandimandir"
        }
    }
  }
  
  // Output
  // const obj = {"name": "Toshal","lastName":"Lubana","address.pincode": "134107","address.houseNumber": 469, "address.fullAddress.fullAddress":"chandimandir"}
  
  function objFlatten(obj,addingDot = '',output = {}){
    for(let key in obj){
        let k = `${addingDot}${key}`;
        if(typeof obj[key] == "object"){
            objFlatten(obj[key],`${k}.`,output);
        }else{
            output[k] = obj[key];
        }
    }
    return output;
  }
  console.log(objFlatten(obj));