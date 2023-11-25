import Image from 'next/image';
import cn from 'classnames';
import style from './style.module.sass';

const Carousel = ({imagesarray})=>{

    return (
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
        // ,style.divAnimation
        // <div className={cn(style.divContainer)}>
        // <div className={cn(style.blurLeft)} />
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
        // <div className={cn(style.blurRight)}/>
        // </div>
    )
}

export default Carousel;