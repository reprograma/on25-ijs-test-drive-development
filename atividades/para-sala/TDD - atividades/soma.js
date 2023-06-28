// A função soma dois números, caso os números sejam iguais, a soma é triplicada

function sum(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 3;
      } else {
        return num1 + num2;
      }
}

module.exports = sum