const palindromes = function (str) {
  const filtered = str.toLowerCase().split('')
    .filter((char) => char.match(/[a-z]/));
  const word = filtered.join('');
  const reversed = filtered.reverse().join('');
  return word == reversed;
};

// Do not edit below this line
module.exports = palindromes;
