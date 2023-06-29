function fibonacciSeq(index, tamanho){
    const fibonacci = [0, 1];

    //come�ando com o �ndice 2, pq o valor do �ndice 0 � 0 e do �ndice 1 � 1, como setamos ali na const
    for(let i = 2; i <= index + tamanho; i++){
        //esta � a f�rmula oficial do fibonacci
        fibonacci[i] = fibonacci[i - 1] + fibonacci[1 - 2];
    }
    //console.log(fibonacciSeq(6, 7)) --> no caso, o tamanho � 13, a� printaria o seguinte array a partir do �ndice 6 (valor 8) at� o �ndice 13 (que � o tamanho que estipulamos, valor 144):
    //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

    //slice pega a partir de um determinado �ndice
    fibonacci.slice(index, index + tamanho);
}

module.exports = fibonacciSeq;