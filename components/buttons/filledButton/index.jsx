import {Button} from 'antd';
import style from './style.module.sass';

const CustomFilledButton = ( props) => {
    return (
        <Button onClick = {props.handleClick} className = {style.buttonClass} >
            {props.children}
        </Button>
    )
}

export default CustomFilledButton;