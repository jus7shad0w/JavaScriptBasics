function newHouse(input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let money = Number(input[2]);
    const roses = 5;
    const dahlias = 3.80;
    const tulips = 2.80;
    const narcissus = 3;
    const gladiolus = 2.50;
    price = 0;
    if (flowerType == "Roses") {
        price = flowerCount * roses
        if (flowerCount > 80) {
            price -= price * 0.10;
        }
    } else if (flowerType == "Dahlias") {
        price = flowerCount * dahlias
        if (flowerCount > 90) {
            price -= price * 0.15;
        }
    } else if (flowerType == "Tulips") {
        price = flowerCount * tulips
        if (flowerCount > 80) {
            price -= price * 0.15;
        }
    } else if (flowerType == "Narcissus") {
        price = flowerCount * narcissus
        if (flowerCount < 120) {
            price += price * 0.15;
        }
    } else if (flowerType == "Gladiolus") {
        price = flowerCount * gladiolus
        if (flowerCount < 80) {
            price += price * 0.20;
        }
    }
    if (price <= money) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(money - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(price - money).toFixed(2)} leva more.`);
    }
}
newHouse(["Roses", "55", "250"])
newHouse(["Tulips", "88", "260"])
newHouse(["Narcissus", "119", "360"])
