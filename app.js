var number1, number2, operator, result, answer, True = 0,
    False = 0;
number1 = document.getElementById("number1");
number2 = document.getElementById("number2");
operator = document.getElementById("operator");
result = document.getElementById("result");
answer = document.getElementById("answer");
True = document.getElementById("True");
False = document.getElementById("False");

function randomnumber(max, min) {
    var number = Math.floor(Math.random() * (max - min)) + min;
    return number;
}

function newquestıon() {
    var operation = ["+", "-", "*", "/"];
    operator.textContent = operation[randomnumber(0, 4)];
    number1.textContent = randomnumber(0, 50);
    number2.textContent = randomnumber(0, 50);

    if (operator.textContent == "/") {
        while (true) {
            number2.textContent = randomnumber(0, 50);
            if (number1.textContent % number2.textContent == 0) {
                break;
            }
        }
    }
}

window.onload = function () {
    newquestıon();
}
answer.onclick = function () {
    var ans, n1, n2;
    n1 = Number(number1.textContent);
    n2 = Number(number2.textContent);
    switch (operator.textContent) {

        case "+": ans = n1 + n2; break;
        case "-": ans = n1 - n2; break;
        case "/": ans = n1 / n2; break;
        case "*": ans = n1 * n2; break;
        default: break;
    }
    if (result.value == ans) {

        True.textContent = Number(True.textContent) + 1;
    } else {
        False.textContent = Number(False.textContent) + 1;
    }
    newquestıon();
    result.value = "";
} 