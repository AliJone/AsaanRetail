import {Input} from 'antd';
import style from './style.module.sass';

const InputField = ({placeHolder}) =>{
    return(
            <Input placeholder={placeHolder} bordered={false} />
    )
}

export default InputField;