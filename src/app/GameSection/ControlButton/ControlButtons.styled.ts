import { memo } from "react";
import { styled } from "styled-components";

const SControlButtons = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`
export default memo(SControlButtons)