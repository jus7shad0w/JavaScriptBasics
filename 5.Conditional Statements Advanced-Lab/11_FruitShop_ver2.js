function fruitShop(input) {
    let productInput = input[0];
    let dayInput = input[1];
    let countInput = Number(input[2]);
    let productCost = 0;
    if (productInput === "banana" || productInput === "apple" || productInput === "orange" || productInput === "grapefruit" || productInput === "kiwi" || productInput === "pineapple" || productInput === "grapes") {
        switch (dayInput) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
                if (productInput === "banana")
                    productCost = (countInput * 2.50).toFixed(2);
                else if (productInput === "apple")
                    productCost = (countInput * 1.20).toFixed(2);
                else if (productInput === "orange")
                    productCost = (countInput * 0.85).toFixed(2);
                else if (productInput === "grapefruit")
                    productCost = (countInput * 1.45).toFixed(2);
                else if (productInput === "kiwi")
                    productCost = (countInput * 2.70).toFixed(2);
                else if (productInput === "pineapple")
                    productCost = (countInput * 5.50).toFixed(2);
                else if (productInput === "grapes")
                    productCost = (countInput * 3.85).toFixed(2);
                console.log(productCost);
                break;
            case "Saturday":
            case "Sunday":
                if (productInput === "banana")
                    productCost = (countInput * 2.70).toFixed(2);
                else if (productInput === "apple")
                    productCost = (countInput * 1.25).toFixed(2);
                else if (productInput === "orange")
                    productCost = (countInput * 0.90).toFixed(2);
                else if (productInput === "grapefruit")
                    productCost = (countInput * 1.60).toFixed(2);
                else if (productInput === "kiwi")
                    productCost = (countInput * 3.00).toFixed(2);
                else if (productInput === "pineapple")
                    productCost = (countInput * 5.60).toFixed(2);
                else if (productInput === "grapes")
                    productCost = (countInput * 4.20).toFixed(2);
                console.log(productCost);
                break;

            default:
                console.log("error");
        }
    } else
        console.log("error");
}
fruitShop(["apple", "Tuesday", "2"])
fruitShop(["orange", "Sunday", "3"])
fruitShop(["kiwi", "Monday", "2.5"])
fruitShop(["grapes", "Saturday", "0.5"])
fruitShop(["tomato", "Monday", "0.5"])