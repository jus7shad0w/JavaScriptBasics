function vacation(input) {

    let month = input[0];
    let days = Number(input[1]);

    let apartmentPriceTotal = 0;
    let studioPriceTotal = 0;

    if (month === 'May' || month === 'October') {
        apartmentPriceTotal = days * 65;
        studioPriceTotal = days * 50;
        if (days > 7 && days <= 14) {
            studioPriceTotal = studioPriceTotal * 0.95;
        }
        if (days > 14) {
            studioPriceTotal = studioPriceTotal * 0.7;
        }
    }

    if (month === 'June' || month === 'September') {
        apartmentPriceTotal = days * 68.70;
        studioPriceTotal = days * 75.20;
        if (days > 14) {
            studioPriceTotal *= 0.8;
        }
    }

    if (month === 'July' || month === 'August') {
        apartmentPriceTotal = days * 77;
        studioPriceTotal = days * 76;
    }


    if (days > 14) {
        apartmentPriceTotal = apartmentPriceTotal * 0.90;
    }


    console.log(`Apartment: ${apartmentPriceTotal.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPriceTotal.toFixed(2)} lv.`);
}
// vacation(["May", "15"])
// vacation(["June", "14"])
// vacation(["August", "20"])
// vacation(["January", "20"])
vacation(["August", "0"])