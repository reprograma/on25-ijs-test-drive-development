const fibonacci = (indice) => {
  if(indice <= 1) return 1;

  return fibonacci(indice - 1) + fibonacci(indice - 2)
}

module.exports = fibonacci