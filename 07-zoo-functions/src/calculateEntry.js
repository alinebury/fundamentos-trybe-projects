const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const visitors = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((element) => {
    if (element.age < 18) {
      visitors.child += 1;
    }
    if (element.age >= 18 && element.age < 50) {
      visitors.adult += 1;
    }
    if (element.age >= 50) {
      visitors.senior += 1;
    }
  });
  return visitors;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const visitors = countEntrants(entrants);
  const result = visitors.adult * 49.99
+ visitors.senior * 24.99
+ visitors.child * 20.99;
  return result;
}

module.exports = { calculateEntry, countEntrants };
