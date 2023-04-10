// create a number checker that goes over every number that validates every number on the board is correct
// -- create a function that will grab an array and the contents within it (row array)
// -- create a function that will pick out data to create a column of the sudoku
// ---- create an empty array that will hold the numbers for each column
// ---- use .push to fill the column array
// -- create a function that will pick out data to create a 3x3 grid of the sukoku
// ---- create an empty array that will hold the numbers for each 3x3 grid
// ---- use .push to fill the 3x3 grid array
// -- create a function that will validate numbers 1-9 and apply a true or false boolean
// ---- create if statements that will compare each number to the other numbers in the array
// -- create a function that compares all sudoku boards that will return a boolean if they are the same or not

function getRow(grid, row) {
    let rArray = grid[row]

    console.log(rArray)
    return rArray
}

function getColumn(grid, column) {
    let cArray = []

    for(let i = 0; i < grid.length; i++) {
        let tempColumn = getRow(grid, i);
        
        cArray.push(tempColumn[column]);
    }
    console.log(cArray)
    return cArray
}

function getGrid(grid, x, y) {
    let threeByThree = [];
    let column;
    let row;

    x *= 3

    y *=3

    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            let tempGrid = getColumn(grid, column);
            threeByThree.push(tempGrid[row]);
        }
        column -= 3
    }
    console.log(threeByThree)
    return threeByThree
}

function includes1to9(section) {
    
    for(let i = 0; i < section.length; i++) {
        for(let j = 0; j < section.length; j++) {
            if (i !== j) {
                if(section[i] === section[j]) {
                    return false
                }
            }
        }
    }
    console.log(includes1to9)
    return true
}

function isSudokuValid(board) {
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
        let solvedPuzzle = getGrid(board, i, j)
            if(includes1to9(solvedPuzzle) !== true) {
                return false
            }
        }
    }
    return true
}




let puzzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

let puzzleCopy = [[ 8,9,5,7,4,2,1,3,6 ],
                  [ 2,7,1,9,6,3,4,8,5 ],
                  [ 4,6,3,5,8,1,7,9,2 ],
                  [ 9,3,4,6,1,7,2,5,8 ],
                  [ 5,1,7,2,3,8,9,6,4 ],
                  [ 6,8,2,4,5,9,3,7,1 ],
                  [ 1,5,9,8,7,4,6,2,3 ],
                  [ 7,4,6,3,2,5,8,1,9 ],
                  [ 3,2,8,1,9,6,5,4,7 ]];

let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 8,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

console.log(isSudokuValid(puzzleCopy))
console.log(isSudokuValid(p8zzle))