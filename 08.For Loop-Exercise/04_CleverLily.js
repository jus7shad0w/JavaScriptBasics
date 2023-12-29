function smartLily(input) {
    const lilysAge = Number(input[0]);
    const machineCost = Number(input[1]);
    const toyPrice = Number(input[2]);

    let birthdayMoney = 0;
    let moneyFromToys = 0;
    let brotherStolenMoney = 0;

    for (let i = 1; i <= lilysAge; i++) {
        if (i % 2 === 0) {
            birthdayMoney += (i * 10) / 2;
            brotherStolenMoney++;
        } else {
            moneyFromToys += toyPrice;
        }
    }
    const collectedMoney = (birthdayMoney - brotherStolenMoney) + moneyFromToys;
    if (collectedMoney >= machineCost) {
        console.log(`Yes! ${(collectedMoney - machineCost).toFixed(2)}`);
    } else {
        console.log(`No! ${(machineCost - collectedMoney).toFixed(2)}`);
    }
}
smartLily(["10", "170.00", "6"])
smartLily(["21", "1570.98", "3"])