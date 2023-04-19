const convertToCelsius = function(fahrenheit) {
  let convertTemp = (((fahrenheit - 32) * 5) / 9)
  let roundedTemp = Math.round(convertTemp * 10) / 10 
  return roundedTemp
};

const convertToFahrenheit = function(celsius) {
  let convertTemp = ((celsius * 9 / 5) + 32)
  let roundedTemp = Math.round(convertTemp * 10) / 10 
  return roundedTemp
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
