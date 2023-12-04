const appendValue = (value) => {
    document.getElementById('screen_input').value += value;
}

const clearScreen = () => {
    document.getElementById('screen_input').value = '';
}

const calculate = () => {
    let input = document.getElementById('screen_input').value;
    try {
        let result = calculateInput(input);
        document.getElementById('screen_input').value = result;
    } catch (error) {
        clearScreen();
        alert('Error');
    }
}

const calculateInput = (input) => {
    let regex = input.split(/([\+\-\*/])/);

    let num1 = regex[0];
    let operador = regex[1];
    let num2 = regex[2];

    // Realizar la operación correspondiente
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                alert('Error')
            }
            return num1 / num2;
    }
}