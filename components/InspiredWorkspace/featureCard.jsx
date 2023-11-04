import { Button } from "antd";
import Image from "next/image";
import cn from "classnames";
import style from "./styleSheet.module.sass";

const FeatureCard = ({title, description}) => {
    return(
        <div className={cn(style.featureCardContainer)}>
            <div className={cn(style.featureCardTitleContaier)}>
                <span className={cn(style.featureCardTitle)}>{title}</span>
            </div>
            <div className={cn(style.featureCardSubtitleTextContainer)}>
                <span className={cn(style.featureCardSubTitle)}>{description}</span>
            </div>
        </div>
    )
}

export default FeatureCard;