import { useMemo } from "react";
import { IconPerNumber } from "../../../../helpers/iconPerNumber";
import { TileNumbersType } from "../../../../types";
import STile from "./Tile.styled";

const Tile: React.FC<{ tileNumber: TileNumbersType }> = ({ tileNumber }) => {
  const icon = useMemo(() => IconPerNumber(tileNumber), [tileNumber]);
  const hasNumber = useMemo(() => tileNumber > 0, [tileNumber]);
  return (
    <STile $isNewTile={hasNumber}>
      {icon && <img className="tile-image" src={icon} />}
    </STile>
  );
};
export default Tile;
