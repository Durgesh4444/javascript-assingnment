//30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

let num1 = parseInt(prompt("enter first num"));
let num2 =  parseInt(prompt("enter second num"));
let operator = prompt("enter operator") ;
let result;

switch (operator) {
    case '+':
        result = num1 + num2;
        alert(result);
        break;

    case '-':
        result = num1 - num2;
        alert(result);
        break; 
        
    case '*':
        result = num1 * num2;
        alert(result);
        break;  
        
    case '/':
        result = num1 / num2;
        alert(result);
        break;
        
    default:
        alert("Invalid Operator");
          break;   
}

