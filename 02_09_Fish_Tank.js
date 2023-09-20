function aquarium(input) {
    let дължина = Number(input[0]);
    let ширина = Number(input[1]);
    let височина = Number(input[2]);
    let percent = Number(input[3]) / 100;
    let обем = дължина * ширина * височина;
    let litres = обем * 0.001;
    let waterNeeded = litres - (litres * percent)

    console.log(waterNeeded)
}
aquarium(["85", "75", "47", "17"])