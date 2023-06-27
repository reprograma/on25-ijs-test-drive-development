const fibonacci = (i) => {
  if(i <= 1) return 1;

  return fibonacci(i - 1) + fibonacci(i - 2)
}

module.exports = fibonacci