const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const diasTrabalho = Object.keys(hours);
const horas = Object.values(hours);
const objEntradas = Object.entries(hours);
const animais = ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants'];
const infoKey = ['officeHour', 'exhibition'];

function CriarCalendario() {
  const setCalendario = {};
  objEntradas.forEach((day) => {
    setCalendario[day[0]] = { [infoKey[0]]: '', [infoKey[1]]: '' };
  });
  return setCalendario;
}

function horario() {
  const calend = CriarCalendario();
  diasTrabalho.forEach((day, i) => {
    calend[day][infoKey[0]] = `Open from ${horas[i].open}am until ${horas[i].close}pm`;
  });
  return calend;
}

function exibe() {
  const calend = horario();
  diasTrabalho.forEach((day, i) => {
    calend[day][infoKey[1]] = species.filter((el) => el.availability.includes(day))
      .map((el2) => el2.name);
  });
  calend.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return calend;
}
function getAnimalDay(animal) {
  return species.find((el) => el.name.includes(animal)).availability;
}
console.log(getAnimalDay('penguins'));

function getDay(target) {
  const agenda = exibe();
  const animalDia = { [target]: agenda[target] };
  return animalDia;
}

function getSchedule(target) {
  if (animais.includes(target)) {
    return getAnimalDay(target);
  }
  if (diasTrabalho.includes(target)) {
    return getDay(target);
  } return exibe();
}
console.log(getSchedule(''));
module.exports = getSchedule;
