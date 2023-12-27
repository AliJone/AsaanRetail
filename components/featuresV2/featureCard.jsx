import { Button } from "antd";
import Image from "next/image";
import cn from "classnames";
import style from "./styleSheet.module.sass";
import ScrollAnimation from "react-animate-on-scroll";

const FeatureCard = ({ icon, title, description, handleClick }) => {
  return (
    <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp">
      <div className={cn(style.featureCardContainer)} onClick={handleClick}>
        <div className={cn(style.spacer2)} />
        <div className={cn(style.featureCardIconDiv)}>
          <Image src={icon} alt="icon" />
        </div>
        <div className={cn(style.spacer2)} />
        <div className={cn(style.featureCardTextDiv)}>
          <h3 className={cn(style.featureCardTitle)}>{title}</h3>
        </div>
        <div className={cn(style.spacer2)} />
        <div className={cn(style.featureCardTextDiv)}>
          <h5 className={cn(style.featureCardSubTitle)}>{description}</h5>
        </div>
        <div className={cn(style.spacer2)} />
        <div className={cn(style.featureCardIconDiv)}>
          <Button type="text" onClick={handleClick} style={{ padding: "0px" }}>
            {/* <span className={cn(style.featureCardButton)}>Learn More &gt;</span> */}
            <h5 className={style.Link}>
              Learn More <span className={style.arrow}> &gt; </span>
            </h5>
          </Button>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default FeatureCard;
