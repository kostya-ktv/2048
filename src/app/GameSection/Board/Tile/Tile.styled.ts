import { styled } from "styled-components";

const STile = styled.div`
    position: relative;
    display: flex;
    border-radius: 15px;
    background-color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(0 0 0 / 15%);
    overflow: hidden;
    user-select: none;
    pointer-events: none;
    .tile-image {
        height: 90%;
        border-radius: 15px;
    }
`
export default STile