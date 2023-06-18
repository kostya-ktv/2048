import { memo } from "react";
import SGameSection from "./GameSection.styled";
import { Board } from "./Board/Board";
import ControlButtons from "./ControlButton/ControlButtons";
import Header from "./Header/Header";

const GameSection = () => {
  return (
    <SGameSection>
      <Header />
      <Board />
      <ControlButtons />
    </SGameSection>
  );
};
export default memo(GameSection);
