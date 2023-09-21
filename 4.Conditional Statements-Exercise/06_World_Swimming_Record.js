function worldRecord(input) {
    const swimRecord = Number(input[0]);
    const distance = Number(input[1]);
    const timePerOneMeter = Number(input[2]);
    let waterResistens = Math.floor(distance / 15) * 12.5;
    let swimTime = (distance * timePerOneMeter) + waterResistens;

    if (swimTime < swimRecord) {
        console.log(`Yes, he succeeded! The new world record is ${swimTime.toFixed(2)} seconds.`)
    } else
        console.log(`No, he failed! He was ${(swimTime - swimRecord).toFixed(2)} seconds slower.`);
}
worldRecord(["10464", "1500", "20"])