const assert = require('chai').assert;

// Tests
describe("General tests", () => {
    it("Can initilaze", () => {
        const exps = require('../boss');
        const calc = exps();
        assert.isFunction(calc);
    });
});
