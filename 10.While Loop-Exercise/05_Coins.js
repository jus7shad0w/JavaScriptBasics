function coins(input) {
    let clientChange = Number(input[0]);
    const coins = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    let changeCount = 0;
    let i = 0;

    while (clientChange > 0) {
        changeCount += Math.floor(clientChange / coins[i]);
        clientChange = (clientChange % coins[i]).toFixed(2);
        i++;
    }
    console.log(changeCount);
}
coins(["1.23"]);
coins(["2"])
coins(["0.56"])
coins(["2.73"])