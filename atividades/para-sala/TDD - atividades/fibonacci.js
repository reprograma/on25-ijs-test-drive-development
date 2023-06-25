
function fibonacci (n) {
    if (n > 2) {
    return fibonacci (n - 1) + fibonacci (n - 2);
    }
    return n - 1;
   }
   //Fibonacci
    //should return 1 as the 3rd Fibonacci number

  module.exports = fibonacci