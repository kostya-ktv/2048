import SBoard from "./Board.styled";
import Tile from "./Tile/Tile";

export const Board = () => {
  return (
    <SBoard>
      {Array(16)
        .fill("a")
        .map((_, i) => (
          <Tile key={i} />
        ))}
    </SBoard>
  );
};
