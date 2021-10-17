const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
};
class Kalkulator {
    updateDisplay() {
        document.querySelector("#displayNumber").innerText = calculator.displayNumber;
    }
    
    clearCalculator() {
        calculator.displayNumber = '0';
        calculator.operator = null;
        calculator.firstNumber = null;
        calculator.waitingForSecondNumber = false;
    }
    
    inputDigit(digit) {
        if (calculator.displayNumber === '0') {
            calculator.displayNumber = digit;
        } else {
            calculator.displayNumber += digit;
        }
    }
    
    inverseNumber() {
        if (calculator.displayNumber === '0') {
            return;
        }
        calculator.displayNumber = calculator.displayNumber * -1;
    }
    
    handleOperator(operator) {
        if (!calculator.waitingForSecondNumber) {
            calculator.operator = operator;
            calculator.waitingForSecondNumber = true;
            calculator.firstNumber = calculator.displayNumber;
            calculator.displayNumber = '0';
        } else {
            alert('Operator sudah ditetapkan')
        }
    }
    
    performCalculation() {
        if (calculator.firstNumber == null || calculator.operator == null) {
            alert("Anda belum menetapkan operator");
            return;
        }
    
        let result = 0;
        if (calculator.operator === "+") {
            result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
        } else if (calculator.operator === "x"){
            result = parseInt(calculator.firstNumber) * parseInt(calculator.displayNumber);
        }else if (calculator.operator === "/"){
            result = parseInt(calculator.firstNumber) / parseInt(calculator.displayNumber);
        }else {
            result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
        }
    
        calculator.displayNumber = result;
    }
    
}


let obj = new Kalkulator();
const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
    button.addEventListener('click', (event)=>{

        // mendapatkan objek elemen yang diklik
        const target = event.target;

        if (target.classList.contains('clear')) {
            obj.clearCalculator();
            obj.updateDisplay();
            return;
        }

        if (target.classList.contains('negative')) {
            obj.inverseNumber();
            obj.updateDisplay();
            return;
        }

        if (target.classList.contains('equals')) {
            obj.performCalculation();
            obj.updateDisplay();
            return;
        }

        if (target.classList.contains('operator')) {
            obj.handleOperator(target.innerText);
            return;
        }

        obj.inputDigit(target.innerText);
        obj.updateDisplay();
    });
}
