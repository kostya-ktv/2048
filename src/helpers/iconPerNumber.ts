import icon2 from '../assets/tiles/2.gif'
import icon4 from '../assets/tiles/4.gif'
import icon8 from '../assets/tiles/8.gif'
import icon16 from '../assets/tiles/16.gif'
import icon32 from '../assets/tiles/32.gif'
import icon64 from '../assets/tiles/64.gif'
import icon128 from '../assets/tiles/128.gif'
import icon256 from '../assets/tiles/256.gif'
import icon512 from '../assets/tiles/512.gif'
import icon1024 from '../assets/tiles/1024.gif'
import { TileNumbersType } from '../types'


export const IconPerNumber = (tileNumber: TileNumbersType): string | undefined => {
    switch (tileNumber) {
        case 2:
            return icon2
            break;
        case 4:
            return icon4
            break;
        case 8:
            return icon8
            break;
        case 16:
            return icon16
            break;
        case 32:
            return icon32
            break;
        case 64:
            return icon64
            break;
        case 128:
            return icon128
            break;
        case 256:
            return icon256
            break;
        case 512:
            return icon512
            break;
        case 1024:
            return icon1024
            break;
    
        default:
            return undefined;
    }
}