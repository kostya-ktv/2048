
import { styled } from "styled-components";

const SBoard = styled.div`
    position: relative;
    width: 95vw;
    height: 95vw;
    max-width: 500px;
    border-radius: 15px;
    max-height: 500px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-auto-rows: 1fr;
    gap: 10px;
    padding: 5px;
    .res-screen {
        display: flex;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        flex-direction: column;
        font-size: 50px;
        letter-spacing: 4px;
        text-align: center;
        color: white;
    }
`
export default SBoard