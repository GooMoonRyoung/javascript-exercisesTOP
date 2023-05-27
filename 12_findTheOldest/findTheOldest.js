const findTheOldest = function(people) {
    let oldest
    let oldestAge = 0 
    for (let x in people){
        let age = 0
        if (!people[x].yearOfDeath){
            age = 2023 - people[x].yearOfBirth
        }else{
            age = people[x].yearOfDeath - people[x].yearOfBirth
        }
        if (age > oldestAge){
            oldest = people[x]
            oldestAge = age
        }
    }
    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
