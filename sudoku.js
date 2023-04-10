function getRow(grid, row) {
    let rowArray = grid[row];
    // console.log(rowArray)
    return rowArray
}

function getColumn(grid, column) {
    let colArray = []; //creates an array for the column

    // for(let i = 0; i < grid.length; i++)
    for (let i=0; i < grid.length; i++) {
        let tempRow = getRow(grid, i);
        colArray.push(tempRow[column]);
    }
    return colArray
};
// getting undefined for some numbers in this function.

function getSection(grid, x, y) {
    let section = []; // creates an array for a 3x3 grid
    let row;
    let column;

        // x *= 3
    if (x === 0) { 
      row = 0;
    } else if (x === 1) { // value after looping the first time
      row = 3; // starting row after looping the first time
    } else if (x === 2) { // value after looping the second time
      row = 6; // starting row after looping the second time
    }

    
        // y *= 3 
    if (y === 0) { 
      column = 0; //same as example above, just for column instead
    } else if (y === 1) {
      column = 3;
    } else if (y === 2) {
      column = 6;
    }
  
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let tempColumn = getColumn(grid, column);
        section.push(tempColumn[row]); // row = number | undefined
        column++ // = number | undefined
      }
      row++
      column -= 3 // resets the column to 0, 3, or 6 when verifying numbers in a row of three
    }
    // console.log(section)
    return section
  }


  function includes1to9(gridSection) { 
    // compares numbers to verify there are no same number in the 3x3 grid
    for(let i = 0; i < gridSection.length; i++) {
        for(let j = 0; j < gridSection.length; j++) {
            if(i !== j) {
                if(gridSection[i] === gridSection[j]) {
                    return false
                }
            } 
        }
    }
    return true
  }
 
  function isSudokuValid(sudoku) {
    for(let i = 0; i < 3; i++) {
        for(let j = 0; i < 3; j++) {
            let dokuPuzzle = getSection(sudoku, i, j) 
            // sudoku = 9x9 space, getSection refers to each 3x3 grid to verify num 1-9
            if(includes1to9(dokuPuzzle) !== true) { // if the 3x3 grid does not return num 1-9: 
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