function fibonacciSeq(index, tam) {
    const fibonacci = [0, 1];

    for(let i = 2; i <= index + tam; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci.slice(index, index + tam)
}

module.exports = fibonacciSeq