const findTheOldest = function(arr) {
  return arr
    .reduce((a,b) => {
    if (!a.hasOwnProperty('yearOfDeath')) {
      a.yearOfDeath = new Date().getFullYear();
    }
    if (!b.hasOwnProperty('yearOfDeath')) {
      b.yearOfDeath = new Date().getFullYear();
    }

    const aAge = a.yearOfDeath - a.yearOfBirth;
    const bAge = b.yearOfDeath - b.yearOfBirth;

    return aAge > bAge ? a : b;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
