const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const diasTrabalho = Object.keys(hours);
const horas = Object.values(hours);
const objEntradas = Object.entries(hours);
const animais = ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants'];
const infoKey = ['officeHour', 'exhibition'];

// aqui foi criado o objeto vazio e definido seu esqueleto por meio do OBJentradas.
function criaCalendario() {
  const setCalendario = {};
  objEntradas.forEach((day) => {
    setCalendario[day[0]] = { [infoKey[0]]: '', [infoKey[1]]: '' };
  });
  return setCalendario;
}
console.log(criaCalendario());

// preenchendo o OfficeHours no objeto.
function horario() {
  const calend = criaCalendario();
  diasTrabalho.forEach((day, i) => {
    calend[day][infoKey[0]] = `Open from ${horas[i].open}am until ${horas[i].close}pm`;
  });
  return calend;
}
// preenchendo o exhibition no Objeto e retornando o mesmo completo (pronto).

function exibicao() {
  const calend = horario();
  diasTrabalho.forEach((day, i) => {
    calend[day][infoKey[1]] = species.filter((el) => el.availability.includes(day))
      .map((el2) => el2.name);
  });
  calend.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return calend;
}
console.log(exibicao());

// aqui retorna os dias da semana que o animal passado por parametro se apresenta.
function getAnimalDay(animal) {
  return species.find((el) => el.name.includes(animal)).availability;
}

console.log(getAnimalDay('penguins'));

// retorna, de acordo com dia que foi passado por parametro, o horario de funcionamento e quais animais estarão em exibição.
function getDay(target) {
  const agenda = exibicao();
  const animalDia = { [target]: agenda[target] };
  return animalDia;
}
console.log(getDay('Tuesday'));

// aqui chamamos as funções de acordo com a regra de negocio, se foi passado um animal válido, se foi passado um dia válido ou se não foi passado nenhum argumento.
function getSchedule(target) {
  if (animais.includes(target)) {
    return getAnimalDay(target);
  }
  if (diasTrabalho.includes(target)) {
    return getDay(target);
  } return exibicao();
}
console.log(getSchedule(''));
module.exports = getSchedule;
