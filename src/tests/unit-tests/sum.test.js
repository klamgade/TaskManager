const Calculate = require('../../routes/handlers/calculate')

test("add 1 + 2 to equal 3", () => {
    let calculate = new Calculate();
    expect(calculate.sum(1,2)).toBe(3);
})