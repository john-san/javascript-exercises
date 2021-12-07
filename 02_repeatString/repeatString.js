const repeatString = function(str, num) {
  if (num < 0) return 'ERROR';
  const arr = [];
  for (i = 0; i < num; i++) {
    arr.push(str);
  }
  return arr.join('');
};

// Do not edit below this line
module.exports = repeatString;
