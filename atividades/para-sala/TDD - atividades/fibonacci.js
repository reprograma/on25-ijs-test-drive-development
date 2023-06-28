function fibonacciSeq(index, tam) {
                    // 0  1
    const fibonacci = [0, 1];
                // i = 2
    for(let i = 2; i <= index + tam; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
        //index menos 1 + index - 2 = 1
        //[0, 1, 1, 2, 3, 5]
        //for é um looping e tem uma condição pra parar ele, que é 13
    }
                            // 6      6+7 = 13
    return fibonacci.slice(index, index + tam);
}

console.log(fibonacciSeq(6, 7))

module.exports = fibonacciSeq