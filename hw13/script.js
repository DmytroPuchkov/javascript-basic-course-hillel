
const hours = prompt(`Введіть кількість годин`);

const convertToSeconds = (hours) => hours * 3600;

const seconds = convertToSeconds(hours);

alert(`У ${hours} годинах - ${seconds} секунди`);
