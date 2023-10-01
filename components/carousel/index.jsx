import Image from 'next/image';
import cn from 'classnames';
import style from './style.module.sass';

const Carousel = ({imagesarray})=>{

    return (
        // ,style.divAnimation
        <div className ={cn(style.CarouselClass,style.divAnimation)} >
            {
                imagesarray.map((image,index)=>{
                    return (
                            <Image key={index} src = {image} />
                    )
                })
            }
            {
                imagesarray.map((image,index)=>{
                    return (
                            <Image key={index} src = {image} />
                    )
                })
            }
        </div>
    )
}

export default Carousel;