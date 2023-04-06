const calculatorScreen = document.querySelector(".calculatorScreen");

const updateScreen = (number) =>{
    calculatorScreen.value=number;
}

const numbers = document.querySelectorAll(".number");

let prevNumber = "";
let calculatorOperator = "";
let currentNumber = "0";

const inputNumber=(number)=>{
    if(currentNumber ==='0'){
        currentNumber = number
    } else{
        currentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event)=>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
})


//////////////////////////////
// menjalankan fusi input operation saat operator di klik
const inputOperator = (operator) =>{
    if (calculatorOperator ===""){
        prevNumber = currentNumber
    }
    calculatorOperator=operator
    currentNumber="0"
}

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event)=>{
        inputOperator(event.target.value);
    })
})

// devinisi function calculation
const calculate =() =>{
    let result = ""
    switch(calculatorOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break
        case "/":
            result = parseFloat(prevNumber) / currentparseFloat(currentNumber);
            break
        case "%":
            result = parseFloat(prevNumber) / 100 ;
            break
        default:
            break;
    }
    currentNumber=result;
    calculatorOperator="";
}

// menjaankan fungsi calculation saat tombol sama dengan di klik
const equalSign = document.querySelector(".equal-Sign");

equalSign.addEventListener("click", () =>{
    calculate();
    updateScreen(currentNumber);
    // console.log("equal button is pressed");
})

// memnjalankan tombol AC
const clearAll = () =>{
    prevNumber="" ;
    calculatorOperator="" ;
    currentNumber="0" ;
}

const clearBtn = document.querySelector(".allClear");

clearBtn.addEventListener("click", () =>{
    clearAll();
    updateScreen(currentNumber);
    // console.log('AC button is pressed');
})

//kalkulasi desimal
inputDecimal = (dot) =>{
    if(currentNumber.includes(".")){
        return;
    }
    currentNumber += dot;
}

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) =>{
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})



