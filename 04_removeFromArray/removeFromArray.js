const removeFromArray = function(arr, ...nums) {
  const skipNums = [...nums];
  const ans = [];

  for (i = 0; i < arr.length; i++) {
    if (skipNums.includes(arr[i])) {
      continue;
    } else {
      ans.push(arr[i]);
    }
  }
  return ans;
};

// Do not edit below this line
module.exports = removeFromArray;
