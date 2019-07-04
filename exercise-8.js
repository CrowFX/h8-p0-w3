function pasanganTerbesar(num) {
    var splitted = []; //array kosong
    var strNum = String(num);
    for (var i = 0; i < strNum.length; i++) {
        var partner = strNum.slice(i, i + 2); //Assign partner dengan slice dari strNum dan refresh every loop 
        splitted.push(Number(partner)); //push partner ke array
    }
    splitted.pop();
    splitted.sort(function(a, b) {return b - a})
    return splitted[0];
}


// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99