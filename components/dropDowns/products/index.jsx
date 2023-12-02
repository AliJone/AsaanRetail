import { Col, Row } from "antd";

import CustomFilledButton from "../../buttons/filledButton";
import GenericDropDown from "../genericDropDown";
import Image from "next/image"
import ImageWithBGGradient from "../../imageWithBGGradient";
import IntegrationTile from "./integrationTile";
import SalesOrders from "../../../images/svgs/salesOrders.svg";
import Tiles from "./tiles";
import cn from "classnames";
import styles from "./style.module.sass";

const ProductsDropDown = () => {
    return(
        // <div className = {styles.divAnimation}>
        <GenericDropDown
        child1 ={
            <>
                <div className = {styles.LeftPane}>
                    <div className={cn(styles.ImageDiv)}>
                        <Image src={SalesOrders} alt="Sales Orders" />
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
                <IntegrationTile/>
            </div>
            </>
        }
        
        />
        // </div>
    )
}

export default ProductsDropDown;