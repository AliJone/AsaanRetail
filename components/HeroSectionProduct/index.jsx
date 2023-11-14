import CustomFilledButton from "../buttons/filledButton/index.jsx";
import Image from "next/image";
import InputField from '../InputField/index.jsx';
import cn from "classnames";
import landingImage from './assests/landpagePic.png'
import style from './styleSheet.module.sass';

const HeroSectionProduct = () =>{
    return(
        <>
        <div className = {cn(style.heroSection)}>
            <div className = {cn(style.container)}>
            <div className = {cn(style.leftPane)}>
                <div className={cn(style.textContainer)}>
                    <div className = {cn(style.titleContainer)}>
                        <span className={cn(style.titleText)}>
                            Hassle <span className={style.underLine}>free</span> <span className={style.underLine}>Inventory</span> Management
                        </span>
                    </div>
                    <div className = {cn(style.subTitleContainer)}>
                        <span className = {cn(style.subTitleText)}>
                        Manual inventory hassles driving you up the wall? Our inventory management solution is your ladder to efficient, error-free control.
                        </span>
                    </div>
                </div>
                <div className = {cn(style.lowerContainer)}>
                    <div className = {style.FieldClass}>
                        <InputField placeHolder={"Enter Your Work Email"}/>
                    </div>
                    <div className={cn(style.buttonTextContainer)}>
                        <div  className={cn(style.buttonContainer)}>
                            <CustomFilledButton children={<span className={cn(style.FilledButtonText)}>Start Free Trial</span>} width={"100%"} handleClick={()=>{}}  />
                        </div>
                        <div className={cn(style.greyTextContainer)}>
                            <span className = {cn(style.greyText)}>
                            Experience 14 Days of Free Trial, No Credit Card Needed
                            </span>

                        </div>
                    </div>

                </div>
            </div>
            <div className = {cn(style.rightPane)}>
                <div className={cn(style.ImageContainer)}>
                    <span/>
                    <Image className={cn(style.ImageDiv)} src={landingImage} alt="image"   />
                    
                </div>

                

            </div>
            </div>
            
            
        </div>
        <div className = {cn(style.spacer1)} />
        </>
    )
}

export default HeroSectionProduct;