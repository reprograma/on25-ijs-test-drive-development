function getChange(amount, coins) {

    if (amount === 0){ // verifica se o amount é zero
        return [] // se for isso o troco já foi dado, não há mais moedas
    } else { // se não
        if (amount >= coins[0]) { // esse amount é maior ou igual ao valor da primeira moeda da lista, acessada pelo índice zero
        left = (amount - coins[0]);
        return [coins[0]].concat(getChange(left, coins))
    } else {
        coins.shift();
        return getChange (amount, coins)
    }

    }
}

let amount = 47
let coins = [25, 10, 5, 1] // a ordem do valor das moedas modifica o resultado

let change = getChange(amount, coins)

console.log(change)

module.exports = getChange