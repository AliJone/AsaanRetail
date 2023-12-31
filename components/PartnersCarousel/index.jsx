import CustomFilledButton from "../buttons/filledButton/index.jsx";
import Image from "next/image";
import L0 from "./assests/Logo.svg";
import L1 from "./assests/Logo1.svg";
import L10 from "./assests/Logo10.svg";
import L11 from "./assests/Logo11.svg";
import L2 from "./assests/Logo2.svg";
import L3 from "./assests/Logo3.svg";
import L4 from "./assests/Logo4.svg";
import L5 from "./assests/Logo5.svg";
import L6 from "./assests/Logo6.svg";
import L7 from "./assests/Logo7.svg";
import L8 from "./assests/Logo8.svg";
import L9 from "./assests/Logo9.svg";
import cn from "classnames";
import limit from "../../styles/Limits.module.css";
import style from "./styleSheet.module.sass";
import { useRouter } from "next/router";

const imagesArray = [L0, L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, L11];
const PartnersCarousel = ({ images = imagesArray }) => {
  const router = useRouter();

  return (
    <div className={cn(style.carousel)}>
      <div className={cn(style.BG)}>
        <div className={cn(limit.Limit)}>
          <div className={cn(style.TitleContainer)}>
            <span className={cn(style.TitleText)}>
              All your <span className={cn(style.isDesktop)}>integrations</span>
              <span className={cn(style.isMobile, style.underLine)}>
                integrations
              </span>{" "}
              in one place
            </span>
          </div>
          <div className={cn(style.slider)}>
            <div className={cn(style.slideTrack)}>
              {images.map((partner) => (
                <div className={cn(style.slide)}>
                  <Image src={partner} alt={""} />
                </div>
              ))}
              {images.map((partner) => (
                <div className={cn(style.slide)}>
                  <Image src={partner} alt={""} />
                </div>
              ))}
            </div>
          </div>
          <div className={cn(style.ButtonClass)}>
            <CustomFilledButton
              children={
                <span className={cn(style.FilledButtonText)}>View All</span>
              }
              width={"100%"}
              handleClick={() => router.push("/integrations")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersCarousel;
