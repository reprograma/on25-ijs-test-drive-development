function reverseString(str) {

return str.split('').reverse().join('');
}

module.exports = reverseString

/* function reverse(str) {
    let word = '';
    for (let i = str.length - 1; i >= 0; i--)
      word += str[i];
    return word;
  }
  */