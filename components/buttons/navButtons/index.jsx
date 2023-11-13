import { Button } from "antd"
import classNames from "classnames";
import style from './style.module.sass';

const CustomNavButtons = ({children,handleClick}) => {
    return(
        <>
            <Button type = "text"  className={classNames( style.textButtonClass)} onClick = {handleClick}>
                {children}
            </Button>
        </>
    )
}

export default CustomNavButtons;