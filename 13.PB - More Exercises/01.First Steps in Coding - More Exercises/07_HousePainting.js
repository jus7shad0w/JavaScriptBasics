function housePainting(input) {
    let houseHeight = Number(input[0]);
    let sideLength = Number(input[1]);
    let roofHeight = Number(input[2]);
    let frontSide = (houseHeight * houseHeight) - (1.2 * 2);
    let backSide = houseHeight * houseHeight;
    let leftSide = (houseHeight * sideLength) - (1.5 * 1.5);
    let rightSide = (houseHeight * sideLength) - (1.5 * 1.5);
    let green = (frontSide + backSide + leftSide + rightSide) / 3.4;
    let roofSide1 = (houseHeight * sideLength) * 2;
    let roofSide2 = ((houseHeight * roofHeight) / 2) * 2;
    let red = (roofSide1 + roofSide2) / 4.3;
    console.log(green.toFixed(2));
    console.log(red.toFixed(2));

}
housePainting([6, 10, 5.2])
housePainting([10.25, 15.45, 8.88])