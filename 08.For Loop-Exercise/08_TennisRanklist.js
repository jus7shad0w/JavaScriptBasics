function tenis(input) {
    let tournamentCount = Number(input[0]);
    let startingPoints = Number(input[1]);
    let tournamentPoints = 0;
    let winCount = 0;
    for (let i = 2; i < input.length; i++) {
        if (input[i] == "W") {
            winCount++;
            tournamentPoints += 2000;
        } else if (input[i] == "F") {
            tournamentPoints += 1200;
        } else if (input[i] == "SF") {
            tournamentPoints += 720;
        }
    }
    console.log(`Final points: ${startingPoints + tournamentPoints}`);
    console.log(`Average points: ${Math.floor(tournamentPoints / tournamentCount)}`);
    console.log(`${((winCount / tournamentCount) * 100).toFixed(2)}%`);
}
tenis(["5", "1400", "F", "SF", "W", "W", "SF"])
tenis(["4", "750", "SF", "W", "SF", "W"])
tenis(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"])
