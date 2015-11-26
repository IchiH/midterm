function toOrdinalNumber(a){
  var a;
  if (a ==1){
    return a + "st"
  }if (a ==2){
    return a + "nd"
  }if(a ==3){
    return a + "rd"
  }if(4 <= a && a < 20){
    return a + "th"
  }if(a > 20 && a % (a-1) == 1){
    return a + "st"
  }else if(a > 20 && a % (a-2) == 2){
    return a + "nd"
  }else if(a > 20 && a % (a-3) == 3){
    return a + "rd"
  }
  return a + "th"
}
