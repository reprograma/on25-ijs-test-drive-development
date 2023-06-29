function fibonacciSeq(index, tamanho){
    const fibonacci = [0, 1];

    //começando com o índice 2, pq o valor do índice 0 é 0 e do índice 1 é 1, como setamos ali na const
    for(let i = 2; i <= index + tamanho; i++){
        //esta é a fórmula oficial do fibonacci
        fibonacci[i] = fibonacci[i - 1] + fibonacci[1 - 2];
    }
    //console.log(fibonacciSeq(6, 7)) --> no caso, o tamanho é 13, aí printaria o seguinte array a partir do índice 6 (valor 8) até o índice 13 (que é o tamanho que estipulamos, valor 144):
    //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

    //slice pega a partir de um determinado índice
    fibonacci.slice(index, index + tamanho);
}

module.exports = fibonacciSeq;