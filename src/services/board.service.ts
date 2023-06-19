import TileEntity from "../entities/tile.entity"
import { BoardType } from "../store/store"

export const createEmptyBoard = (): BoardType => {
    const HEIGHT = 4
    let array = [] as any
    for (let i = 0; i < HEIGHT; i++) {
        array.push([])
        for (let j = 0; j < HEIGHT; j++) {
            array[i][j] = { 
                isMerged: false,
                isNew: false,
                value: 0
            } as TileEntity
        }
    }

    return generateBoardWithNewNumbers(array)
}

export const generateBoardWithNewNumbers = (board: BoardType): BoardType => {

    let freeTilesIndexes = []
    const resBoard = [...board]
    for (let i = 0; i < resBoard.length; i++) {
        for (let j = 0; j < resBoard[i].length; j++) {
            const tile = resBoard[i][j]
            tile.isMerged = false
            tile.isNew = false
            if(tile.value === 0) freeTilesIndexes.push([i,j])
        }
    }

    if (!freeTilesIndexes.length) return []
    freeTilesIndexes = freeTilesIndexes.sort(() => Math.random() - 0.5);

    const firstNumber = freeTilesIndexes[0]
    const lastNumber = freeTilesIndexes[freeTilesIndexes.length - 1]
    
    resBoard[lastNumber[0]][lastNumber[1]].value = 4
    resBoard[lastNumber[0]][lastNumber[1]].isNew = true
    resBoard[firstNumber[0]][firstNumber[1]].value = 2
    resBoard[firstNumber[0]][firstNumber[1]].isNew = true

    return board
}
export const moveUp = (board: BoardType): BoardType => { 
    let resBoard = [...board]
    resBoard = rotateArrayRight(resBoard)
    
    resBoard = moveLeft(resBoard)
    resBoard = rotateArrayToLeft(resBoard)
    return resBoard
}
export const moveDown = (board: BoardType): BoardType => { 
    let resBoard = [...board]
    
    resBoard = mirrorArrayVertically(board)

    resBoard = moveUp(resBoard)
    resBoard = mirrorArrayVertically(board)

    return resBoard
}

export const moveRight = (board: BoardType): BoardType => {
    let resBoard = [...board]
    resBoard = mirrorArrayHorizontally(board)

    resBoard = moveLeft(resBoard)
    
    resBoard = mirrorArrayHorizontally(board)

    return resBoard
}
export const moveLeft = (board: BoardType): BoardType => {
    const resBoard = [...board]
     for (let i = 0; i < resBoard.length; i++) {
         for (let j = 0; j < resBoard[i].length; j++) {
            //because we are starting from second item and we skipped empty tiles
             const tile = resBoard[i][j]
             const row = resBoard[i]
             const firstTileInRow = row[0]

            if (j === 0 || tile.value === 0) continue
             
             const prevTileIndex = findInRowIndexOfPreviousPositiveTile(row, j)

             if (prevTileIndex === undefined) {
                firstTileInRow.value = tile.value
                tile.value = 0
             } else {
                 
                 const prevTile = row[prevTileIndex]
                 //merging condition
                 if (prevTile.value !== tile.value && prevTileIndex + 1 !== j) {
                     
                        const nextTile = row[prevTileIndex + 1]
                        nextTile.value = tile.value
                        tile.value = 0
                        
                 } else if(prevTile.value === tile.value) {
                     if (!prevTile.isMerged) {
                        prevTile.value += prevTile.value 
                        prevTile.isMerged = true
                        tile.value = 0 
                     }
                 }
            }
        }
     }
    return resBoard
}

const findInRowIndexOfPreviousPositiveTile = (row: Array<TileEntity>, currentIndex: number): number | undefined => {
    let resultIndex = undefined
    for (let index = currentIndex - 1; index >= 0; index--) {
        const tile = row[index]    
        if (tile.value > 0) {
            return index
        }
    }
    return resultIndex
}

export const rotateArrayToLeft = (board: BoardType): BoardType => {
    const rotatedArray = [...board]
    for (let col = 0; col < board[0].length; col++) {
    const newRow = [];
    for (let row = board.length - 1; row >= 0; row--) {
      newRow.push(board[row][col]);
    }
    rotatedArray.push(newRow as [TileEntity]);
  }
  return rotatedArray;
}

export const rotateArrayRight = (board: BoardType): BoardType => {
  const rotatedArray = [];
  for (let col = board[0].length - 1; col >= 0; col--) {
    const newRow = [];
    for (let row = 0; row < board.length; row++) {
      newRow.push(board[row][col]);
    }
    rotatedArray.push(newRow);
  }
  return rotatedArray as BoardType;
}

export const mirrorArrayHorizontally = (board: BoardType): BoardType => {
  const mirroredArray = [];
  for (let i = 0; i < board.length; i++) {
    mirroredArray.push(board[i].slice().reverse());
  }
  return mirroredArray as BoardType;
}

export const mirrorArrayVertically= (board: BoardType): BoardType => {
  const mirroredArray = [...board].reverse();
  return mirroredArray;
}