function targetTerdekat(arr) {
    let countOh = 0;
    let countEx = 0;
    let checkOh = false;
    let checkEx = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'o') {checkOh = true;}
        if (arr[i] == 'x') {checkEx = true;}
        while (checkOh == true) {
            if (arr[i] == 'x') {break;}
            countOh++;
            if (arr[i] == 'o') {countOh = 0;}
            break;
        }
        while (checkEx == true) {
            if (arr[i] == 'o') {break;}
            countEx++;
            if (arr[i] == 'x') {countEx = 0;}
            break;
        }
        if (checkOh == true && checkEx == true) {break;}
    }
    if (checkOh == true && checkEx == true) {return Math.abs(countEx - countOh) + 1;} else {return 0}
}


// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2