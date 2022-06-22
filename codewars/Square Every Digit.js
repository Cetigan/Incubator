function squareDigits(num) {
   

   num = Array.from(String(num))
   let a = num.map(i => i * i)
   
   a = Number(a.join(""))
   return a
   }
   


squareDigits(3214442)


