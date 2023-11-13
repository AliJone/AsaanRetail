import {Col, Row} from "antd"

import Image from "next/image"
import styles from "./style.module.sass"

const DropDownTile = ({ title, content , image }) => {

    return(
        <>
        <Row gutter={5}>
            <Col span={6} className={styles.imageClass}>
                <Image
                    src={image}
                    alt="Picture "
                />
            </Col>
            <Col span={18} className={styles.contentClassSetting}>
                <h2 className = {styles.titleClass}>{title}</h2>
                <p className = {styles.contentClass}>{content}</p>
            </Col>
        </Row>
        </>
    )
}

export default DropDownTile;