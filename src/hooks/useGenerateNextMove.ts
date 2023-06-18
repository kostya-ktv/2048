import { useCallback } from "react"
import { generateNextMoveNumbers } from "../services/board.service"
import useAppStore from "../store/store"

const useGenerateNextMove = () => {
    const { board, setBoard, setYouLose } = useAppStore()

    const generateNextMove = useCallback(() => {
     
        const newBoard = generateNextMoveNumbers(board)

        if (!newBoard.length) setYouLose(true)
        else {
            setBoard(newBoard)
        }
    }, [board])
    
    return {generateNextMove}
  
}
export default useGenerateNextMove