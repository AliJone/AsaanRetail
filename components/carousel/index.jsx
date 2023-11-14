import Image from 'next/image';
import cn from 'classnames';
import style from './style.module.sass';

const Carousel = ({imagesarray})=>{

    return (
        // ,style.divAnimation
        <div className={cn(style.divContainer)}>
        <div className={cn(style.blurLeft)} />
        <div className ={cn(style.CarouselClass,style.divAnimation)} >
            {
                imagesarray.map((image,index)=>{
                    return (
                        <div className={style.image}>
                            <Image key={index} src = {image} />
                        </div>
                    )
                })
            }
            
        </div>
        <div className={cn(style.blurRight)}/>
        </div>
    )
}

export default Carousel;