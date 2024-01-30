function circleArea(input) {
    let num = Number(input[0]);
    let r = parseFloat(num);
    let area = Math.PI * Math.pow(r, 2);
    let perimeter = 2 * Math.PI * r;
    let formattedArea = area.toFixed(2);
    let formattedPerimeter = perimeter.toFixed(2);

    console.log(formattedArea);
    console.log(formattedPerimeter);
}
circleArea([3]);
circleArea([4.5]);
