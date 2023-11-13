import Image from 'next/image';
import cn from 'classnames';
import style from './styleSheet.module.sass';

const CarouselIntegration = ({imagesarray})=>{

    return (
        // ,style.divAnimation
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
    )
}

export default CarouselIntegration;