const findTheOldest = require('./findTheOldest');

describe('Find the Oldest', () => {
    it('should find the oldest person with a death date', () => {
        const people = [
            { name: 'John', birth: 1980, death: 2022 },
            { name: 'Alice', birth: 1975, death: 2020 },
            { name: 'Bob', birth: 1960, death: 2010 },
        ];
        const oldest = findTheOldest(people);
        expect(oldest.name).toBe('John');
    });

    it('should find the oldest person without a death date', () => {
        const people = [
            { name: 'Eve', birth: 1990 },
            { name: 'Alice', birth: 1975, death: 2020 },
            { name: 'Bob', birth: 1960, death: 2010 },
        ];
        const oldest = findTheOldest(people);
        expect(oldest.name).toBe('Alice');
    });

    it('should return null for an empty array', () => {
        const people = [];
        const oldest = findTheOldest(people);
        expect(oldest).toBe(null);
    });
});