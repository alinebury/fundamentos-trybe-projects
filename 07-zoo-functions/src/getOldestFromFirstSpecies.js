const { species } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(ids) {
  const emp = employees.find((element) => element.id === ids).responsibleFor[0];
  const bicho = species.find((specie) => specie.id === emp)
    .residents.sort((a, b) => b.age - a.age)[0];

  return Object.values(bicho);
}

module.exports = getOldestFromFirstSpecies;
