function vacation(input) {
    let vacationCost = Number(input[0]);
    let money = Number(input[1]);
    let daysSpendingMoney = 0;
    let daysCount = 0;
    let i = 2;
    while (i < input.length) {
        daysCount++;
        if (input[i] == "spend") {
            money -= Number(input[i + 1]);
            if (money < 0) {
                money = 0;
            }
            daysSpendingMoney++;
            if (daysSpendingMoney >= 5) {
                console.log(`You can't save the money.`);
                console.log(`${daysCount}`);
                return;
            }
        } else if (input[i] == "save") {
            money += Number(input[i + 1]);
            daysSpendingMoney = 0;
            if (money >= vacationCost) {
                console.log(`You saved the money for ${daysCount} days.`);
                return;
            }
        }
        i += 2;
    }
}
// vacation(["2000", "1000", "spend", "1200", "save", "2000"])
// vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"])
vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"])