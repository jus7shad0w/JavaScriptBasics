function house(input) {
    let house = Number(input[0]);
    let priseForHouse = house * 7.61;
    let discount = 0.18;
    let discountForHouse = priseForHouse * discount;
    let resultForHouse = priseForHouse - discountForHouse;

    console.log (`The final price is: ${resultForHouse} lv.`);
    console.log (`The discount is: ${discountForHouse} lv.`);
}
house (["550"])