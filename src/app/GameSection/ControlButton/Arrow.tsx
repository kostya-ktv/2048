import { styled } from "styled-components";
import arrowImg from "../../../assets/arrow.svg";

const SArrow = styled.div`
  width: 70px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0 0 0 / 15%);
  border-radius: 15px;
  padding: 13px;
  transition: transform 0.1s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  img {
    height: 25px;
  }
  .up {
    transform: rotate(-90deg);
  }
  .down {
    transform: rotate(90deg);
  }
  .left {
    transform: rotate(180deg);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export interface IArrow {
  direction: "up" | "down" | "left" | "right";
  onClick: Function;
}

const Arrow: React.FC<IArrow> = ({ direction, onClick }) => {
  return (
    <SArrow className="arrow" onClick={() => onClick()}>
      <img src={arrowImg} className={direction} />
    </SArrow>
  );
};
export default Arrow;
