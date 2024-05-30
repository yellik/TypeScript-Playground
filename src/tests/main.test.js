const sum = require('sum')

it("returns a sum of two integers", () => {
    expect(sum(1 + 2)).toEqual(3);
})

it("should return an absolute difference between a number and 19", () => {
    expect(different(20)).toBeTruthy();
})