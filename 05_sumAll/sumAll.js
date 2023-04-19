const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 ){
        return 'ERROR'
    }
    if ((typeof num1) !== 'number' || (typeof num2)!== 'number' ){
        return 'ERROR'
    }

    let lowerNum
    let higherNum

    if (num1 > num2){
        lowerNum = num2
        higherNum = num1
    } else{
        lowerNum = num1
        higherNum = num2
    }
    
    let sum = 0
    for (let i = lowerNum; i <= higherNum; i++){
        sum += i
    }
    console.log(sum)
    return sum
};

// Do not edit below this line
module.exports = sumAll;
