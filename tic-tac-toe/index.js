const board = document.querySelector("#board");
const marks = ["x", "o"];
const turnX = document.querySelector("#x");
const turnO = document.querySelector("#o");
const turnText = document.querySelector("#turnText");
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];
let current = "x";
let gameActive = true; 

function createBoard() {
    for (let i = 0; i < 9; i++) {
        board.innerHTML += `<div class="board-box" id="box-${i}"></div>`;
    }
    controlGame();
}

function controlGame() {
    for (let i = 0; i < 9; i++) {
        const boardBox = document.querySelector(`#box-${i}`);
        boardBox.addEventListener("click", () => changeTurn(boardBox));
    }
    turnText.style.color = (current === "x") ? "#ff5049" : "#1e92ff";
    turnX.style.backgroundColor = (current === "x") ? "#ff5049" : "white";
        turnX.style.color = (current === "x") ? "white" : "#ff5049";
        turnO.style.backgroundColor = (current === "o") ? "#1e92ff" : "white";
        turnO.style.color = (current === "o") ? "white" : "#1e92ff";
        turnText.style.color = (current === "x") ? "#ff5049" : "#1e92ff";
}

function changeTurn(box) {
    if (gameActive && box.textContent === "") {
        box.textContent = current;
        box.style.color = (current === "x") ? "#ff5049" : "#1e92ff";

        const winner = checkWinner(); 
        if (winner) {
            turnText.innerHTML = `<h2>¡${winner.toUpperCase()} ha ganado!</h2>`;
            gameActive = false; 
            return;
        }

        // Alternar turno
        current = (current === "x") ? "o" : "x";
        turnX.style.backgroundColor = (current === "x") ? "#ff5049" : "white";
        turnX.style.color = (current === "x") ? "white" : "#ff5049";
        turnO.style.backgroundColor = (current === "o") ? "#1e92ff" : "white";
        turnO.style.color = (current === "o") ? "white" : "#1e92ff";
        turnText.style.color = (current === "x") ? "#ff5049" : "#1e92ff";
        turnText.innerHTML = `<h2>Es el turno de las ${current.toUpperCase()}'s</h2>`;
    }
}

function checkWinner() {
    for (let i = 0; i < winningCombinations.length; i++) {
        const combination = winningCombinations[i];
        const a = combination[0];
        const b = combination[1];
        const c = combination[2];
        const boxA = document.querySelector(`#box-${a}`).textContent;
        const boxB = document.querySelector(`#box-${b}`).textContent;
        const boxC = document.querySelector(`#box-${c}`).textContent;


        if (boxA && boxA === boxB && boxA === boxC) {
            return boxA; 
        }
    }
    return null; 
}

createBoard();
