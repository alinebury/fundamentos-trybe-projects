function isManager(id) {
  const manangers = ['9e7d4524-363c-416a-8759-8aa7e50c0992',
    'fdb2543b-5662-46a7-badc-93d960fdc0a8', '0e7b460e-acf4-4e17-bcb3-ee472265db83'];
  return manangers.some((mn) => mn === id);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return ['Burl Bethea', 'Ola Orloff', 'Emery Elser'];
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
