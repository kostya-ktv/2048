import { memo, useCallback } from "react";
import SControlButtons from "./ControlButtons.styled";
import Arrow, { IArrow } from "./Arrow";

const ControlButtons = () => {
  const handleClick = useCallback((direction: IArrow["direction"]) => {
    const event = new KeyboardEvent("keydown", {
      code:
        direction === "up"
          ? "ArrowUp"
          : direction === "down"
          ? "ArrowDown"
          : direction === "right"
          ? "ArrowRight"
          : "ArrowLeft",
    });

    document.dispatchEvent(event);
  }, []);
  return (
    <SControlButtons>
      <Arrow direction="up" onClick={() => handleClick("up")} />
      <div style={{ display: "flex", gap: 20 }}>
        <Arrow direction="left" onClick={() => handleClick("left")} />
        <Arrow direction="right" onClick={() => handleClick("right")} />
      </div>

      <Arrow direction="down" onClick={() => handleClick("down")} />
    </SControlButtons>
  );
};
export default memo(ControlButtons);
