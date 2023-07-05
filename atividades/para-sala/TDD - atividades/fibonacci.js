
<<<<<<< HEAD
function fibonacciSeq(index, tam){

    const fibonacci = [0,1];

    for(let i = 2; i <= index + tam; i++){
        fibonacci[i] = fibonacci[i - 1] + fibonacci [i - 2]
    }
    return fibonacci.slice(index, index + tam)
}

console.log(fibonacciSeq(6, 7))

module.exports = fibonacciSeq
=======
>>>>>>> 67e3fb4f323fefb153fdbb721c71526b4a58deb2
