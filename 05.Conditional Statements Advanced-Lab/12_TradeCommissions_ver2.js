function tradeCommissions(input) {
    let cityInput = input[0];
    let sellsInput = Number(input[1]);
    let commision = 0.0;
    if (sellsInput > 0) {
        switch (cityInput) {
            case "Sofia":
                if (sellsInput >= 0 && sellsInput <= 500)
                    commision = (sellsInput * 0.05).toFixed(2);
                else if (sellsInput > 500 && sellsInput <= 1000)
                    commision = (sellsInput * 0.07).toFixed(2);
                else if (sellsInput > 1000 && sellsInput <= 10000)
                    commision = (sellsInput * 0.08).toFixed(2);
                else
                    commision = (sellsInput * 0.12).toFixed(2);
                break;
            case "Varna":
                if (sellsInput >= 0 && sellsInput <= 500)
                    commision = (sellsInput * 0.045).toFixed(2);
                else if (sellsInput > 500 && sellsInput <= 1000)
                    commision = (sellsInput * 0.075).toFixed(2);
                else if (sellsInput > 1000 && sellsInput <= 10000)
                    commision = (sellsInput * 0.10).toFixed(2);
                else
                    commision = (sellsInput * 0.13).toFixed(2);
                break;
            case "Plovdiv":
                if (sellsInput >= 0 && sellsInput <= 500)
                    commision = (sellsInput * 0.055).toFixed(2);
                else if (sellsInput > 500 && sellsInput <= 1000)
                    commision = (sellsInput * 0.08).toFixed(2);
                else if (sellsInput > 1000 && sellsInput <= 10000)
                    commision = (sellsInput * 0.12).toFixed(2);
                else
                    commision = (sellsInput * 0.145).toFixed(2);
                break;
            default:
                commision = "error";
        }
    } else
        commision = "error"
    console.log(commision);
}
tradeCommissions(["Sofia", "1500"])
tradeCommissions(["Plovdiv", "499.99"])
tradeCommissions(["Varna", "3874.50"])
tradeCommissions(["Kaspichan", "-50"])
tradeCommissions(["Kaspichan", "50"])