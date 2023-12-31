import { memo } from "react";
import { styled } from "styled-components";

const SHeader = styled.div`
    height: 100px;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;

    justify-content: center;
     background-color: rgb(0 0 0 / 15%);
    border-radius: 15px;
    .header-logo-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding: 5px;
        .header-logo {
            border-radius: 15px;
            height: 100%;
            width: 100%;
                position: relative;
                object-fit: cover;
            }
    }
    
    .game-name {
        font-size: 70px;
        color: white;
        font-weight: 800;
        letter-spacing: 5px;
       
        padding: 12px 31px;
      
    }
   
    
`
export default memo(SHeader)