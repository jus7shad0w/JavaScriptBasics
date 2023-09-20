function basketballEquipment(input) {
    let traningCost = Number(input[0]);
    let basketballShoes = traningCost - (traningCost * 0.4);
    let basketballclotes = basketballShoes - (basketballShoes * 0.2);
    let ballPrice = basketballclotes / 4;
    let accessoriess = ballPrice / 5;

    let finalPrice = traningCost + basketballShoes + basketballclotes + ballPrice + accessoriess;

    console.log(finalPrice)
}
basketballEquipment(["365"])