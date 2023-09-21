function toyShop(input) {
    const puzzlePrice = 2.60;
    const talkingDollPrice = 3;
    const littleBearPrice = 4.10;
    const minionPrice = 8.20;
    const truckPrice = 2;
    const discountFloor = 50;
    const discount = 0.25;
    const shopRent = 0.10;
    let discountForOrder = 0;
    const vacationCost = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let talkingDolCount = Number(input[2]);
    let littleBearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);
    let orderCost = puzzleCount * puzzlePrice + talkingDollPrice * talkingDolCount + littleBearPrice * littleBearCount + minionPrice * minionCount + truckPrice * truckCount;
    let orderCount = puzzleCount + talkingDolCount + littleBearCount + minionCount + truckCount;
    
    if (orderCount >= discountFloor) {
        discountForOrder = orderCost * discount;
    }
    let orderPrice = orderCost - discountForOrder;
    let paymentAfterRent = orderPrice - (orderPrice * shopRent);
    let moneyLeft = paymentAfterRent - vacationCost;
    
    if (moneyLeft >= 0) {
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeed = Math.abs(moneyLeft);
        console.log(`Not enough money! ${moneyNeed.toFixed(2)} lv needed.`);
    }
}
toyShop(["40.8", "20", "25", "30", "50", "10"])