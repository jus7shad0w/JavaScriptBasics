function market(input) {
    let vegetables = Number(input[0]);
    let fruits = Number(input[1]);
    let vegetablesKg = Number(input[2]);
    let fruitsKg = Number(input[3]);
    let euro = 1.94;
    let vegetablePrice = (vegetables * vegetablesKg) / euro;
    let fruitPrice = (fruits * fruitsKg) / euro;
    console.log((vegetablePrice + fruitPrice).toFixed(2));
}
market([0.194, 19.4, 10, 10])
market([1.5, 2.5, 10, 10])