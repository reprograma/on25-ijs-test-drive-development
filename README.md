# on25-ijs-test-drive-development
Turma ON25 - ImersãoJS - S1 - Test Drive Development

## Exercício da semana 1 - Teste Drive Developmente (TDD) 
### Conta bancária - implementando TDD 

Nesta primeira semana, abordamos o tema de testes em programação, com foco em testes unitários e TDD (Test Driven Development). 
Os testes têm como objetivo verificar se o software funciona corretamente, enquanto os testes unitários analisam partes específicas 
do código. 
O TDD envolve escrever os testes antes da implementação, o que ajuda a identificar e corrigir bugs de forma ágil, 
melhorando a qualidade do código.

## 🧾 Proposto

**Neste exercício, foi proposto criar um objeto que represente uma conta bancária. A conta deve conter as seguintes informações:**
- [x] nome do titular,
- [x] o saldo atual,
- [x] limite da conta.

**A aplicação deve permitir realizar as seguintes operações:**
- [x] consulta de saldo,
- [x] saque,
- [x] depósito,
- [ ] No caso de saque é nedecessário verificar se existe saldo suficiente para retirada,
- [x] caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível (e suficiente), o saque poderá 
ocorrer,
- [ ] nesses casos o saldo do cliente ficará negativo após o saque.
- [x] Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou
- [ ] desativado.
- [x] Use a abordagem Red - Green - Refactor para desenvolver essa aplicação**

## ✔️ Feito
- [x] Verificar saldo:
   - [x] Verifica se o consultar salto retorna saldo + limite.
   - [ ] Verificar saldo sem considerar o limite.
   - [ ] Verificar só limite.
   - [ ] Verificar saldo negativo.
   - [ ] limite desativado.
- [x] Verificar saque:
   - [x] Quando o saldo for maior que o valor do saque, subtrai do saldo e mantem o limite. 
   - [x] Quando o saldo for menor e limete maior que o valor do saque, subtrai do limite.
   - [ ] No caso de saque é nedecessário verificar se existe saldo suficiente para retirada,
- [x] Verificar deposito:
   - [x] Atualiza o saldo quando o limite ainda não foi usado.
   - [x] Atualiza o valor do limite quando o saldo está zerado e o limite já foi usado.
   - [x] Atualiza o valor do limite e o saldo.   
## 💻 Como executar teste

**Para executar os testes do projeto, siga as etapas abaixo:**

**1.** Clone este repositório.

**2.** Certifique-se de que você possui o Node.js e o npm instalados em seu sistema.

**3.** Abra o terminal e navegue até o diretório raiz do projeto.

**4.** Execute o seguinte comando para instalar as dependências do projeto:

```bash 
npm install
```
Após a conclusão da instalação, execute o seguinte comando para executar os testes:

```bash
npm test-conta-bancaria
```
Isso irá iniciar a execução dos testes automatizados e exibirá os resultados no terminal


### Resultado:

```bash
Test Suites: 1 failed, 1 total
Tests:       1 failed, 5 passed, 6 total
Snapshots:   0 total
Time:        0.617 s, estimated 1 s
```
