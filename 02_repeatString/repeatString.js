const repeatString = function (str, times) {
    // Verificar si times es un número no negativo
    if (typeof times !== 'number' || times < 0) {
      return 'ERROR';
    }
  
    let result = '';
    for (let i = 0; i < times; i++) {
      result += str;
    }
  
    return result;
  };
  
  module.exports = repeatString;