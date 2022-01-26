const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // verificando se não foi passado nada como parametro e retornando todas as especies em formato de objeto.
  if (animal === undefined) {
    const objContainer = {};
    species.forEach((element) => { objContainer[element.name] = element.residents.length; });
    return objContainer;
  }
  // acessando o item animal que atende o requisito nome igual ao parametro espécie.
  const itemAnimal = species.find((element) => element.name === animal.specie);
  // vericando se a propriedade animal.sex existe e retornando sua quantidade.
  if (animal.sex) {
    return itemAnimal.residents.filter((element) => element.sex === animal.sex).length;
  }
  // caso o parametro animal não seja vazio ou undefined e caso a propriedade animal.sex não seja passado também, ele entra nesta condição.
  return itemAnimal.residents.length;
}
// testando a função.
console.log(countAnimals({ specie: 'bears', sex: 'male' }));
module.exports = countAnimals;
