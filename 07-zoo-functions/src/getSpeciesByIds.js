const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const sp = [];
  if (ids.length === 0) {
    return [];
  }
  for (let index = 0; index < ids.length; index += 1) {
    sp.push(species.find((specie) => specie.id === ids[index]));
  }
  return sp;
}
module.exports = getSpeciesByIds;
