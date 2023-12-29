function account(input) {
    let i = 0;
    let total = 0;
    while (input[i] !== "NoMoreMoney") {
        let income = Number(input[i]);

        if (income <= 0 || isNaN(income)) {
            console.log(`Invalid operation!`);
            break;
        }
        total += income;
        console.log(`Increase: ${income.toFixed(2)}`);
        i++;
    }
    console.log(`Total: ${total.toFixed(2)}`);
}
account(["5.51", "69.42", "100", "NoMoreMoney"]);
account(["120", "45.55", "-150"])