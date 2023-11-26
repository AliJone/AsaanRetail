import { Col, Row } from "antd";

import CustomFilledButton from "../../buttons/filledButton";
import GenericDropDown from "../genericDropDown";
import ImageWithBGGradient from "../../imageWithBGGradient";
import Resources from "../../../images/svgs/Resources.svg";
import Tiles from "./tiles";
import styles from "./style.module.sass";

const ResourcesDropDown = () => {
    return(
        <div className = {styles.divAnimation}>
        <GenericDropDown
        child1 ={
            <>
            <Row>
                <Col span={24}>
                    {<><ImageWithBGGradient image={Resources} /></>}
                </Col>
                <Col span={24}>
                    <Row>
                        <h1 className = {styles.classText}>Experience the Asaan Retail Difference</h1>
                    </Row>
                    <Row>
                        <div className = {styles.backGround}>
                        <CustomFilledButton children={<div>Watch Demo</div>} />
                        </div>
                    </Row>
                </Col>
            </Row>
            </>
        }
        child2= {
            <>
            <Row>
                <Col span={24}>
                    <Tiles/>
                </Col>
            </Row>
            </>
        }
        
        />
        </div>
    )
}

export default ResourcesDropDown;