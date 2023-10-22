import cn from 'classnames';
import style from './style.module.sass';

const TextDiv = (props)=>{
    return(
        <div  >
            <span className = {style.NonColorText}>
                    {props.TextB4ColorText}
                <span className = {style.ColorText}>
                    <br/>
                    {props.TextColorText }
                </span>
                    {" "+props.TextAfterColorText}
                    <br/>
                    {props.TextAfterColorText2}
            </span>
            
        </div>
    )
}

export default TextDiv;