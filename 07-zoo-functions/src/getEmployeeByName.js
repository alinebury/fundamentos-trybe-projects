const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((emp) => emp.firstName === employeeName || emp.lastName === employeeName);
}
module.exports = getEmployeeByName;
