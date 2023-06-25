function bankAccount(amount) {
    //fazer refatoração ternario

    const accountBalance = 10000
    const overdraftsPositive = 55000

    if (accountBalance < amount) {


        if (overdraftsPositive >= amount) {
            const withdrawal = overdraftsPositive - amount
            const bankStatement = 10000 -amount
            return 'Saque realizado ' + withdrawal + 'sua conta se encontra negativa'+ bankStatement
        }
    }

    if (accountBalance >= amount) {
        const withdrawal = accountBalance - amount
        return 'Saque realizado ' + withdrawal
    }
   

}

module.exports = bankAccount