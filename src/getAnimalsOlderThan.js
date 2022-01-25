const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// aqui resumi a função numa unica linha, utilizando dot notation no return de "species"
function getAnimalsOlderThan(animal, age) {
  return species.find((element) => element.name === animal).residents.every((el) => el.age >= age);
}

// console.log(bicho);// verificando o que "bicho" retorna.
console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;

// Solução Inicial**
// const bicho = species.find((element) => element.name === animal);
// console.log(bicho);// verificando o que "bicho" retorna.
// return bicho[0].residents.every((el) => el.age >= age);
