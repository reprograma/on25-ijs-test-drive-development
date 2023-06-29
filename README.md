Conta Bancária 💰

Esta aplicação implementa uma classe `bankAccount` que representa uma conta bancária. Com ela, você pode consultar o saldo, sacar, depositar e ajustar o limite da conta.

## Instalação 🛠️

Para usar esta aplicação, primeiro clone este repositório para o seu computador:

```bash
git clone https://github.com/brunardosanjos/on25-ijs-test-drive-development.git
```

Em seguida, navegue até a pasta do projeto e instale as dependências:

```bash
cd on25-ijs-test-drive-development
npm install
```

## Uso 📖

Para usar a classe `bankAccount`, primeiro importe-a para o seu código:

```javascript
const bankAccount = require("./bankAccount");
```

Em seguida, crie uma nova instância da classe, passando o nome do titular da conta, o saldo inicial e o limite inicial como argumentos para o construtor:

```javascript
let account = new bankAccount("Bruna", 2000, 2000);
```

Agora você pode usar os métodos da classe para interagir com a conta. Aqui estão alguns exemplos:

### Consultar o saldo

Para consultar o saldo da conta, use a propriedade `balance`:

```javascript
console.log(account.balance); // 2000
```

### Sacar

Para sacar da conta, use o método `withdraw`:

```javascript
account.withdraw(500);
console.log(account.balance); // 1500
```

### Depositar

Para depositar na conta, use o método `deposit`:

```javascript
account.deposit(1000);
console.log(account.balance); // 2500
```

### Ajustar o limite

Para ajustar o limite da conta, use o método `setLimit`:

```javascript
account.setLimit(3000);
console.log(account.limit); // 3000
```

### Ativar ou desativar o limite

Para ativar ou desativar o limite da conta, use o método `setStatus`:

```javascript
account.setStatus(false);
console.log(account.status); // false
```

## Testes 🧪

Esta aplicação inclui testes automatizados usando a biblioteca Jest. Para executar os testes, navegue até a pasta do projeto e execute o comando `npm test`:

```bash
cd .\atividades\para-casa\bruna-andrade
npm test contaBancaria.test.js
```

O Jest exibirá os resultados dos testes na tela.
