

function parse(str,rules)
{
    //TODO: Split
    let input = str.split(' ').map(s => s.trim());
    let stack = [];
    let output = [];

    for(let token of input)
    {
        if(token == '(')
        {
            stack.push(token);
            continue;
        }

        if(token == ')') 
        {
            while(stack.top() != '(') output.push(stack.pop());
            stack.pop();
            continue;
        }

        if(rules.isop(token))
        {
            while(rules.optype(stack.top()) >= rules.optype(token)) output.push(stack.pop());
            stack.push(token);
            continue;
        }

        output.push(token);
    }

    while(stack.length) output.push(stack.pop());

    return output;
}

module.exports = parse;