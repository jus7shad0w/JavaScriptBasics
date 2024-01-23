function piramid(input) {
    let n = Number(input[0]);
    let curNum = 1;
    let isBiger = false;
    let printline = "";
    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (curNum > n) {
                isBiger = true;
                break;
            }
            printline += curNum + " ";
            curNum++;
        }
        console.log(printline);
        printline = "";
        if (isBiger) {
            break;
        }
    }
}
piramid(["7"])
// piramid(["12"])
// piramid(["15"])