function celsiusTofahgrenheit(input) {
    let celsius = Number(input[0]);
    let result = (celsius * (9 / 5)) + 32;
    console.log(result.toFixed(2));
}
celsiusTofahgrenheit([25])
celsiusTofahgrenheit([0])
celsiusTofahgrenheit([-5.5])
celsiusTofahgrenheit([32.3])