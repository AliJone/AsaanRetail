import { Col, Row } from "antd";

import styles from "./style.module.sass";

const  GenericDropDown = (props) => {
    return (
        <>
            <div className = {styles.background}>
                <Row gutter={10} style = {{width : "100%"}}>
                    <Col span={8}>
                        {props.child1}
                    </Col>
                    <Col span={16}>
                        {props.child2}
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default GenericDropDown;