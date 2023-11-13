import {Col, Row} from 'antd';

import Accounting from '../../../images/svgs/icons/Accounting_and_Finance.svg';
import Analytics from '../../../images/svgs/icons/Analytics.svg';
import DropDownTile from '../../dropDownTile/index';
import Inventory from '../../../images/svgs/icons/InventoryManagement.svg';
import OrdersManagement from '../../../images/svgs/icons/OrderManagement.svg';
import PointOfSales from '../../../images/svgs/icons/pointOfSales.svg';
import React from 'react';
import Shipment from '../../../images/svgs/icons/shipmentManagement.svg';
import {TilesProduct} from '../../../strings.jsx';

const Tiles = () => {
    return(
        <>
        {/* {console.log(TilesProduct, "abcded")} */}
        <Row gutter={32}>
            <Col span={12}>
                <DropDownTile content={TilesProduct[0].content} title={TilesProduct[0].title} image={Inventory}/>
            </Col>
            <Col span={12}>
                <DropDownTile content={TilesProduct[1].content} title={TilesProduct[1].title} image={Shipment}/>
            </Col>
        </Row>
        <div style={{padding : "15px"}}/>
        <Row gutter={32}>
            <Col span={12}>
                <DropDownTile content={TilesProduct[2].content} title={TilesProduct[2].title} image={Accounting}/>
            </Col>
            <Col span={12}>
                <DropDownTile content={TilesProduct[3].content} title={TilesProduct[3].title} image={Analytics}/>
            </Col>
        </Row>
        <div style={{padding : "15px "}}/>
        <Row gutter={32}>
            <Col span={12}>
                <DropDownTile content={TilesProduct[4].content} title={TilesProduct[4].title} image={OrdersManagement}/>
            </Col>
            <Col span={12}>
                <DropDownTile content={TilesProduct[5].content} title={TilesProduct[5].title} image={PointOfSales}/>
            </Col>
        </Row>
        </>
    )

}

export default Tiles;