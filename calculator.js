
function getNumber(num) { /*Adds number to input screen*/
    var inputVar = document.getElementById("input");
    switch (num) {
        case 1:
            inputVar.value += "1";
            break;
        case 2:
            inputVar.value += "2";
            break;
        case 3:
            inputVar.value += "3";
            break;
        case 4:
            inputVar.value += "4";
            break;
        case 5:
            inputVar.value += "5";
            break;
        case 6:
            inputVar.value += "6";
            break;
        case 7:
            inputVar.value += "7";
            break;
        case 8:
            inputVar.value += "8";
            break;
        case 9:
            inputVar.value += "9";
            break;
        case 0:
            inputVar.value += "0";
            break;
    }
}

function clearScreen() {
    document.getElementById("input").value = "";
}

function getOperand(operator) { /*Adds oporator to input screen*/
    var inputVar = document.getElementById("input");
    switch (operator) {
        case "+":
            inputVar.value += "+";
            break;
        case "-":
            inputVar.value += "-";
            break;
        case "*":
            inputVar.value += "*";
            break;
        case "/":
            inputVar.value += "/";
            break;
        case "+/-":
            inputVar.value = "-" + inputVar.value;
            break;
        case ".":
            inputVar.value += ".";
            break;
    }
}

function compute() { /*calculate the value of the string in the input*/
    var inputVar = document.getElementById("input");
    answer = eval(inputVar.value);
    document.getElementById("input").value = answer;
}
function precentage() { /*calculate the precentage of the string in the input*/
    var inputVar = document.getElementById("input");
    answer = eval(inputVar.value);
    answer1 = answer / 100;
    document.getElementById("input").value = answer1;
}
