import { Col, Row } from "antd";

import CustomFilledButton from "../../buttons/filledButton";
import GenericDropDown from "../genericDropDown";
import Image from "next/image"
import ImageWithBGGradient from "../../imageWithBGGradient";
import Resources from "../../../images/svgs/Resources.svg";
import Tiles from "./tiles";
import cn from "classnames";
import styles from "./style.module.sass";

const ResourcesDropDown = () => {
    return(
        <>
        <GenericDropDown
        child1 ={
            <>
                <div className = {styles.LeftPane}>
                    <div className={cn(styles.ImageDiv)}>
                        <Image src={Resources} alt="Sales Orders" />
                    </div>
                    <div className={cn(styles.LeftPaneDesContainer)}>
                        <h1 className={cn(styles.LeftPaneTextContainer)} >
                            Experience the Asaan Retail Difference
                        </h1>

                        <div >
                        <CustomFilledButton children={<span className={cn(styles.buttonText)}>Start Free Trial</span>} width={'inherit'} />
                        </div>

                    </div>

                </div>
            </>
        }
        child2= {
            <>
            <div className={cn(styles.RightPane)}>
                <Tiles/>
            </div>
            </>
        }
        
        />
        </>
        // <div className = {styles.divAnimation}>
        // <GenericDropDown
        // child1 ={
        //     <>
        //     <Row>
        //         <Col span={24}>
        //             {<><ImageWithBGGradient image={Resources} /></>}
        //         </Col>
        //         <Col span={24}>
        //             <Row>
        //                 <h1 className = {styles.classText}>Experience the Asaan Retail Difference</h1>
        //             </Row>
        //             <Row>
        //                 <div className = {styles.backGround}>
        //                 <CustomFilledButton children={<div>Watch Demo</div>} />
        //                 </div>
        //             </Row>
        //         </Col>
        //     </Row>
        //     </>
        // }
        // child2= {
        //     <>
        //     <Row>
        //         <Col span={24}>
        //             <Tiles/>
        //         </Col>
        //     </Row>
        //     </>
        // }
        
        // />
        // </div>
    )
}

export default ResourcesDropDown;