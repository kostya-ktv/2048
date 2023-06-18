import useKeyboardListener from "../../../hooks/useKeyboardListener";
import useAppStore from "../../../store/store";
import SBoard from "./Board.styled";
import Tile from "./Tile/Tile";

export const Board = () => {
  const { board } = useAppStore();

  useKeyboardListener();
  return (
    <SBoard>
      {board.map((row, i) =>
        row.map((tile, tileIndex) => (
          <Tile tileNumber={tile as any} key={`${i}-${tileIndex}`} />
        ))
      )}
    </SBoard>
  );
};
