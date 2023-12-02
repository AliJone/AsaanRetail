import {Col, Row} from 'antd';

import Accounting from './assets/3.svg';
import Analytics from './assets/4.svg';
import DropDownTile from '../../dropDownTile/index';
import Inventory from './assets/2.svg';
import OrdersManagement from './assets/2.svg';
import PointOfSales from './assets/6.svg';
import React from 'react';
import Shipment from './assets/5.svg';
import {TilesProduct} from '../../../strings.jsx';
import cn from 'classnames';
import style from './style.module.sass';

const Tiles = () => {
    return(
        <>
        <div className={cn(style.RightPane)}>
            <div className={cn(style.tilesRow)}>
                <DropDownTile content={TilesProduct[0].content} title={TilesProduct[0].title} image={Accounting}/>
                <DropDownTile content={TilesProduct[1].content} title={TilesProduct[1].title} image={Accounting}/>
            </div>
            <div className={cn(style.tilesRow)}>
                <DropDownTile content={TilesProduct[2].content} title={TilesProduct[2].title} image={Accounting}/>
                <DropDownTile content={TilesProduct[3].content} title={TilesProduct[3].title} image={Accounting}/>
            </div>
            <div className={cn(style.tilesRow)}>
                <DropDownTile content={TilesProduct[4].content} title={TilesProduct[4].title} image={Accounting}/>
                <DropDownTile content={TilesProduct[5].content} title={TilesProduct[5].title} image={Accounting}/>
            </div>
        </div>





        {/* <Row gutter={32}>
            <Col span={12}>
                <DropDownTile content={TilesProduct[0].content} title={TilesProduct[0].title} image={Inventory}/>
            </Col>
            <Col span={12}>
                <DropDownTile content={TilesProduct[1].content} title={TilesProduct[1].title} image={Inventory}/>
            </Col>
        </Row>
        <div style={{padding : "15px"}}/>
        <Row gutter={32}>
            <Col span={12}>
                <DropDownTile content={TilesProduct[2].content} title={TilesProduct[2].title} image={Inventory}/>
            </Col>
            <Col span={12}>
                <DropDownTile content={TilesProduct[3].content} title={TilesProduct[3].title} image={Inventory}/>
            </Col>
        </Row>
        <div style={{padding : "15px "}}/>
        <Row gutter={32}>
            <Col span={12}>
                <DropDownTile content={TilesProduct[4].content} title={TilesProduct[4].title} image={Inventory}/>
            </Col>
            <Col span={12}>
                <DropDownTile content={TilesProduct[5].content} title={TilesProduct[5].title} image={Inventory}/>
            </Col>
        </Row> */}
        </>
    )

}

export default Tiles;