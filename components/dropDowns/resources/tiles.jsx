import {Col, Row} from 'antd';

import DropDownTile from '../../dropDownTile/index';
import Ecommerce from '../../../images/svgs/icons/Ecommerce.svg';
import PL from '../../../images/svgs/icons/3pl.svg';
import Retail from '../../../images/svgs/icons/forRetail.svg';
import {TilesResources} from '../../../strings.jsx';
import Wholesalers from '../../../images/svgs/icons/wholesale.svg';

const Tiles = () => {
    return(
        <>
        {/* {console.log(TilesProduct, "abcded")} */}
        <Row gutter={32}>
            <Col span={12}>
                <DropDownTile content={TilesResources[0].content} title={TilesResources[0].title} image={Retail}/>
            </Col>
            <Col span={12}>
                <DropDownTile content={TilesResources[1].content} title={TilesResources[1].title} image={Ecommerce}/>
            </Col>
        </Row>
        <div style={{padding : "15px"}}/>
        <Row gutter={32}>
            <Col span={12}>
                <DropDownTile content={TilesResources[2].content} title={TilesResources[2].title} image={PL}/>
            </Col>
            <Col span={12}>
                <DropDownTile content={TilesResources[3].content} title={TilesResources[3].title} image={Wholesalers}/>
            </Col>
        </Row>
        </>
    )

}

export default Tiles;