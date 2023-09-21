function delivery(input) {
    let chickenCost = 10.35;
    let fishCount = 12.40;
    let vegetables = 8.15;
    let deliveryCost = 2.50;
    let chickenOrder = chickenCost * Number(input[0]);
    let fishOrder = fishCount * Number(input[1]);
    let vegetableOrder = vegetables * Number(input[2]);

    let allOrders = chickenOrder + fishOrder + vegetableOrder;
    let desertCost = allOrders * 0.20;
    let finalPrice = allOrders + desertCost + deliveryCost;

    console.log(finalPrice)
}
delivery(["2", "4", "3"]);