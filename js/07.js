function distance(a,b,c,d){
  if(a == c && b == d){
    return 0;
  }if(a != c && b != d) {
　　var e, f, g;

　　e = a - c;
　　f = b - d;
　　g = Math.sqrt(Math.pow(e,2) + Math.pow(f,2));

　　return g;
}
}
