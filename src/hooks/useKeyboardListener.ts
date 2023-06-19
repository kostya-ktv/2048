import { useEffect } from "react"
import useAppStore from "../store/store"
import useGenerateNextMove from "./useGenerateNextMove"
import { moveRight, moveLeft , moveUp, moveDown} from "../services/board.service"

const useKeyboardListener = () => {
    const { isFinished, board, setBoard } = useAppStore()
    const { generateNextMove } = useGenerateNextMove()

    useEffect(() => {
        if (!isFinished) {
            const onKeyDown = (e: KeyboardEvent) => {
                let resBoard = [...board]
                switch (e.code) {
                    case 'ArrowUp':
                      resBoard = moveUp(resBoard)
                        break;
                    case 'ArrowRight':
                        resBoard = moveRight(resBoard)
                        break;
                    case 'ArrowLeft':
                        resBoard = moveLeft(resBoard)
                        break;
                    case 'ArrowDown':
                         resBoard = moveDown(resBoard)
                        break;
                
                    default:
                        break;
                }
                setBoard(resBoard)
                
                generateNextMove()
            }
            
        document.addEventListener('keydown', onKeyDown)

        return () => {
            document.removeEventListener('keydown', onKeyDown)
        }
    }
       
    },[isFinished, board])
}
export default useKeyboardListener