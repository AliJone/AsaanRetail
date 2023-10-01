import {Input} from 'antd';
import style from './style.module.sass';

const InputField = ({placeHolder}) =>{
    return(
        
            <Input size="large" placeholder= {placeHolder} />
    )
}

export default InputField;