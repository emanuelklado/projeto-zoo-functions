const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((manager) => manager.managers.includes(id));
}
// teste com manager falso
// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees.filter((element) => element.managers.includes(managerId))
      .map((empregado) => `${empregado.firstName} ${empregado.lastName}`);
    // metodo anterior usando forEach.
    // const array = [];
    // objEmpregado.forEach((element) =>
    //   array.push(`${element.firstName} ${element.lastName}`));
    // return array;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
