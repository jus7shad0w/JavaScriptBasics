function travel(input) {
    let i = 0;
    let destination = input[i];
    let budget = Number(input[i + 1]);
    let savedMoney = 0;
    while (input[i] !== "End") {
        i += 2;
        while (savedMoney < budget) {
            savedMoney += Number(input[i]);
            i++;
        }
        console.log(`Going to ${destination}!`);
        destination = input[i];
        budget = Number(input[i + 1]);
        savedMoney = 0;
    }

}
travel(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"])
travel(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"])