const input1 = document.getElementById("n1")
const input2 = document.getElementById("n2")
const answer = document.getElementById("answer")
const calculate = document.getElementById("calc")
calculate.addEventListener("click", calc)

function calc(){
    const op1 = parseFloat(input1.value)
    const op2 = parseFloat(input2.value)
    let final_answer = op1 + op2
    answer.innerText = final_answer
    answer.style = "color: red; font-family: sans-serif; font-weight: bold"
}

