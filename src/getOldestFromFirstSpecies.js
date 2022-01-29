const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // aqui coletamos o primeiro funcionario gerenciado pelo ID parametro passado e em seguida acessei o primeiro animal gerenciado por este funcionário.
  const primeiroAnimal = employees.find((elemento) => elemento.id === id).responsibleFor[0];
  const resident = species.find((elemento) => elemento.id === primeiroAnimal).residents;
  // usando o sort para retornar o maior. no sorte usei a logica invertida para me retornar valores decrescentes.
  // link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  resident.sort((a, b) => {
    if (a.age > b.age) {
      return -1;
    }
    if (a.age < b.age) {
      return 1;
    } return 0;
  });
  return Object.values(resident[0]);
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
