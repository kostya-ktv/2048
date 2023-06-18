import { css, styled } from "styled-components";

interface Props { $isNewTile: boolean }

const STile = styled.div<Props>`
    ${({$isNewTile}) => css`
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
    width: 100%;
  
    
    .tile-image {
        height: 100%;
        width: 100%;
        border-radius: 15px;
          ${$isNewTile && css`
        animation-duration: 0.2s;
        animation-name: newTile;
        animation-fill-mode: forwards;
        animation-delay: 0.25s;
        transform: scale(0);
        @keyframes newTile {
            from {
                transform: scale(0);
            }
            to {
                transform: scale(1);
            }
        }
    `}
    }
`}
  
`
export default STile