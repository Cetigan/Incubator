function rangeOfNumbers(startNum, endNum) {
   if (startNum > endNum)
      return []
   else {
      const a = rangeOfNumbers(startNum, endNum - 1)
      a.push(endNum)
      return a;
   }




};
console.log(rangeOfNumbers(5,6))