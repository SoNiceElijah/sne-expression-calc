
const DOPERATIONS = [['+','-'],['*','/']];
const DACTIONS = { '+' : (a,b) => a + b, '-' : (a,b) => a - b, '*' : (a,b) => a * b, '/' : (a,b) => a / b };
const DVALIDATE = function (token) { return parseFloat(token); }

class Rules {

    isop(op)
    {
        for(let ops of this.operations) if(ops.includes(op)) return true;
        return false;
    }

    optype(op)
    {
        if(op === null) return -1000;
        if(op === '(') return -1000;
        let idx = -1;
        while(!this.operations[++idx].includes(op));
        return idx;
    }

    make(op, left, right)
    {
        if(!this.actions[op]) return 0;
        return this.actions[op](left,right);
    }

    select(tokens)
    {
        let selected = [];
        for(let token of tokens)
        {
            if(!this.isop(token)) selected.push(this.validate(token));
            else selected.push(token);
        } 

        return selected;
    }

    constructor(ops,acts,val)
    {
        this.operations = DOPERATIONS.slice();
        this.actions =  Object.assign({},DACTIONS);
        this.validate =  DVALIDATE;

        if(ops) this.operations = ops.slice();
        if(acts) Object.assign(this.actions, acts);
        if(val) this.validate = val;
    }
}

Array.prototype.top = function() { return this.length ? this[this.length - 1] : null; }
module.exports = Rules;
