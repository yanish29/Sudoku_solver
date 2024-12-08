function solveSudoku() {
    const inputs = document.querySelectorAll('.grid input');
    const grid = Array.from(inputs).map(input => parseInt(input.value) || 0);

    if (solve(grid)) {
        inputs.forEach((input, index) => {
            input.value = grid[index];
        });
    } else {
        alert('No solution exists for the given Sudoku!');
    }
}

function isValid(grid, row, col, num) {
    for (let i = 0; i < 9; i++) {
        if (grid[row * 9 + i] === num || grid[i * 9 + col] === num) return false;
        if (grid[Math.floor(row / 3) * 27 + Math.floor(col / 3) * 3 + (i % 3) + Math.floor(i / 3) * 9] === num) return false;
    }
    return true;
}

function solve(grid) {
    for (let i = 0; i < 81; i++) {
        if (grid[i] === 0) {
            for (let num = 1; num <= 9; num++) {
                if (isValid(grid, Math.floor(i / 9), i % 9, num)) {
                    grid[i] = num;
                    if (solve(grid)) return true;
                    grid[i] = 0;
                }
            }
            return false; 
        }
    }
    return true;
}
