function calculateFoodCost(dogFoodPacks, catFoodPacks) {
   
    const dogFoodPrice = 2.50;
    const catFoodPrice = 4.00;

    const totalCost = (dogFoodPacks * dogFoodPrice) + (catFoodPacks * catFoodPrice);

    console.log(`${totalCost} lv.`);
}

calculateFoodCost("5", "4");