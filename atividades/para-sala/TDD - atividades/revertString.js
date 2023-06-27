// function reverse(str) {
//   return str.split("").reverse().join('')}

function reverse(str) {
    let word = '';
    for (let i = str.length - 1; i >= 0; i--)
      word += str[i];
    return word;
  }

module.exports = reverse