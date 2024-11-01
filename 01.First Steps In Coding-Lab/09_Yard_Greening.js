function yardGreening(workSpace) {

    const singlePrice = 7.61;
    const discountPercent = 0.18;
    let calculation = singlePrice * workSpace;

    console.log(`The final price is: ${calculation - (calculation * discountPercent)} lv.`);
    console.log(`The discount is: ${calculation * discountPercent} lv.`);


}

yardGreening(["550"])
yardGreening(["150"])