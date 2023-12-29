function godzilaVsKong(input) {
    const moneyForMovie = Number(input[0]);
    const statistForMovie = Number(input[1]);
    const priceClothesPerStatis = Number(input[2])
    const discountForMoreThan150Statist = 0.1;
    const statistFloorDiscount = 150
    let decor = moneyForMovie * 0.1;
    let priceForClothes = (statistForMovie * priceClothesPerStatis);
    let priceForClothesWithDiscoint = 0.0;
    
    if (statistForMovie > statistFloorDiscount) {
        priceForClothesWithDiscoint = priceForClothes - (priceForClothes * discountForMoreThan150Statist);
    } else
        priceForClothesWithDiscoint = priceForClothes;
    let moneyLeft = moneyForMovie - priceForClothesWithDiscoint - decor;
    
    if (moneyLeft >= 0) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);

    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${Math.abs(moneyLeft).toFixed(2)} leva more.`)
    }
}
godzilaVsKong(["20000", "120", "55.5"])

