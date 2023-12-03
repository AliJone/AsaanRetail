import {Col, Row} from 'antd';

import Accounting from './assets/3.svg';
import DropDownTile from '../../dropDownTile/index';
import Ecommerce from '../../../images/svgs/icons/Ecommerce.svg';
import PL from '../../../images/svgs/icons/3pl.svg';
import Retail from '../../../images/svgs/icons/forRetail.svg';
import ServiceProviders from '../../../images/svgs/icons/serviceProvider.svg';
import {TilesSolution} from '../../../strings.jsx';
import Wholesalers from '../../../images/svgs/icons/wholesale.svg';
import cn from 'classnames';
import style from './style.module.sass';

const Tiles = () => {
    return(
        <>
        <div className={cn(style.RightPane)}>
            <div className={cn(style.tilesRow)}>
                <DropDownTile content={TilesSolution[0].content} title={TilesSolution[0].title} image={Accounting}/>
                <DropDownTile content={TilesSolution[1].content} title={TilesSolution[1].title} image={Accounting}/>
            </div>
            <div className={cn(style.tilesRow)}>
                <DropDownTile content={TilesSolution[2].content} title={TilesSolution[2].title} image={Accounting}/>
                <DropDownTile content={TilesSolution[3].content} title={TilesSolution[3].title} image={Accounting}/>
            </div>
            <div className={cn(style.tilesRow, style.lengthFifty)}>
                <DropDownTile content={TilesSolution[4].content} title={TilesSolution[4].title} image={Accounting}/>
            </div>
        </div>

        {/* {console.log(TilesProduct, "abcded")} */}
        {/* <Row gutter={32}>
            <Col span={12}>
                <DropDownTile content={TilesSolution[0].content} title={TilesSolution[0].title} image={Retail}/>
            </Col>
            <Col span={12}>
                <DropDownTile content={TilesSolution[1].content} title={TilesSolution[1].title} image={Ecommerce}/>
            </Col>
        </Row>
        <div style={{padding : "15px"}}/>
        <Row gutter={32}>
            <Col span={12}>
                <DropDownTile content={TilesSolution[2].content} title={TilesSolution[2].title} image={PL}/>
            </Col>
            <Col span={12}>
                <DropDownTile content={TilesSolution[3].content} title={TilesSolution[3].title} image={Wholesalers}/>
            </Col>
        </Row>
        <div style={{padding : "15px "}}/>
        <Row gutter={32}>
            <Col span={12}>
                <DropDownTile content={TilesSolution[4].content} title={TilesSolution[4].title} image={ServiceProviders}/>
            </Col>
            
        </Row> */}
        </>
    )

}

export default Tiles;