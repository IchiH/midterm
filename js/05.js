


function fizzbuzz(value){
  if(value % 3 == value % 5){
    return "fizzbuzz"
  }if(value % 3 == 0){
    return "fizz"
  }if(value % 5 == 0){
    return "buzz"
  }else{
    return value
  }
}
