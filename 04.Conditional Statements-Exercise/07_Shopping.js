function shoping(input) {
    const moneyForShoping = Number(input[0]);
    const videoCard = Number(input[1]);
    const processor = Number(input[2]);
    const ram = Number(input[3]);
    const videoCardPrice = 250;
   
    let processorPrice = (videoCard * videoCardPrice) * 0.35;
    let ramPrice = (videoCard * videoCardPrice) * 0.10;
    let order = (videoCard * videoCardPrice) + (processor * processorPrice) + (ram * ramPrice);
    let finalPrice = 0.0;
   
    if (videoCard >= processor) {
        finalPrice = order - (order * 0.15);
    } else
        finalPrice = order;

    if (finalPrice <= moneyForShoping) {
        console.log(`You have ${(moneyForShoping - finalPrice).toFixed(2)} leva left!`);
    } else
        console.log(`Not enough money! You need ${(finalPrice - moneyForShoping).toFixed(2)} leva more!`);
}
shoping(["900", "2", "1", "3"])