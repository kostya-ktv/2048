import { memo } from "react";
import { styled } from "styled-components";

const SApp = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  background: rgb(238, 174, 202);
  background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`
export default memo(SApp)