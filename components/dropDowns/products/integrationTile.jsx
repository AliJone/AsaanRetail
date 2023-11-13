import {Col, Row} from "antd"

import CustomFilledButton from "../../buttons/filledButton";
import DropDownTile from "../../dropDownTile";
import Integration from "../../../images/svgs/icons/Integrations.svg";
import { TilesProduct } from "../../../strings";
import classNames from 'classnames';
import styles from "./style.module.sass"

const IntegrationTile = ()=>{
    const integrationClass = classNames(styles.integrationButtonClass, styles.backGround);
    return(
        <>
            <div className = {styles.divClass}>

                <Row gutter = {4}>
                    <Col span = {18}>
                        <DropDownTile content={TilesProduct[0].content} title={TilesProduct[0].title} image={Integration}/>
                    </Col>
                    <Col span = {6} s>
                        <div className = {styles.integrationButtonClass}>
                            <div className = {styles.backGround}>
                            <CustomFilledButton children={<div>Watch Demo</div>} />
                            </div>
                        </div>
                    </Col>
                </Row>

            </div>
        </>
    )
}
export default IntegrationTile;