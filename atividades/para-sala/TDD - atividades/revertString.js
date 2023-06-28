function reverse(str) {
   return str.split("").reverse().join("")
   

}

module.exports = reverse

// //function reverse(str) { // usando for
//     let word = ''; // começa com uma string vazia
//     for (let i = str.length - 1; i >= 0; i--) // percorre o for ao contrário
//       word += str[i]; // vai adicionando a string vazia
//     return word;
//   }

