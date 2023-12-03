import Image from 'next/image';
import cn from 'classnames';
import style from './styleSheet.module.sass';

const CarouselIntegration = ({imagesarray})=>{

    return (

        <div className={cn(style.slider)}>
                        <div className = {cn(style.slideTrack)}>
                            {imagesarray.map((image) => {
                                return(
                                <div className={cn(style.slide)}>
                                    <Image src={image} alt={""} />
                                </div>
                                )
                            }
                            )}
                            {imagesarray.map((image) => {
                                return(
                                <div className={cn(style.slide)}>
                                    <Image src={image} alt={""} />
                                </div>
                                )
                            }
                            )}
                        </div>
                    </div>
        // ,style.divAnimation
        // <div className ={cn(style.CarouselClass,style.divAnimation)} >
        //     {
        //         imagesarray.map((image,index)=>{
        //             return (
        //                 <div className={style.image}>
        //                     <Image key={index} src = {image} />
        //                 </div>
        //             )
        //         })
        //     }
        //     {
        //         imagesarray.map((image,index)=>{
        //             return (
        //                 <div className={style.image}>
        //                     <Image key={index} src = {image} />
        //                 </div>
        //             )
        //         })
        //     }
        // </div>
    )
}

export default CarouselIntegration;