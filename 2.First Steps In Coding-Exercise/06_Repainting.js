function repaint(input) {
    let naelon = Number(input[0]);
    let paint = Number(input[1]);
    let razreditel = Number(input[2]);
    let hours = Number(input[3]);
    let naelonPrice = 1.50;
    let paintPrice = 14.50;
    let razreditelPrice = 5;
    let extraPaint = 0.1;
    let priceForBags = 0.40;

    let naelonAmount = naelon + 2;
    let paintAmout = (paint * extraPaint) + paint;
    let priceForNaelon = naelonAmount * naelonPrice;
    let priceForPaint = paintAmout * paintPrice;
    let priceForRazreditel = razreditel * razreditelPrice;
    let sum = priceForNaelon + priceForPaint + priceForRazreditel + priceForBags;
    let workerSalary = (sum * 0.30) * hours;
    let finalPrice = sum + workerSalary;
    console.log(finalPrice);
}
repaint(["10", "11", "4", "8"]) 