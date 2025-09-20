const num = document.querySelectorAll(".number")
const operator = document.querySelectorAll(".operator")
const display = document.querySelector("#display")
const equals = document.querySelector("#equals")
const on = document.querySelector("#on")
const clear = document.querySelector("#clear")
const percentage = document.querySelector("#percentage")
const plusMinus = document.querySelector("#plus-minus")
const decimal = document.querySelector("#decimal")

let operand1 = 0
let operand2 = 0
let result = 0
let oper = ""
let count = 0

num.forEach((item) => {
    item.addEventListener("click", () => {
        display.innerHTML += item.innerHTML
    })
})

operator.forEach((item) => {
    item.addEventListener("click", () => {
        count = 0
        operand1 = Number(display.innerHTML)

        oper = item.innerHTML

        display.innerHTML = ""
    })

})

equals.addEventListener("click", () => {
    count = 0
    operand2 = Number(display.innerHTML)

    if (oper === "+") {
        result = operand1 + operand2
        display.innerHTML = result
        operand1 = result
        operand2 = ""
    }
    else if (oper === "-") {
        result = operand1 - operand2
        display.innerHTML = result
        operand1 = result
        operand2 = ""
    }
    else if (oper === "x") {
        result = operand1 * operand2
        display.innerHTML = result
        operand1 = result
        operand2 = ""
    }
    else if (oper === "/") {
        result = operand1 / operand2
        display.innerHTML = result
        operand1 = result
        operand2 = ""
    }
})

on.addEventListener("click", () => {
    display.innerHTML = ""
})

clear.addEventListener("click", () => {

    if (display.innerHTML === "Infinity" ||
        display.innerHTML === "-Infinity" ||
        display.innerHTML === "NaN") {
        display.innerHTML = ""
    }
    else {
        display.innerHTML = display.innerHTML.slice(0, -1)
    }

})

percentage.addEventListener("click", () => {
    display.innerHTML = display.innerHTML / 100
})

plusMinus.addEventListener("click", () => {
    display.innerHTML *= -1
})

decimal.addEventListener("click", () => {
    if (count === 0) {
        display.innerHTML += decimal.innerHTML
        count++
    }
})