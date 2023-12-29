function histogram(input) {
    let count = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for (let i = 1; i < input.length; i++) {
        if (input[i] < 200) {
            p1 += 1;
        } else if (input[i] < 400) {
            p2 += 1;
        } else if (input[i] < 600) {
            p3 += 1;
        } else if (input[i] < 800) {
            p4 += 1;
        } else {
            p5 += 1;
        }
    }
    console.log(`${(p1 / count * 100).toFixed(2)}%`);
    console.log(`${(p2 / count * 100).toFixed(2)}%`);
    console.log(`${(p3 / count * 100).toFixed(2)}%`);
    console.log(`${(p4 / count * 100).toFixed(2)}%`);
    console.log(`${(p5 / count * 100).toFixed(2)}%`);
}
histogram(["3", "1", "2", "999"])
histogram(["7", "800", "801", "250", "199", "399", "599", "799"])
histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"])
histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"])