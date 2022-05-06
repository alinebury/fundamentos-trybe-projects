const { employees, species } = require('../data/zoo_data');

function getSpecie(id) {
  const animalId = employees.find((element) => element.id === id).responsibleFor;
  const nomes = [];
  for (let index = 0; index < animalId.length; index += 1) {
    nomes.push(species.find((element) => element.id === animalId[index]).name);
  }
  return nomes;
}

function getLocation(id) {
  const animalId = employees.find((element) => element.id === id).responsibleFor;
  const local = [];
  for (let index = 0; index < animalId.length; index += 1) {
    local.push(species.find((element) => element.id === animalId[index]).location);
  }
  return local;
}

function verificaNomes(person) {
  const func = employees
    .find((element) => element.firstName === person.name || element.lastName === person.name
    || element.id === person.id || element.firstName === person);

  if (func === undefined) {
    throw new Error('Informações inválidas');
  }
  return func;
}

function nameString(person) {
  try {
    const func = verificaNomes(person);
    const dados = {
      id: func.id,
      fullName: `${func.firstName} ${func.lastName}`,
      species: getSpecie(func.id),
      locations: getLocation(func.id),
    };
    return dados;
  } catch (error) {
    throw error.message;
  }
  // throw new Error('Informações inválidas');
}

function getEmployeesCoverage(emp = {}) {
  const people = [];
  if (Object.keys(emp).length === 0) {
    for (let index = 0; index < employees.length; index += 1) {
      people.push(nameString(employees[index].firstName));
    }
    return people;
  }
  return nameString(emp);
}
module.exports = getEmployeesCoverage;
