function abc(a,b,c){
    let d;
    let f;
  let e;
  if(a*(b+c) > a*b*c){
     d = a*(b+c)
     }
     else  {d = a*b*c}
  if (a+b*c > (a+b)*c){
    i = a+b*c
  }
  else { i = (a+b)*c}
  if (d>i){f = d}
  else {f= i}
  if (f> a+b+c){return f}
  else {return a+b+c}
}