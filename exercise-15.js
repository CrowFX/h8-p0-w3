function groupAnimals(animals) {
    let result = [];
    let temp = [];
    let init = '';
    animals.sort();
    for (let i = 0; i < animals.length; i++) {
        if (animals[i][0] !== init) {
            init = animals[i][0];
            temp = [];
            temp.push(animals[i]);
        } else {temp.push(animals[i]);}
        result.push(temp);
    }
    for (let j = 0; j < result.length; j++) {
        if (result[j] == result [j-1]) {result.splice(j, j);}
    }
    return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]