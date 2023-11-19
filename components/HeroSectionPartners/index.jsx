import CustomFilledButton from "../buttons/filledButton/index.jsx";
import Image from "next/image";
import PartnersImage from "./assests/ABC.png";
import cn from "classnames";
import limit from '../../styles/Limits.module.css';
import style from './styleSheet.module.sass';

const HeroSectionPartners = () =>{
    return(
        <>
        <div className = {cn(style.heroSection)}>
            <div className={cn(limit.Limit)}>
                <div className = {cn(style.container)}>
                    <div className = {cn(style.leftPane)}>
                        <div className={cn(style.textContainer)}>
                            <div className = {cn(style.titleContainer)}>
                                <p className={cn(style.titleText)}>
                                    Discover <br className={cn(style.isBreakPoint)}/> our <span className={style.underLine}>valued</span> collaborations
                                </p>
                            </div>
                            <div className = {cn(style.subTitleContainer)}>
                                <p className = {cn(style.subTitleText)}>
                                    Discover the benefits of joining our network of forward-thinking partners and experience the power of unity in commerce.
                                </p>
                            </div>
                        </div>
                        <div className = {cn(style.lowerContainer)}>
                            <div className={cn(style.buttonTextContainer)}>
                                <div  className={cn(style.buttonContainer)}>
                                    <CustomFilledButton children={<span className={cn(style.FilledButtonText)}>Apply Now</span>} width={"100%"} handleClick={()=>{}}  />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className = {cn(style.rightPane)}>
                        <div className={cn(style.ImageContainer)}>
                            <span/>
                            <Image className={cn(style.ImageDiv)} src={PartnersImage} alt="image"   />
                            
                        </div>

                        

                    </div>
                </div>
            </div>
            
            
        </div>
        </>
    )
}

export default HeroSectionPartners;