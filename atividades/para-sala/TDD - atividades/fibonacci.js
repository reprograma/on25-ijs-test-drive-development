const fibonacci = (index, tam) => {
    const fibonacciSeq = [0, 1];

    for(let i = 2; i <= index + tam; i++){
        fibonacciSeq[i] = fibonacciSeq[i - 1] + fibonacciSeq[i - 2];
    }

    return fibonacciSeq.slice(index, index + tam);

}
//os dois números fibonacci(6,7) são o 6 que significa o index do array. por exemplo: quero o número que está na posição 6 no array
// o número 7 são quantos elementos tem a partir do index, no caso, 6. Por exemplo: [0,1,2,3,4,5,6,7,8,9,10,11,12,13] -> o index é 6 a partir dele, quero 7 números
module.exports = fibonacci;