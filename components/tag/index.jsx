import cn from "classnames";
import style from './styleSheet.module.sass';

const Tag = (props) => {
    return(
        <span className={props.alternative != undefined? cn(style.tagClass1,style.tagFont) :cn(style.tagClass,style.tagFont)}>
            {props.text}
        </span>
        
    )
}
export default Tag;