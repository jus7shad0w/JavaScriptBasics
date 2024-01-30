function fishland(input) {
    let skumriaPrice = Number(input[0]);
    let cacaPrice = Number(input[1]);
    let palamudKg = Number(input[2]);
    let safrifKg = Number(input[3]);
    let midiKg = Number(input[4]);
    let palamudPrice = (skumriaPrice + (skumriaPrice * 0.6)) * palamudKg;
    let safrifPrice = (cacaPrice + (cacaPrice * 0.8)) * safrifKg;
    let midiPrice = midiKg * 7.50;
    console.log((palamudPrice + safrifPrice + midiPrice).toFixed(2));

}
fishland([6.90, 4.20, 1.5, 2.5, 1])
fishland([5.55, 3.57, 4.3, 3.6, 7])