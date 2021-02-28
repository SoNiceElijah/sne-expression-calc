
function calculate(tokens,rules)
{
    if(!tokens.length) return;

    tokens = rules.select(tokens);

    let stack = [];

    while(tokens.length)
    {
        while(!rules.isop(tokens[0])) stack.push(tokens.shift());
        let right = stack.pop();
        let left = stack.pop();
        stack.push(rules.make(tokens[0],left,right));
        tokens.shift();
    }

    return stack[0];
}

module.exports = calculate;