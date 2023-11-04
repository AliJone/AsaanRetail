import CustomFilledButton from '../buttons/filledButton';
import InputField from '../InputField';
import cn from 'classnames';
import style from './styleSheet.module.sass';

const HeroSectionIntegrationSection = () => {
    return(
        <>
            <div className={cn(style.heroSection)}>
                <div className={cn(style.heroSectionBG)}>
                    <div className={cn(style.textContainer)}>
                        <div className ={cn(style.titleContainer)}>
                            <span className={cn(style.titleText)}>
                            Every <span className = {cn(style.underLine)}><span/>integration</span> you need is here
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
                            <CustomFilledButton children={<span className={cn(style.buttonText)}>Start Free Trial</span>} />
                            </div>
                            {/* greyText */}
                            
                        </div>

                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default HeroSectionIntegrationSection;