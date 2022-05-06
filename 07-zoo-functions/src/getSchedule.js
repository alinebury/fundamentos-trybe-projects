const { species, hours } = require('../data/zoo_data');

function weeks(day) {
  if (day === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  return { [day]: {
    officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
    exhibition: species.filter((element) => element.availability.includes(day))
      .map((element) => element.name),
  } };
}
function allDays(days) {
  const obj = {};
  for (let index = 0; index < days.length; index += 1) {
    if (days[index] === 'Monday') {
      obj[days[index]] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      obj[days[index]] = {
        officeHour: `Open from ${hours[days[index]].open}am until ${hours[days[index]].close}pm`,
        exhibition: species.filter((element) => element.availability.includes(days[index]))
          .map((element) => element.name) };
    }
  }
  return obj;
}
function getSchedule(scheduleTarget) {
  const days = Object.keys(hours);
  const animals = species.map((element) => element.name);
  if (animals.find((element) => element === scheduleTarget)) {
    return species.find((element) => element.name === scheduleTarget).availability;
  }
  if (days.find((element) => element === scheduleTarget)) {
    return weeks(scheduleTarget);
  }
  return allDays(days);
}

module.exports = getSchedule;
