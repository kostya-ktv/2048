import { styled } from "styled-components";
import RefreshImage from "../../../assets/refresh.svg";
import useAppStore from "../../../store/store";

const SRefreshButton = styled.div`
  position: absolute;
  /* height: 0px;
  width: 60px; */
  padding: 5px 20px;
  border-radius: 15px;
  left: 50%;
  transform: translateX(-50%);
  bottom: -14px;
  z-index: 1;
  background-color: #61356b;
  cursor: pointer;
  .refresh-icon {
    padding: 3px;
    height: 25px;
    width: 25px;
    transition: transform 0.1s ease;
    &:active {
      transform: scale(0.9);
    }
  }
`;
const RefreshButton = () => {
  const { resetState } = useAppStore();
  return (
    <SRefreshButton className="btn" onClick={resetState}>
      <img className="refresh-icon" src={RefreshImage} />
    </SRefreshButton>
  );
};
export default RefreshButton;
