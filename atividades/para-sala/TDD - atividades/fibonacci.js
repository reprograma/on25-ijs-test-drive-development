const fibonacci = (num) => {
    if(num <= 1) return 1;
    
    //conta com os �ndices para realizar a soma dos valores:
    return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = fibonacci