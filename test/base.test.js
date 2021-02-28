const assert = require('chai').assert;

describe("General tests", () => {
    it("Can initilaze", () => {
        const exps = require('../boss');
        const calc = exps();
        assert.isFunction(calc);
    });
});