function sequence(input) {
    let num = Number(input[0]);
    let i = 1;
    while (i <= num) {
        console.log(i);
        i = i * 2;
        i++;
    }
}
sequence(["3"])
sequence(["8"])
sequence(["17"])
sequence(["31"])