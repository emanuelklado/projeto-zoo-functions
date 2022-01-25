const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const empregado = employees.find((pessoa) =>
    pessoa.firstName === employeeName || pessoa.lastName === employeeName);
  return empregado;
}

console.log(getEmployeeByName());
module.exports = getEmployeeByName;
