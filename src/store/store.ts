import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware'
import { createEmptyBoard } from "../services/board.service";
import TileEntity from "../entities/tile.entity";

export const APP_STORE_KEY = 'app-storage'

export type BoardType = [TileEntity][]

type IAppStoreReducers = {
    setYouLose: (isYouLose: boolean) => void,
    setIsLoading: (isLoading: boolean) => void,
    setBoard: (newBoard: BoardType) => void,
    updateTile: (newTile: TileEntity, index: [number, number]) => void
    resetState: () => void 
}
type IAppStoreStates = {
    board: BoardType,
    isFinished: boolean, 
    isYouLose: boolean,
    isLoading: boolean 
}
type IAppStore = IAppStoreReducers & IAppStoreStates & {}

const defaultState = (): IAppStoreStates => ({
  board: createEmptyBoard(),
  isLoading: false,
  isFinished: false,
  isYouLose: false,
})

const useAppStore = create<IAppStore>()(
  devtools(
    persist(
        (set) => ({
        ...defaultState(),

        setYouLose: (isYouLose: boolean) => set(() => ({ isYouLose })),
        setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
        setBoard: (newBoard) => set(() => ({ board: newBoard })),
        resetState: () => set(() => ({ ...defaultState() })),
        updateTile: (newTile: TileEntity, index: [number, number]) => set((state) => {
          state.board[index[0]][index[1]] = newTile
          return state
        })
      }),
      {
        name: APP_STORE_KEY,
      }
    )
  )
)

export default useAppStore