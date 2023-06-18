import { memo } from "react";
import { styled } from "styled-components";

const SGameSection = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 600px;
    background-color: rgb(0 0 0 / 3%)

`
export default memo(SGameSection)