import { memo } from "react";
import { styled } from "styled-components";

const SBoard = styled.div`
    position: relative;
    width: 95vw;
    height: 95vw;
    background-color: rgb(0 0 0 / 10%);
    max-width: 500px;
    border-radius: 15px;
    max-height: 500px;
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 10px;
    padding: 5px;
`
export default memo(SBoard)