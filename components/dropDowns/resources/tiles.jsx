import {Col, Row} from 'antd';

import Accounting from './assets/3.svg';
import DropDownTile from '../../dropDownTile/index';
import Ecommerce from '../../../images/svgs/icons/Ecommerce.svg';
import PL from '../../../images/svgs/icons/3pl.svg';
import Retail from '../../../images/svgs/icons/forRetail.svg';
import {TilesResources} from '../../../strings.jsx';
import Wholesalers from '../../../images/svgs/icons/wholesale.svg';
import cn from 'classnames';
import style from './style.module.sass';

const Tiles = () => {
    return(
        <>
        <div className={cn(style.TilesContainer)}>
            <div className={cn(style.tilesRow)}>
                <DropDownTile content={TilesResources[0].content} title={TilesResources[0].title} image={Accounting}/>
                <DropDownTile content={TilesResources[1].content} title={TilesResources[1].title} image={Accounting}/>
            </div>
            <div className={cn(style.tilesRow)}>
                <DropDownTile content={TilesResources[2].content} title={TilesResources[2].title} image={Accounting}/>
                <DropDownTile content={TilesResources[3].content} title={TilesResources[3].title} image={Accounting}/>
            </div>
        </div>
        </>
    )

}

export default Tiles;