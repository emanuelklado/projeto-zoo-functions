const { species, hours, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// na função usou-se o filter para retornar o elemento que contenha o ID solicitado.
function getSpeciesByIds(...ids) {
  return species.filter((element) => ids.includes(element.id));
}

module.exports = getSpeciesByIds;
