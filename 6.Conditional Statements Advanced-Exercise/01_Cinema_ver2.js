function cinema(input) {
    let typeInput = input[0];
    let lineInput = Number(input[1]);
    let collonesInput = Number(input[2]);
    let premiereCost = 12;
    let normalCost = 7.50;
    let discountCost = 5;
    let seats = lineInput * collonesInput;
    let income = 0.0;
    if (typeInput === "Premiere")
        income = (seats * premiereCost);
    else if (typeInput === "Normal")
        income = (seats * normalCost);
    else if (typeInput === "Discount")
        income = (seats * discountCost)
    console.log(`${income.toFixed(2)} leva`);
}
cinema(["Premiere", "10", "12"])
cinema(["Normal", "21", "13"])
cinema(["Discount", "12", "30"])