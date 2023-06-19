import { useEffect, useLayoutEffect, useMemo } from "react";
import TileEntity from "../../../../../entities/tile.entity";
import useAppStore from "../../../../../store/store";

const useDisableNewTile = (tile: TileEntity, tileIndex: [number, number]) => {
    const { updateTile } = useAppStore();
    const isNewTile = useMemo(() => tile.isNew, [tile.isNew]);

  useLayoutEffect(() => {
    if (tile.isNew) {
      const timeout = setTimeout(() => {
        updateTile(
          {
            ...tile,
            isNew: false,
          },
          tileIndex
        );
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isNewTile]);
    return {
        isNewTile
    }
}
export default useDisableNewTile