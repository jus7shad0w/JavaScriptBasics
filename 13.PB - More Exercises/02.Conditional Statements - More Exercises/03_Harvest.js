function harvest(input) {
    let grapeYard = Number(input[0]);
    let grape = Number(input[1]);
    let wineNeeded = Number(input[2]);
    let workers = Number(input[3]);
    let harvest = grapeYard * 0.4 * grape;
    let wineBottles = (Math.floor(harvest / 2.5));
    let remainingWine = Math.ceil(Math.abs(wineBottles - wineNeeded));
    if (wineBottles < wineNeeded) {
        console.log(`It will be a tough winter! More ${Math.floor(remainingWine)} liters wine needed.`)
    } else {
        console.log(`Good harvest this year! Total wine: ${wineBottles} liters.`);
        console.log(`${remainingWine} liters left -> ${Math.ceil(remainingWine / workers)} liters per person.`);
    }
}

harvest([650, 2, 175, 3]);
harvest([1020, 1.5, 425, 4]);
