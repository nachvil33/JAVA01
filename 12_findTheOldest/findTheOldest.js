const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const currentYear = new Date().getFullYear();
        const age = (person.death || currentYear) - person.birth;
        const oldestAge = (oldest.death || currentYear) - oldest.birth;
        return age > oldestAge ? person : oldest;
    });
};

module.exports = findTheOldest;