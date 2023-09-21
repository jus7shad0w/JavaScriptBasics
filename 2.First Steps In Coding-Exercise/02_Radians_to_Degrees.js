function Radians(input) {
    let Radians = Number(input[0]);
    let degrees = Radians * 180 / Math.PI;

    console.log(degrees);
}
Radians(["3.1416"]);