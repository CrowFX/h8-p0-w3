function angkaPalindrome(num) {
    var _num = num + 1;
    var check = false;
    while (check == false) {
        var _stringNum = '';
        var stringNum = String(_num);
        for (var j = stringNum.length - 1; j >= 0; j--) {
            _stringNum += stringNum[j];
        }
        _num++;
        if (stringNum == _stringNum) {
            check = true;
        }
    }
    return _num - 1;
}



// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
