import Check from './assests/check.svg';
import CustomFilledButton from '../buttons/filledButton';
import CustomTextButton from '../buttons/textButton';
import Image from 'next/image';
import cn from 'classnames';
import style from './styleSheet.module.sass';

const PricingCard = ({ title, subtitle, price, features , type }) => {
    return(
        
            <div className={type == 1 ? cn(style.cardFrame,style.tagOnCard) : cn(style.cardFrame2)}>
                
                <div className={cn(style.textContainer)}>
                    <span className={type ==1 ?  cn(style.cardTitle) : cn(style.cardTitle2)}>
                        {title}
                    </span>

                    <span className={type == 1 ? cn(style.cardSubTitle): cn(style.cardSubtTitle2)}>
                        {subtitle}
                    </span>
                </div>

                <div className={cn(style.pricingFrameCard)}>
                    <span className={type == 1 ? cn(style.cardPrice): cn(style.cardPrice2)}>
                        {price}
                    </span>
                    <div className={cn(style.buttonsCardContainer)}>
                        <CustomFilledButton width = {"inherit"} handleClick = {()=>{}} children={"Get Started"} />
                        <CustomTextButton handleClick = {()=>{}} children={<span className={type == 1 ?cn(style.textButtonText) : cn(style.textButtonText2)}>Customize</span>} />
                    </div>

                </div>

                <div className={cn(style.featureDiv)}>
                    {
                        features.map((feature, index) => {
                            return(
                                <div className={cn(style.featureContainer)} key={index}>
                                    <Image src={Check} alt="check" className={cn(style.checkDim)}/>
                                    <div className={type == 1 ? cn(style.cardFeatures): cn(style.cardFeatures2)}>
                                        {feature}
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

                <div className = {cn(style.spacerCard1)}/>


            </div>
        
    )

}

export default PricingCard;