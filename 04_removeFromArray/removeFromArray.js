const removeFromArray = function(array, arg1, arg2, arg3, arg4) {
    let nArray = []
    array.forEach(myFunction);

    function myFunction(value) {
        if (!(value === arg1 || value === arg2 || value === arg3 || value === arg4)){
            nArray.push(value)
        }
    }
    return nArray
}
// Do not edit below this line
module.exports = removeFromArray;
