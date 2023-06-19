import { useMemo } from "react";
import { IconPerNumber } from "../../../../helpers/iconPerNumber";
import STile from "./Tile.styled";
import TileEntity from "../../../../entities/tile.entity";
import useDisableNewTile from "./Hooks/useDisableNewTile";

interface IProps {
  tile: TileEntity;
  tileIndex: [number, number];
}
const Tile: React.FC<IProps> = ({ tile, tileIndex }) => {
  const icon = useMemo(() => IconPerNumber(tile.value), [tile.value]);
  const { isNewTile } = useDisableNewTile(tile, tileIndex);

  return (
    <STile $isNewTile={isNewTile}>
      {icon && <img className="tile-image" src={icon} />}
    </STile>
  );
};
export default Tile;
