function fishingBoat(input) {
    const moneyForBoat = Number(input[0]);
    const season = input[1];
    const fishermanCount = Number(input[2]);

    const springPrice = 3000;
    const summerPrice = 4200;
    const autumnPrice = 4200;
    const winterPrice = 2600;

    let discount = calculatedDiscount();

    let price = 0;
    let finalPrice = 0;
    let aditionalDiscount = 0;

    if (fishermanCount % 2 === 0 && season !== "Autumn") {
        aditionalDiscount = 5;
    }
    function calculatedDiscount() {
        let discount;
        if (fishermanCount <= 6) {
            discount = 10;
        } else if (fishermanCount <= 11) {
            discount = 15;
        } else if (fishermanCount >= 12) {
            discount = 25;
        }
        return discount;
    }
    switch (season) {
        case "Spring": price = springPrice; break;
        case "Summer": price = summerPrice; break;
        case "Autumn": price = autumnPrice; break;
        case "Winter": price = winterPrice; break;
    }
    finalPrice = price - price * (discount / 100);
    let finalSum = finalPrice - finalPrice * (aditionalDiscount / 100);
    if (finalSum <= moneyForBoat) {
        console.log(
            `Yes! You have ${(moneyForBoat - finalSum).toFixed(2)} leva left.`
        );
    } else {
        console.log(
            `Not enough money! You need ${(finalSum - moneyForBoat).toFixed(2)} leva.`
        );
    }
}
fishingBoat(["3000", "Summer", "11"])
fishingBoat(["3600", "Autumn", "6"])
fishingBoat(["2000", "Winter", "13"])