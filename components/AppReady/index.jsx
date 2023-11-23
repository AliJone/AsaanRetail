import React from "react";
import styles from "./styles.module.sass";
import limit from "../../styles/Limits.module.css";
import Image from "next/image";
import AppReadyImage from "./assets/images/AppReadyImage.png";
import AppReadyImageMobile from "./assets/images/AppReadyImageMobile.png";
// import AppReadyVideo from "./assets/videos/AppReadyVideo.mp4";

import cn from "classnames";

import { Button } from "antd";
import VerificationModal from "../VerificationCodeModal";

function AppReady() {
  return (
    <div className={cn(limit.Limit, styles.mobileContainer)}>
      <div className={styles.imageContainer}>
        <Image src={AppReadyImage} className={styles.desktopView} />
        <Image src={AppReadyImageMobile} className={styles.mobileView} />
      </div>
      <div className={styles.textContainer}>
        {/* // */}
        <h1 className={styles.heading}>Your App is Ready!</h1>

        <p className={styles.description}>
          Kudos on your new app creation!
          <br />
          Your journey to optimized operations starts now
        </p>

        <Button className={styles.LoginButton}>Login to your App</Button>
      </div>

      <VerificationModal />
    </div>
  );
}

export default AppReady;
