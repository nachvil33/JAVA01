// palindromes.js

// Función para comprobar si una cadena es un palíndromo
function palindromes(str) {
    // Convertimos la cadena a minúsculas y eliminamos caracteres no alfabéticos
    str = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Include numbers in the regular expression
    
    // Comparamos la cadena original con su versión invertida
    return str === str.split('').reverse().join('');
}

// Exportamos la función para que pueda ser utilizada en otros archivos
module.exports = palindromes;