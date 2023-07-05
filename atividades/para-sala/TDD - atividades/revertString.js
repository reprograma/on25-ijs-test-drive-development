<<<<<<< HEAD
function reverse (str){
    return str.split("").reverse().join("");
}
=======
// function reverse(str) {
//   return str.split("").reverse().join('')}

function reverse(str) {
    let word = '';
    for (let i = str.length - 1; i >= 0; i--)
      word += str[i];
    return word;
  }
>>>>>>> 67e3fb4f323fefb153fdbb721c71526b4a58deb2

module.exports = reverse