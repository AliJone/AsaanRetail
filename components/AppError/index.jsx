import React from "react";
import styles from "./styles.module.sass";
import limit from "../../styles/Limits.module.css";
import Image from "next/image";
import AppErrorImage from "./assets/images/AppErrorImage.png";
import AppErrorImageMobile from "./assets/images/AppErrorImageMobile.png";

import cn from "classnames";

import { Button } from "antd";

function AppError() {
  return (
    <div className={cn(limit.Limit, styles.mobileContainer)}>
      <div className={styles.imageContainer}>
        <Image src={AppErrorImage} className={styles.desktopView} />
        <Image src={AppErrorImageMobile} className={styles.mobileView} />
      </div>
      <div className={styles.textContainer}>
        {/* // */}
        <h1 className={styles.heading}>Something went wrong! 😥</h1>

        <p className={styles.description}>
          Our team is already on it, working to resolve the issue.
          <br />
          Please bear with us, and we'll contact you soon.{" "}
        </p>

        <Button className={cn(styles.LoginButton, styles.mobileView)}>
          Login to your App
        </Button>

        <div className={styles.buttonsContainer}>
          <Button className={styles.goPricingButton}>Explore pricing</Button>
          <Button className={styles.goHomeButton}>Go to home</Button>
        </div>
      </div>
    </div>
  );
}

export default AppError;
