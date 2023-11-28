import { Button } from "antd";
import Image from "next/image";
import cn from "classnames";
import style from "./styleSheet.module.sass";
import ScrollAnimation from "react-animate-on-scroll";

const FeatureCard = ({icon, title, description}) => {
    return(
        <ScrollAnimation animateIn="animate__fadeInUp">
            <div className={cn(style.featureCardContainer)}>
            <div className={cn(style.spacer2)}/>
            <div className={cn(style.featureCardIconDiv)}>
                <Image src={icon} alt="icon"/>
            </div>
            <div className={cn(style.spacer2)}/>
            <div className={cn(style.featureCardTextDiv)}>
                <span className={cn(style.featureCardTitle)}>{title}</span>
            </div>
            <div className={cn(style.spacer2)}/>
            <div className={cn(style.featureCardTextDiv)}>
                <span className={cn(style.featureCardSubTitle)}>{description}</span>
            </div>
            <div className={cn(style.spacer2)}/>
            <div className={cn(style.featureCardIconDiv)}>
                <Button  type="text" onClick = {()=>{}} style={{padding:"0px"}}>
                    {/* <span className={cn(style.featureCardButton)}>Learn More &gt;</span> */}
                    <div className={style.Link} >Learn More <span className={style.arrow}> &gt; </span></div>
                </Button>
            </div>
            
            
        </div>
        </ScrollAnimation>
        
    )
}

export default FeatureCard;