import { Col, Row } from "antd";

import ScrollAnimation from "react-animate-on-scroll";
import cn from "classnames";
import styles from "./style.module.sass";

const  GenericDropDown = (props) => {

    
    return (
        <div className={cn(styles.backgroundOverlay)}>

            <div className = {cn(styles.background) }>
                    <ScrollAnimation animateOnce={true} animateIn="animate__fadeIn">
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
                </ScrollAnimation>  
            </div>
        </div>
    )
}




export default GenericDropDown;