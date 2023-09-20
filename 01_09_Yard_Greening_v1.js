function house(input) {
    let house1 = Number(input[0]);
    let house2 = Number(input[1]);
    let priseForHouse1 = house1 * 7.61;
    let priseForHouse2 = house2 * 7.61;
    let discount = 0.18;
    let discountForHouse1 = priseForHouse1 * discount;
    let resultForHouse1 = priseForHouse1 - discountForHouse1;
    let discountForHouse2 = priseForHouse2 * discount;
    let resultForHouse2 = priseForHouse2 - discountForHouse2;
    let costForTwoHouse = resultForHouse1 + resultForHouse2;
    let discountForTwoHouse = discountForHouse1 + discountForHouse2;

    console.log(`The final price for house 1 is : ${resultForHouse1} lv.`);
    console.log(`The discount for house 1 is : ${discountForHouse1} lv.`);
    console.log(`The final price for house 2 is: ${resultForHouse2} lv.`);
    console.log(`The discount for house 2 is: ${discountForHouse2} lv.`);
    console.log(`The pricse for both houses: ${costForTwoHouse} lv.`)
    console.log(`The discount for both houses: ${discountForTwoHouse} lv.`)
}
house(["550", "150"]) 