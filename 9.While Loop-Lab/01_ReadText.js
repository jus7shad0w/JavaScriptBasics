function text(input) {
    let i = 0;
    while (input[i] !== "Stop" && i < input.length) {
        console.log(input[i]);
        i++;
    }
}
text(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"])
text(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"])