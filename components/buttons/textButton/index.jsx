import {Button} from 'antd';
import classNames from 'classnames';
import style from './style.module.sass';

const CustomTextButton = (props) => {

    
    return(
        <>
        {
            props.check !== undefined?
                <Button type="text" className = {style.textButtonClass} onClick = {props.handleClick}>
                {props.children}
                </Button>
            :
                <Button  type="text" className = {style.textButtonClass} onClick = {props.handleClick}>
                    {props.children}
                </Button>
        }
        </>
    )
}

export default CustomTextButton;