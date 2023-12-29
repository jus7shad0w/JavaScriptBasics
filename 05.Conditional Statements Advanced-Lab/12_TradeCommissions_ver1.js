function tradeCommissions(input) {
    let city = input[0];
    let sells = Number(input[1]);
    let commission = 0;
    let cityCheck = true;

    if (sells <= 0) {
        console.log("error");
        return;
    } else if (sells <= 500) {
        switch (city) {
            case "Sofia": commission = 0.05; break;
            case "Varna": commission = 0.045; break;
            case "Plovdiv": commission = 0.055; break;
            default: cityCheck = false; break;
        }
    } else if (sells <= 1000) {
        switch (city) {
            case "Sofia": commission = 0.07; break;
            case "Varna": commission = 0.075; break;
            case "Plovdiv": commission = 0.08; break;
            default: cityCheck = false; break;
        }
    } else if (sells <= 10000) {
        switch (city) {
            case "Sofia": commission = 0.08; break;
            case "Varna": commission = 0.10; break;
            case "Plovdiv": commission = 0.12; break;
            default: cityCheck = false; break;
        }
    } else if (sells > 10000) {
        switch (city) {
            case "Sofia": commission = 0.12; break;
            case "Varna": commission = 0.13; break;
            case "Plovdiv": commission = 0.145; break;
            default: cityCheck = false; break;
        }
    }
    if (cityCheck == false) {
        console.log("error");
    } else {
        console.log((sells * commission).toFixed(2));
    }
}
tradeCommissions(["Sofia", "1500"])
tradeCommissions(["Plovdiv", "499.99"])
tradeCommissions(["Varna", "3874.50"])
tradeCommissions(["Kaspichan", "-50"])
tradeCommissions(["Kaspichan", "50"])

