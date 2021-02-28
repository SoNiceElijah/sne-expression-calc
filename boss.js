const { resolve , postfix, Rules } = require('./lib/index');

function init(options)
{
    let val;
    let ops;
    let acts;

    //TODO: more checks
    if(options)
    {
        val = options.validate;
        ops = options.operators;
        acts = options.actions;
    }

    let rule = new Rules(ops,acts,val);
    
    return function(expression) {
        let tokens = postfix(expression,rule);
        let result = resolve(tokens,rule);
        return result;
    }
}

module.exports = init;
