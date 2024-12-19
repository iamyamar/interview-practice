let mazeData = [];
let pathData = [];
let size = 5;
let solving = false;
let isPaused = false;
let shouldReset = false;
let currentPathFindingPromise = null;
let operationCounter = 0;

function initMaze(size, walls) {
    mazeData = Array(size).fill().map(() => Array(size).fill(0));
    pathData = Array(size).fill().map(() => Array(size).fill(0));

    let wallsPlaced = 0;
    while (wallsPlaced < walls) {
        const x = Math.floor(Math.random() * size);
        const y = Math.floor(Math.random() * size);
        if ((x !== 0 || y !== 0) && (x !== size-1 || y !== size-1) && mazeData[x][y] === 0) {
            mazeData[x][y] = 1;
            wallsPlaced++;
        }
    }
    drawMaze();
}

function drawMaze() {
    const mazeElement = document.getElementById('maze');
    mazeElement.innerHTML = '';

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.className = 'row';

        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';

            if (i === 0 && j === 0) {
                cell.classList.add('source');
                cell.textContent = 'S';
            } else if (i === size-1 && j === size-1) {
                cell.classList.add('destination');
                cell.textContent = 'D';
            } else if (mazeData[i][j] === 1) {
                cell.classList.add('wall');
            }

            if (pathData[i][j] === 1) {
                cell.classList.add('path');
            }

            row.appendChild(cell);
        }
        mazeElement.appendChild(row);
    }
}

async function findPath(x, y, currentOperation) {
    if (shouldReset || operationCounter !== currentOperation) {
        return false;
    }

    while (isPaused && operationCounter === currentOperation) {
        await new Promise(resolve => setTimeout(resolve, 100));
        if (shouldReset || operationCounter !== currentOperation) {
            return false;
        }
    }

    if (x === size-1 && y === size-1) {
        pathData[x][y] = 1;
        drawMaze();
        return true;
    }

    if (isValidMove(x, y)) {
        pathData[x][y] = 1;
        drawMaze();
        await new Promise(resolve => setTimeout(resolve, 2000));

        if (shouldReset || operationCounter !== currentOperation) {
            return false;
        }

        if (await findPath(x, y + 1, currentOperation)) return true;
        if (await findPath(x + 1, y, currentOperation)) return true;

        pathData[x][y] = 0;
        drawMaze();
        await new Promise(resolve => setTimeout(resolve, 2000));
        return false;
    }

    return false;
}

function isValidMove(x, y) {
    return x >= 0 && x < size && y >= 0 && y < size &&
           mazeData[x][y] === 0 && pathData[x][y] === 0;
}

async function startMaze() {
    if (!solving) {
        solving = true;
        isPaused = false;
        shouldReset = false;
        operationCounter++;
        const currentOperation = operationCounter;

        updateButtonStates(true);

        try {
            currentPathFindingPromise = findPath(0, 0, currentOperation);
            const found = await currentPathFindingPromise;

            if (operationCounter === currentOperation) {
                if (found && !shouldReset) {
                    alert('Path found!');
                } else if (!shouldReset) {
                    alert('No path exists!');
                }
            }
        } catch (error) {
            console.error('Path finding error:', error);
        } finally {
            if (operationCounter === currentOperation) {
                solving = false;
                currentPathFindingPromise = null;
                updateButtonStates(false);
            }
        }
    }
}

function cleanupCurrentSearch() {
    shouldReset = true;
    isPaused = false;
    solving = false;
    currentPathFindingPromise = null;
    operationCounter++;
}

function updateButtonStates(isRunning) {
    const startButton = document.getElementById('startButton');
    const pauseButton = document.getElementById('pauseButton');
    const resetButton = document.getElementById('resetButton');

    startButton.disabled = isRunning;
    pauseButton.disabled = !isRunning;
    resetButton.disabled = !isRunning;

    pauseButton.textContent = isPaused ? 'Resume' : 'Pause';
}

function resetPath() {
    pathData = Array(size).fill().map(() => Array(size).fill(0));
    drawMaze();
}

function generateMaze() {
    cleanupCurrentSearch();

    updateButtonStates(false);

    const sizeInput = parseInt(document.getElementById('size').value);
    const walls = parseInt(document.getElementById('walls').value);

    if (!sizeInput || sizeInput < 3) {
        alert("Maze size should be more than 3");
        return;
    }

    size = sizeInput;
    initMaze(size, walls);
}

function togglePause() {
    if (solving) {
        isPaused = !isPaused;
        const pauseButton = document.getElementById('pauseButton');
        pauseButton.textContent = isPaused ? 'Resume' : 'Pause';
    }
}

function resetMaze() {
    cleanupCurrentSearch();
    updateButtonStates(false);
    resetPath();
}

generateMaze();