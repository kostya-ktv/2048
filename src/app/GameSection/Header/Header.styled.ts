import { memo } from "react";
import { styled } from "styled-components";

const SHeader = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
     background-color: rgb(0 0 0 / 15%);
       border-radius: 15px;
    .game-name {
        font-size: 70px;
        color: white;
        font-weight: 800;
        letter-spacing: 5px;
       
        padding: 12px 31px;
      
    }
   
    
`
export default memo(SHeader)