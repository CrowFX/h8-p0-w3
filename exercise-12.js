function tentukanDeretGeometri(arr) {
    let check = true;
    for (let i = arr.length - 1; i >= 2; i--) {
        if (arr[i] / arr[i-1] === arr[i-1] / arr[i-2]) {
            check = true;
        } else {
            check = false;
            break;
        }
    }
    return check;
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false