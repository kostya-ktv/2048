import { BoardType } from "../store/store"

export const createEmptyBoard = (): BoardType => {
    const HEIGHT = 4
    let  array = Array(HEIGHT).fill([])
    array = array.map(arr => Array(HEIGHT).fill(0)) as BoardType
    return generateNextMoveNumbers(array)
}

export const generateNextMoveNumbers = (board: BoardType): BoardType => {
 
    const freeTilesIndexes = []
    const resBoard = [...board]
    for (let i = 0; i < resBoard.length; i++) {
        for (let j = 0; j < resBoard[i].length; j++) {
            if(resBoard[i][j] === 0) freeTilesIndexes.push([i,j])
        }
    }
    if (!freeTilesIndexes.length) return []
    freeTilesIndexes.sort(() => Math.random() - 0.5);
    const firstNumber = freeTilesIndexes[0]
    const lastNumber = freeTilesIndexes[freeTilesIndexes.length - 1]
    resBoard[firstNumber[0]][firstNumber[1]] = 2
    resBoard[lastNumber[0]][lastNumber[1]] = 4
    return resBoard
}