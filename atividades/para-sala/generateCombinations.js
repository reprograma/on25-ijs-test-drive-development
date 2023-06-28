function generateCombinations(word) // função que gera todas as combinações possíveis com as letras de uma palavra
{
    const chars = []; // um array vazio
    for (let x = 0, y = 1; x < word.length; x++, y++) // o for passa pela palavra 
    {
        chars[x] = word.substring(x, y); // e separa as letras
    }
    const combinations = []; // uma array vazia que vai armazenar a combinação
    let temp = ""; // string vazia, usada para construir cada combinação temporária
    const combinationsLen = Math.pow(2, chars.length);

    for (let i = 0; i < combinationsLen; i++) //faz um for dentro da combinations, para ver todas as combinações possíveis
    {
        temp = "";
        for (let j = 0; j < chars.length; j++) { // verifica se a combinação já existe
            if ((i & Math.pow(2,j))){
                temp += chars[j];
            }
        }
        if (temp !== "") // se a variável não estiver vazio
        {
            combinations.push(temp); // coloca as combinações aqui com o push
        }
    }

    return combinations;
}

console.log(generateCombinations("cat")) // pensando que o que importa é a combinação das letras e não a ordem, TAC = CAT
module.exports = generateCombinations