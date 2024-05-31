'use strict';

const width = 95;
const height = 95;

let grid = [];

window.addEventListener('load', () => {
    const output = document.getElementById("output");
    output.innerHTML = "";

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const cell = document.createElement("div");
            cell.className = "cell dead";
            output.appendChild(cell);
        }
    }
});

function initializeGrid() {
    for (let y = 0; y < height; y++) {
        grid[y] = [];
        for (let x = 0; x < width; x++) {
            grid[y][x] = Math.random() < 0.5 ? 1 : 0;
        }
    }
}

function updateGrid() {
    const newGrid = [];

    for (let y = 0; y < height; y++) {
        newGrid[y] = [];
        for (let x = 0; x < width; x++) {
            const neighbors = countNeighbors(x, y);
            const isAlive = grid[y][x] === 1;

            if (isAlive && (neighbors === 2 || neighbors === 3)) {
                newGrid[y][x] = 1;
            } else if (!isAlive && neighbors === 3) {
                newGrid[y][x] = 1;
            } else {
                newGrid[y][x] = 0;
            }
        }
    }

    grid = newGrid;
}

function countNeighbors(x, y) {
    let count = 0;

    for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
            if (dx === 0 && dy === 0) continue;

            const neighborX = x + dx;
            const neighborY = y + dy;

            if (
                neighborX >= 0 && neighborX < width &&
                neighborY >= 0 && neighborY < height &&
                grid[neighborY][neighborX] === 1
            ) {
                count++;
            }
        }
    }

    return count;
}

function displayGrid() {
    const output = document.getElementById("output");
    output.innerHTML = "";

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const cell = document.createElement("div");
            cell.className = grid[y][x] === 1 ? "cell alive" : "cell dead";
            output.appendChild(cell);
        }
    }
}

function runGame() {
    initializeGrid();
    displayGrid();

    const timerId = setInterval(() => {
        updateGrid();
        displayGrid();
    }, 50);
}

let timerId;

document.getElementById('start').addEventListener('click', () => {
    initializeGrid();
    displayGrid();

    timerId = setInterval(() => {
        updateGrid();
        displayGrid();
    }, 50);
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(timerId);
});

document.getElementById('clear').addEventListener('click', () => {
    window.location.reload();
});

