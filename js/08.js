function isLeapYear(a){
  if(a % 4 == a % 400){
    return true;
  }if( a % 4 == 0 && a % 100 != 0){
    return true;
  }
  return false;
}
