import cn from "classnames";
import style from './styleSheet.module.sass';

const Tag = (props) => {
    return(
        <span className={cn(style.tagClass,style.tagFont)}>
            {props.text}
        </span>
        
    )
}
export default Tag;