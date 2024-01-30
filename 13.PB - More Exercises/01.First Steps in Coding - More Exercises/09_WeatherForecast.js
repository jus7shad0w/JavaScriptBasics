function weather(input) {
    if (input[0] == "sunny") {
        console.log("It's warm outside!");
    } else {
        console.log("It's cold outside!");
    }
}
weather(["sunny"])
weather(["cloudy"])
weather(["snowy"])