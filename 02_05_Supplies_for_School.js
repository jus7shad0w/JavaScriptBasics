function moneyToCollect(input) {
    let penCost = 5.80;
    let markerCost = 7.20;
    let cleanerCost = 1.20;
    let pensNeeded = Number(input[0]);
    let marketNeeded = Number(input[1]);
    let cleanerNeeded = Number(input[2]);
    let discount = Number(input[3]) / 100;

    let price = (penCost * pensNeeded) + (markerCost * marketNeeded) + (cleanerCost * cleanerNeeded);
    let discountForAll = price * discount;
    let priseWithDiscount = price - discountForAll;

    console.log(priseWithDiscount);
}
moneyToCollect(["2", "3", "4", "25"])