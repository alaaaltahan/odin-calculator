// first and second number
let number_1  = document.querySelector("#firstNumber");
let number_2  = document.querySelector("#secondNumber");

let operator  = document.querySelector("#operator");
let result = document.querySelector("#result");

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

function operate(){
    let firstNumber = parseInt(number_1.value);
    let secondNumber = parseInt(number_2.value);
    switch (operator.value){
        case "+" :
        result.textContent = add(firstNumber, secondNumber);
        break;
        case "-" :
        result.textContent = minus(firstNumber, secondNumber);
        break;
        case "*" :
        result.textContent = times(firstNumber, secondNumber);
        break;
        case "/" :
        result.textContent = divide(firstNumber, secondNumber);
        break;

        default:
            alert("please enter oneof the following operator: +, -, *, /")
    }
}
let calculate = document.querySelector("#calculate")
calculate.addEventListener("click", ()=>{
    operate()
})