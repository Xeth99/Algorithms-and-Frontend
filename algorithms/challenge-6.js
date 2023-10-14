function fizzBuzz(num) {
    if (num % 3 == 0){
        return "fizz";
      }
      else if(num % 5 == 0){
        return "buzz";
      }
      else if (num % 3 == 5 && num % 5 == 3){
        return "fizzbuzz";
      }
      else if(num /! 3 || num /! 5){
        return num;
      }
      else{
        return "false";  
      }
 }
 return fizzBuzz()

// module.exports = fizzBuzz();
