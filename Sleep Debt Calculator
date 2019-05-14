const getSleepHours = (day) => {
  switch(day){
    case 'saturday':
      return 8;
    case 'sunday':
      return 5;
    case 'monday':
      return 7;
    case 'tuesday':
      return 8;
    case 'wednesday':
      return 9;
    case 'thursday':
      return 6;
    case 'friday':
      return 2;
  }
}
const getActualSleepHours = () => {
  let sum = 0;
  sum += getSleepHours('saturday');
  sum += getSleepHours('sunday');
  sum += getSleepHours('monday');
  sum += getSleepHours('tuesday');
  sum += getSleepHours('wednesday');
  sum += getSleepHours('thursday');
  sum += getSleepHours('friday');
  return sum;
}
const getIdealSleepHours = () => {
  let idealHours = 7;
  return idealHours * 7;
}
console.log(getActualSleepHours() + ' ' + getIdealSleepHours());
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours)
    console.log('you got the perfect amount of sleep');
  else if (actualSleepHours > idealSleepHours)
    console.log('you got more sleep than needed');
  else if (actualSleepHours === idealSleepHours)
    console.log('you should get some rest');
}
