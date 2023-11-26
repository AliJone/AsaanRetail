import Image from 'next/image';
import cn from 'classnames';
import limit from '../../styles/Limits.module.css'
import style from './style.module.sass';

const Carousel = ({imagesarray})=>{

    return (
        <div className={cn(limit.Limit)}>
        <div className={cn(style.slider)}>
        <div className = {cn(style.slideTrack)}>
            {imagesarray.map((partner) => (
                <div className={cn(style.slide)}>
                    <Image src={partner} alt={""} />
                </div>
            ))}
            {imagesarray.map((partner) => (
                <div className={cn(style.slide)}>
                    <Image src={partner} alt={""} />
                </div>
            ))}
        </div>
    </div>
    </div>
    )
}

export default Carousel;