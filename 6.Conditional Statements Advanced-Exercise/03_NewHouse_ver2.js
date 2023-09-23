function newHouse(input) {
    let flowersInput = input[0];
    let flowersCountInput = Number(input[1]);
    let moneyInput = Number(input[2]);

    let roses = 5;
    let dahlias = 3.80;
    let tulips = 2.80;
    let narcissus = 3;
    let gladiolus = 2.50;

    let flowerPrice = 0;
    let moneyLeft = 0;

    switch (flowersInput) {
        case "Roses":
            flowerPrice = flowersCountInput * roses;
            if (flowersCountInput > 80) {
                flowerPrice -= flowerPrice * 0.1;
            }
            break;
        case "Dahlias":
            flowerPrice = flowersCountInput * dahlias;
            if (flowersCountInput > 90) {
                flowerPrice -= flowerPrice * 0.15;
            }
            break;
        case "Tulips":
            flowerPrice = flowersCountInput * tulips;
            if (flowersCountInput > 80) {
                flowerPrice -= flowerPrice * 0.15;
            }
            break;
        case "Narcissus":
            flowerPrice = flowersCountInput * narcissus;
            if (flowersCountInput < 120) {
                flowerPrice += flowerPrice * 0.15;
            }
            break;
        case "Gladiolus":
            flowerPrice = flowersCountInput * gladiolus;
            if (flowersCountInput < 80) {
                flowerPrice += flowerPrice * 0.2;
            }
            break;
    }
    moneyLeft = moneyInput - flowerPrice;
    if (moneyLeft >= 0) {
        console.log(`Hey, you have a great garden with ${flowersCountInput} ${flowersInput} and ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${Math.abs(moneyLeft).toFixed(2)} leva more.`);
    }
}
newHouse(["Roses", "55", "250"])
newHouse(["Tulips", "88", "260"])
newHouse(["Narcissus", "119", "360"])