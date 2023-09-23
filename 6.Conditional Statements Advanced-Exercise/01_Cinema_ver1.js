function cinema(input) {
    let type = input[0];
    let row = Number(input[1]);
    let collons = Number(input[2]);
    let price = 0;
    switch (type) {
        case "Premiere": price = 12; break;
        case "Normal": price = 7.50; break;
        case "Discount": price = 5.00; break;
    }
    console.log(((row * collons) * price).toFixed(2));
}
cinema(["Premiere", "10", "12"])
cinema(["Normal", "21", "13"])
cinema(["Discount", "12", "30"])
