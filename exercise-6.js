function angkaPalindrome(num) {
    var _num = num + 1;
    var stringNum = String(_num);
    var _stringNum = '';
    var checker = false;
    while (checker == false) {
        console.log('q');
        for (var j = stringNum.length - 1; j >= 0; j--) {
            _stringNum += stringNum[j];
        }
        if (stringNum === _stringNum) {
            checker = true;
        }
        _num++;
        }
    return _num
}

console.log(angkaPalindrome(25));

  /*
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001

  */