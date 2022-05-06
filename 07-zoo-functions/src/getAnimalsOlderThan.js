const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const bicho = species.find((specie) => specie.name === animal);
  return bicho.residents.every((resident) => resident.age >= age);
}
module.exports = getAnimalsOlderThan;
