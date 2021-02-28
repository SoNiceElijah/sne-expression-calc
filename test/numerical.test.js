const assert = require('chai').assert;
const exps = require('../boss');
const calc = exps();

describe("Numeric tests", () => {
    it("Can calculate one op expression", () => {
        let res = calc('2 + 3');
        assert.equal(res,5);
    });
    it("Can calculate two op exporession", () => {
        let res = calc('2 + 2 * 2');
        assert.equal(res,6);
    });
    it("Can calculate exp with brackets", () => {
        let res = calc('( 1 + 5 ) * ( 2 - 3 ) / 2');
        assert.equal(res,-3);
    });
});


