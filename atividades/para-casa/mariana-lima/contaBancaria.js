class ContaBancaria {
    constructor(nome, saldo, limite) {
        this.nome = nome;
        this.saldo = saldo;
        this.limite = limite;
    }

    getSaldo() {
        return this.saldo
    }

    ativarOuDesativarLimite(ativar) {
        if(ativar === false) {
            return this.limite = "Limite desativado."
        }
        return this.limite
    }

    getLimite() {
        return this.limite
    }

    setDeposito(valorDoDeposito) {
        return this.saldo = this.saldo + valorDoDeposito
    }

    setLimite(aumentarOuDiminuir, valor) {
        if(this.ativarOuDesativarLimite() == "Limite desativado.") {
            return "Para editar o valor do limite, você precisa ativá-lo."
        } if(aumentarOuDiminuir == 'aumentar') {
            return this.limite += valor
        } if(aumentarOuDiminuir == 'diminuir') {
            return this.limite -= valor
        }
        return this.limite
    }

    saque(valorDoSaque) {
        let limiteTotalDaConta = this.saldo + this.limite

        if(this.saldo < valorDoSaque) {
            if(limiteTotalDaConta < valorDoSaque) {
                return "Você não tem saldo nem limite disponível."
            }
            limiteTotalDaConta -= valorDoSaque

            return this.saldo -= valorDoSaque
        }
        if(this.saldo >= valorDoSaque) {
            return this.saldo -= valorDoSaque
        }
    }
}

module.exports = ContaBancaria