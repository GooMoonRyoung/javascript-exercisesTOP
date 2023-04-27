const palindromes = function (a) {
    //filters string input for anything that isn't an a-z character and removes it
    for (const i in a){
        if (!(a[i].toLowerCase() != a[i].toUpperCase())){
            a.slice(i, 1)
        }
    }
    let middle = Math.round(a.length / 2)
    console.log(middle)
};

// Do not edit below this line
module.exports = palindromes;
