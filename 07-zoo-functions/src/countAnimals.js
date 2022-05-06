const { species } = require('../data/zoo_data');

function countAnimals(animal = {}) {
  if (Object.keys(animal).length === 0) {
    const objeto = {};
    species.forEach((element) => {
      objeto[element.name] = element.residents.length;
    });
    return objeto;
  }
  if (Object.keys(animal).length === 1) {
    return species.find((element) => element.name === animal.specie).residents.length;
  }
  if (Object.keys(animal).length === 2) {
    return species.find((element) => element.name === animal.specie)
      .residents.filter((sex) => sex.sex === animal.sex).length;
  }
}
module.exports = countAnimals;
