import cn from 'classnames';
import style from './styleSheet.module.sass';

const CardManyMore = ({ title, description}) => {
    return(
        <>
            <div className ={cn(style.cardLayout)}>
                <div >
                    <span className={cn(style.cardTitleText)}>{title}</span>
                </div>
                <div className={cn(style.cardSubText)}>
                    <span className={cn(style.cardSubTitleText)}>{description}</span>
                </div>
            </div>
        </>
    );
}

export default CardManyMore;   