import { useEffect } from "react"

const useKeyboardListener = () => {
    useEffect(() => {
        const onKeyDown = (e:any) => console.log(e)
        window.addEventListener('keydown', onKeyDown)
        return () => {
            window.removeEventListener('keydown', onKeyDown)
        }
    },[])
}
export default useKeyboardListener