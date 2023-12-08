import {Col, Row} from "antd"

import Image from "next/image"
import cn from "classnames";
import styles from "./style.module.sass"

const DropDownTile = ({ title, content , image , handleClick }) => {

    return(
        <>
        <div className={cn(styles.TileContainer)} onClick={handleClick == undefined ? ()=>{} : handleClick}>
                <Image src={image} alt="Picture" />
            <div className={cn(styles.TileTextContainer)}>
                <h2 className={cn(styles.TileTitle)}>{title}</h2>
                <p className={cn(styles.TileContent)}>{content}</p>
            </div>
        </div>
       
        </>
    )
}

export default DropDownTile;