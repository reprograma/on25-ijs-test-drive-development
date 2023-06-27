const contaBancaria = {
    titular: "Nome do Titular",
    saldo: 0,
    limite: 0,
  
    consultarSaldo: () => contaBancaria.saldo,
  
    realizarSaque: (valor) => {
      let resultadoSaque = {};
  
      if (contaBancaria.saldo >= valor) {
        contaBancaria.saldo -= valor;
        resultadoSaque.sucesso = true;
      } else if (contaBancaria.saldo + contaBancaria.limite >= valor) {
        const limiteUtilizado = valor - contaBancaria.saldo;
        contaBancaria.saldo = 0;
        contaBancaria.limite -= limiteUtilizado;
        resultadoSaque.sucesso = true;
      } else {
        resultadoSaque.sucesso = false;
      }
  
      resultadoSaque.saldoAtual = contaBancaria.saldo;
      return resultadoSaque;
    },
  
    realizarDeposito: (valor) => {
      contaBancaria.saldo += valor;
    },
  
    ajustarLimite: (novoLimite) => {
      contaBancaria.limite = novoLimite;
    },
  
    desativarLimite: () => {
      contaBancaria.limite = 0;
    }
  };