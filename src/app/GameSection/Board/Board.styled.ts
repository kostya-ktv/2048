
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
`
export default SBoard