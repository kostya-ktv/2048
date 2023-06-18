import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware'

interface IAppStore {
    board: Array<[number]>,
    isGameStarted: boolean, 
    isFinished: boolean, 
    setStartedGame: (isStarted: boolean) => void
}

const useAppStore = create<IAppStore>()(
  devtools(
    persist(
        (set) => ({
         board: [],
            isGameStarted: false,
            isFinished: false,
            setStartedGame: (isStarted: boolean) => set((state) => ({ isGameStarted: isStarted }))
      }),
      {
        name: 'bear-storage',
      }
    )
  )
)

export default useAppStore