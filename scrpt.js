function add(a , b){
    return a  + b
} 

function minus(a, b){
    return a - b
}

function times(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

function operate(a, operator , b){
    switch (operator){
        case "+" :
        add(a, b);
        break;
        case "-" :
        minus(a, b);
        break;
        case "*" :
        times(a, b);
        break;
        case "/" :
        divide(a, b);
        break;

        default:
            alert("please enter oneof the following operator: +, -, *, /")
    }
}