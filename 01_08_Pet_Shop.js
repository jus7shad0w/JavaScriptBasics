function zoo (input) {
    let dogFoodPack = Number(input[0]);
    let catFoodPack = Number(input[1]);

    let totalCost =  dogFoodPack * 2.50 + catFoodPack * 4;

    let result = `${totalCost} lv.`
    console.log(result);
}
zoo (["13","9"])