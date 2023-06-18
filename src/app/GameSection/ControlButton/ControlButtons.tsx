import { memo } from "react";
import SControlButtons from "./ControlButtons.styled";
import Arrow from "./Arrow";

const ControlButtons = () => {
  return (
    <SControlButtons>
      <Arrow direction="up" />
      <div style={{ display: "flex", gap: 20 }}>
        <Arrow direction="left" />
        <Arrow direction="right" />
      </div>

      <Arrow direction="down" />
    </SControlButtons>
  );
};
export default memo(ControlButtons);
