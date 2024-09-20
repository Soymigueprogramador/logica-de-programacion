// Creamos un campo para ingresar los datos.
const temperaturaFahrenheit = parseFloat(prompt('Ingresa la temperatura en grados Fahrenheit'));

// Fórmula para convertir los grados Fahrenheit a grados Celsius.
const temperaturaCelsius = (temperaturaFahrenheit - 32) * (5 / 9);

// Paso extra para redondeamos el resultado.
const temperaturaCelsiusRedondeada = Math.round(temperaturaCelsius);

// Mostramos el resultado por consola.
console.log(`El resultado en Celsius es: ${temperaturaCelsiusRedondeada}`);
