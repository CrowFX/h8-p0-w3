function balikString(str) {
    var _str = '';
    for (var i = str.length - 1; i >= 0; i--) {
        _str += str[i];
    }
    return _str;
}

console.log(balikString('"Hello World!"'));