import { Col, Row } from "antd";

import cn from "classnames";
import limit from "../../../styles/Limits.module.css";
import styles from "./style.module.sass";

const  GenericDropDown = (props) => {
    return (
        <div className={cn(styles.backgroundOverlay)}>

            <div className = {cn(styles.background) }>
                
                    <div className={cn(styles.Container)}>
                    <div className = {cn(styles.AddPositioning)}>
                        <div>
                            {props.child1}
                        </div>
                        <div>
                            {props.child2}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default GenericDropDown;