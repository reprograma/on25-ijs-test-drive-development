function checkEvenNumber(num){ // recebe um parâmetro que é o número
    let result = ''; // inicia o resultado vazio

    if(isNaN(num)) { // se não for um número
        result = num + " não é um número"; 
    } else { // se for um número
        if (num % 2 == 0) { // dividir o número por 2 e retorna 0
            result = num + " é um número par";
        } else { // se não
            result = num + " é um número ímpar";
        }
    }

    return result;
}

module.exports = checkEvenNumber