import { useCallback } from "react"
import { generateBoardWithNewNumbers } from "../services/board.service"
import useAppStore from "../store/store"

const useGenerateNextMove = () => {
    const { board, setBoard, setYouLose } = useAppStore()

    const generateNextMove = useCallback(() => {
    
        console.log(board)
        const newBoard = generateBoardWithNewNumbers(board)

        if (!newBoard.length) {
            setYouLose(true)
        }
        else {
            setBoard(newBoard)
        }
    }, [board])
    
    return {generateNextMove}
  
}
export default useGenerateNextMove