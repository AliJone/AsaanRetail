import Icon from './assests/Icon.svg';
import Image from 'next/image';
import cn from 'classnames';
import style from './styleSheet.module.sass';

const Card = ({title}) =>{
    return(
        <div className = {cn(style.cardLayout)}>
            <div className = {cn(style.cardTitleContainer)}>
                <Image src={Icon} alt='logo'/>
            </div>
            <div className = {cn(style.cardTitleContainer)}>
                <span className={cn(style.cardTitleText)}>
                    {title}
                </span>
            </div>
        </div>
    )
}

export default Card;