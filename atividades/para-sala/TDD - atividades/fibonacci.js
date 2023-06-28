function fibonacciSeq(index, tam) {// sequencia         0, 1, 2
                            // index da sequencia  1, 2, 3
                    // 0 1
    const fibonacci = [0, 1];
    // no exemplo que está no console, começa com index + tam = 13
    // e a cada for, vai diminuindo até o i ser igual a 2, aí para a execução
    // o i segue aumentando em cada repetição, mas a condição de parada é 13, sendo que o i começa em 2
    for (let i = 2; i<= index + tam; i++){
        fibonacci[i] = fibonacci [i - 1] + fibonacci[i - 2]
    }
                        // 6,         6 + 7
    return fibonacci.slice(index, index + tam)
    // o fibonacci vai ser um array [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]
    // aí vai dar o slice sobre isso
}

console.log(fibonacciSeq(6, 7 ))

module.exports = fibonacciSeq


// ----> A função abaixo encontra o índice e responde o valor do indíce
// const fibonacci = (indice) => {
//     if(indice <=1) return 1;
// // recebe um número
//     return fibonacci(indice -1) + fibonacci(indice -2)

// }

// module.exports = fibonacci

// console.log(fibonacci(8)) // retorna 233