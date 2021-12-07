const reverseString = function(str) {
  const ans = [];
  for (let i = str.length - 1; i >= 0; i--) {
    ans.push(str[i]);
  }
  return ans.join('');
};

// Do not edit below this line
module.exports = reverseString;
