function mergeArrays(arr1, arr2) {
  let a =[...arr1,...arr2]
   a.sort(function (a, b) {
      return a - b;
   })
 /* for (let i =0 ; i< a.length;i++){
    if (a[i]== a[i+1]){splice(a[i])}}

   
  
  return a;*/
   let uniАrr = [...new Set(a)];
   return uniАrr
}
console.log(mergeArrays([1,10,3,4,5],[5,6,7,8]))