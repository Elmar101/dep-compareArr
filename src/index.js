let arr1 =[10,20,30,40];

let arr2 =[10,20,30,40];

function depArrCompare(arr1,arr2){
  if(arr1.length === arr2.length){
    return arr1.every((dep , i) => dep === arr2[i])
  }
  return false;
}

console.log( depArrCompare(arr1,arr2) )


