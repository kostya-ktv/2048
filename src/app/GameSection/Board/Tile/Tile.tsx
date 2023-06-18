import { IconPerNumber } from "../../../../helpers/iconPerNumber";
import STile from "./Tile.styled";

const Tile = () => {
  return (
    <STile>
      <img className="tile-image" src={IconPerNumber(128)} />
    </STile>
  );
};
export default Tile;
