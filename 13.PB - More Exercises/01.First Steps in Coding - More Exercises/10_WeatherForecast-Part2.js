function weatherForecast(input) {
    if (input[0] < 5 || input[0] > 35) {
        console.log('unknown');
    } else if (input[0] < 12) {
        console.log("Cold");
    } else if (input[0] < 15) {
        console.log(`Cool`);
    } else if (input[0] < 20.01) {
        console.log(`Mild`);
    } else if (input[0] < 26) {
        console.log(`Warm`);
    } else if (input[0] <= 35) {
        console.log(`Hot`);
    }
}
weatherForecast([16.5])
weatherForecast([8])
weatherForecast([22.4])
weatherForecast([26])
weatherForecast([0])