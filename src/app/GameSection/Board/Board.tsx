import useKeyboardListener from "../../../hooks/useKeyboardListener";
import useAppStore from "../../../store/store";
import SBoard from "./Board.styled";
import Tile from "./Tile/Tile";

export const Board = () => {
  const { isYouLose, board } = useAppStore();

  useKeyboardListener();

  return (
    <SBoard>
      {!isYouLose ? (
        board.map((row: any[], i: number) =>
          row.map((tile, tileIndex) => (
            <Tile
              tileIndex={[i, tileIndex]}
              tile={tile}
              key={`${i}-${tileIndex}`}
            />
          ))
        )
      ) : (
        <div className="lose-screen">
          <span>You</span>
          <span>lose...</span>
        </div>
      )}
    </SBoard>
  );
};
