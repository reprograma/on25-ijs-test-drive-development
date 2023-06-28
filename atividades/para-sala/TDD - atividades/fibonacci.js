function fibonacciSeq(index, tamanho) {
    const fibonacci = [0,1]

    for (let i = 2; i<= index + tamanho; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    }

    return fibonacci.slice(index, index + tamanho)
}

console.log(fibonacci(6,7))

module.exports = fibonacciSeq