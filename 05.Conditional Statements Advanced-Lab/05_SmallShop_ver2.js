function shop(input) {
    let item = input[0];
    let city = input[1];
    let amount = Number(input[2]);
    let price = 0;

    if (city === "Varna") {
        if (item === "coffee") {
            price = 0.45;
        } else if (item === "water") {
            price = 0.70;
        } else if (item === "beer") {
            price = 1.10;
        } else if (item === "sweets") {
            price = 1.35;
        } else if (item === "peanuts")
            price = 1.55;

    } else if (city === "Sofia") {
        if (item === "coffee") {
            price = 0.50;
        } else if (item === "water") {
            price = 0.80;
        } else if (item === "beer") {
            price = 1.20;
        } else if (item === "sweets") {
            price = 1.45;
        } else if (item === "peanuts")
            price = 1.60; {
        }
    } else if (city === "Plovdiv") {
        if (item === "coffee") {
            price = 0.40;
        } else if (item === "water") {
            price = 0.70;
        } else if (item === "beer") {
            price = 1.15;
        } else if (item === "sweets") {
            price = 1.30;
        } else if (item === "peanuts")
            price = 1.50;
    }
    console.log(amount * price);
}
shop(["coffee", "Plovdiv", "2"])