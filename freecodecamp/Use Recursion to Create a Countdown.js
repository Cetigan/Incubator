function countdown(n) {
   if (n < 1)
      return []
   else {
      const a = countdown(n - 1)
      a.unshift(n)
      return a;
   }

}