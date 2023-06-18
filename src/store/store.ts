import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware'
import { createEmptyBoard } from "../services/board.service";

export const APP_STORE_KEY = 'app-storage'

export type BoardType = [number][]
interface IAppStore {
    board: BoardType,
    isFinished: boolean, 
    isYouLose: boolean,

    setYouLose: (isYouLose: boolean) => void,
    setBoard: (newBoard: BoardType) => void,
    resetState: () => void  
}

const defaultState = () => ({
  board: createEmptyBoard(),

  isFinished: false,
  isYouLose: false,
})

const useAppStore = create<IAppStore>()(
  devtools(
    persist(
        (set) => ({
        ...defaultState(),

        setYouLose: (isYouLose: boolean) => set(() => ({ isYouLose })),
        setBoard: (newBoard) => set(() => ({ board: newBoard })),
        resetState: () => set((state) => ({...defaultState()}))
      }),
      {
        name: APP_STORE_KEY,
      }
    )
  )
)

export default useAppStore