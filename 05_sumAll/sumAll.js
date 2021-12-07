const sumAll = function(start, end) {
  if (start < 0 || end < 0 || typeof start != 'number' || typeof end != 'number') return 'ERROR';
  const range = [];
  if (start < end) {
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
  } else {
    for (let i = end; i <= start; i++) {
      range.push(i);
    }
  }
  let sum = 0;
  range.forEach(num => sum += num);

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
