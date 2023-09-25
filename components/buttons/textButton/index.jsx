import {Button} from 'antd';
import style from './style.module.sass';

const CustomTextButton = (props) => {

    return(
        <Button type="text" className = {style.textButtonClass} onClick = {props.handleClick}>
            {props.children}
        </Button>
    )
}

export default CustomTextButton;