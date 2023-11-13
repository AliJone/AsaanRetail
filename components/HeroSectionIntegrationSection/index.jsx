import CarouselIntegration from './carousel';
import CustomFilledButton from '../buttons/filledButton';
import InputField from '../InputField';
import c1 from './assests/c1.svg';
import c2 from './assests/c2.svg';
import c3 from './assests/c3.svg';
import c4 from './assests/c4.svg';
import c5 from './assests/c5.svg';
import c6 from './assests/c6.svg';
import c7 from './assests/c7.svg';
import cn from 'classnames';
import style from './styleSheet.module.sass';

const HeroSectionIntegrationSection = () => {
    const imagesarray = [c1,c2,c3,c4,c5,c6,c7];
    return(
        <>
            <div className={cn(style.heroSection)}>
                <div className={cn(style.heroSectionBG)}>
                    <div className={cn(style.textContainer)}>
                        <div className ={cn(style.titleContainer)}>
                            <span className={cn(style.titleText)}>
                            Every <span className = {cn(style.underLine)}>integration</span> you need is here
                            </span>

                        </div>
                        <div className={cn(style.subTitleContainer)}>
                            <span className={cn(style.subTitleText)}>
                                At Asaan Retail, we're your gateway to seamless connections and unmatched performance.
                            </span>
                        </div>

                        <div className={cn(style.textFieldContainer)}>
                            <div className={cn(style.textFieldCard)}>
                                <InputField placeHolder={"Enter Your Work Email"}/>
                            </div>
                            <span className={cn(style.greyText)}>
                                Experience 14 Days of Free Trial, No Credit Card Needed
                            </span>
                            <div className = {cn(style.buttonContainer)}>
                            <CustomFilledButton width={'inherit'} children={<span className={cn(style.buttonText)}>Start Free Trial</span>} />
                            </div>
                            
                            
                            <div className={cn(style.carouselContainer)}>
                                <CarouselIntegration imagesarray={imagesarray}/>
                            </div>
                            
                        </div>

                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default HeroSectionIntegrationSection;