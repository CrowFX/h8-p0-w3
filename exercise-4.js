var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(insert) {
    insert.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA International Metro");
    console.log(insert);
    var date = insert[3].split("/");
    switch (parseInt(date[1])) {
        case 1:
            month = 'Januari';
            break;
        case 2:
            month = 'Februari';
            break;
        case 3:
            month = 'Maret';
            break;
        case 4:
            month = 'April';
            break;
        case 5:
            month = 'Mei';
            break;
        case 6:
            month = 'Juni';
            break;
        case 7:
            month = 'Juli';
            break;
        case 8:
            month = 'Agustus';
            break;
        case 9:
            month = 'September';
            break;
        case 10:
            month = 'Oktober';
            break;
        case 11:
            month = 'Novermber';
            break;
        case 12:
            month = 'Desember';
            break;
        default:
            month = 'Bulan tidak valid';
            break;
    }
    console.log(month);
    var date2 = date.join('-')
    var _date = date.sort(function (valueOne, valueTwo) {
        return valueTwo - valueOne
    });
    console.log(_date);
    console.log(date2);
    console.log(insert[1].slice(0, 15));
}

dataHandling2(input);