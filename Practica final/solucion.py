# Creamos un campo para ingresar los datos.
temperaturaFahrenheit = float(input('Ingresa la temperatura en grados Fahrenheit: '))

# Fórmula para convertir los grados Fahrenheit a grados Celsius.
temperaturaCelsius = (temperaturaFahrenheit - 32) * (5 / 9)

# Paso extra para redondeamos el resultado.
temperaturaCelsiusRedondeada = round(temperaturaCelsius)

# Mostramos el resultado por consola.
print(f'El resultado en Celsius es: {temperaturaCelsiusRedondeada}')