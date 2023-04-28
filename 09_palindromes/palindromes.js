const palindromes = function (a) {
    //filters string input for anything that isn't an a-z character and removes it
    for (const i in a){
        if (!(a[i].toLowerCase() != a[i].toUpperCase()) || a[i]=== ' '){
            a.slice(i, 1)
            console.log(a)
        }
    }
    let even = Math.round(a.length / 2) % 2 === 0
    let middle = Math.round(a.length / 2)

    function palindrome(indicator, isEven){
        if (isEven === true){
            for (let i = 0; i < indicator; i++){
                if (a[i] === a[i + indicator]){
                    console.log(a[1])
                    continue
                } else{
                    return false
                };
            }
        } else{
            for (let i = 0; i <= indicator; i++){
                if (a[i] === a[i + indicator + 1]){
                    continue
                } else{
                    return false
                };
            }
        }
        return true
    };
    if (palindrome(middle, even) === true){
        return true
    };
};

// Do not edit below this line
module.exports = palindromes;
