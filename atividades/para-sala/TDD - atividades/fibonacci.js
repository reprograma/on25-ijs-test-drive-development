const fibonacci = (num) => {
    if (num < 2) return num;
  
    let prev = 0;
    let current = 1;
  
    for (let i = 2; i <= num; i++) {
      const temp = current;
      current += prev;
      prev = temp;
    }
  
    return current;
  };
  
  module.exports = fibonacci;
  