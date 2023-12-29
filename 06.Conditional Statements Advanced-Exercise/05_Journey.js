function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = 0;
    let type = 0;
    let price = 0;
    if (budget <= 100) {
        destination = "Bulgaria";
        if (season == "summer") {
            type = "Camp";
            price = budget - (budget * 0.30);
        } else if (season == "winter") {
            type = "Hotel";
            price = budget - (budget * 0.70)
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season == "summer") {
            type = "Camp";
            price = budget - (budget * 0.40);
        } else if (season == "winter") {
            type = "Hotel";
            price = budget - (budget * 0.80)
        }
    } else if (budget > 1000) {
        destination = "Europe";
        type = "Hotel";
        price = budget - (budget * 0.90)
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${(budget - price).toFixed(2)}`);
}
journey(["50", "summer"])
journey(["75", "winter"])
journey(["312", "summer"])
journey(["678.53", "winter"])
journey(["1500", "summer"])