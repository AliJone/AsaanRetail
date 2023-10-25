import { Button } from "antd";
import Image from "next/image";
import cn from "classnames";
import style from "./styleSheet.module.sass";

const FeatureCard = ({icon, title, description}) => {
    return(
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
                    <span className={cn(style.featureCardButton)}>Learn More &gt;</span>
                </Button>
            </div>
            
            
        </div>
    )
}

export default FeatureCard;