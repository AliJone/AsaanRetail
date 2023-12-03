import { Col, Row } from "antd";

import cn from "classnames";
import limit from "../../../styles/Limits.module.css";
import styles from "./style.module.sass";

const  GenericDropDown = (props) => {
    return (
        <div className={cn(styles.backgroundOverlay)}>

            <div className = {cn(styles.background) }>
                
                    <div className={cn(styles.Container)}>
                    <div className= {cn(limit.Limit,styles.limitOveride)}>
                        <div>
                            {props.child1}
                        </div>
                        <div>
                            {props.child2}
                        </div>

                    </div>
                {/* <Row gutter={10} style = {{width : "100%"}}>
                    <Col span={8}>
                        {props.child1}
                    </Col>
                    <Col span={16}>
                        {props.child2}
                    </Col>
                </Row> */}
                </div>
            </div>
        </div>
    )
}

export default GenericDropDown;