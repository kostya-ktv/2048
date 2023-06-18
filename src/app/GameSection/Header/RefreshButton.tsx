import { styled } from "styled-components";
import RefreshImage from "../../../assets/refresh.svg";

const SRefreshButton = styled.div`
  height: 70px;
  width: 60px;
  padding: 5px 10px;
  border-radius: 15px 0 0 15px;
  cursor: pointer;
  .refresh-icon {
    height: 30px;
    width: 30px;
    transition: transform 0.1s ease;
    &:active {
      transform: scale(0.9);
    }
  }
`;
const RefreshButton = () => {
  return (
    <SRefreshButton className="btn">
      <img className="refresh-icon" src={RefreshImage} />
    </SRefreshButton>
  );
};
export default RefreshButton;
