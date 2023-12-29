function trekking(input) {
    let groupsCount = input.shift();
    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let peopleCount = 0;
    for (let i = 0; i < groupsCount; i++) {
        peopleCount += Number(input[i]);
        if (input[i] <= 5) {
            musala += Number(input[i]);
        } else if (input[i] <= 12) {
            monblan += Number(input[i]);
        } else if (input[i] <= 25) {
            kilimanjaro += Number(input[i]);
        } else if (input[i] <= 40) {
            k2 += Number(input[i]);
        } else if (input[i] >= 41) {
            everest += Number(input[i]);
        }
    }
    console.log(`${((musala / peopleCount) * 100).toFixed(2)}%`);
    console.log(`${((monblan / peopleCount) * 100).toFixed(2)}%`);
    console.log(`${((kilimanjaro / peopleCount) * 100).toFixed(2)}%`);
    console.log(`${((k2 / peopleCount) * 100).toFixed(2)}%`);
    console.log(`${((everest / peopleCount) * 100).toFixed(2)}%`);
}
trekking(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"])
trekking(["5", "25", "41", "31", "250", "6"])