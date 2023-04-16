const reverseString = function(str) {
    const array = [] 
    for (const letter of str){
        array.unshift(letter)
    }
    return array.join('')
};

// Do not edit below this line
module.exports = reverseString;
