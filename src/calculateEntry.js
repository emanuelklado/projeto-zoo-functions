const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function verifyAndCountEntrants(entrants) {
  const visitors = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  // fazendo a verificação de cada elemento do objeto e incrementando a contagem de visitantes.
  entrants.forEach((element) => {
    if (element.age < 18) {
      visitors.child += 1;
    }
    if (element.age >= 18 && element.age < 50) {
      visitors.adult += 1;
    }
    if (element.age >= 50) {
      visitors.senior += 1;
    }
  });
  return visitors;
}

function countEntrants(entrants) {
  if (!entrants || Object.values(entrants).length === 0) { // tentei usar: entrants === {} mas nao funcionou, então o Cassius Bessa e Apolo Rezende me ajudou nesta logica;
    return 0;
  }
  return verifyAndCountEntrants(entrants);
}

function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) {
    return 0;
  }
  const cl = countEntrants(entrants);
  const { adult, senior, child } = prices; // desestruturando os preços para usar como variavel
  return (cl.adult * adult) + (cl.senior * senior) + (cl.child * child);
}

// console de teste passando o array de objetos de entrantes.
console.log(calculateEntry([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));
module.exports = { calculateEntry, countEntrants };
