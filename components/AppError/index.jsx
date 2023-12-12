import AppErrorImage from "./assets/images/AppErrorImage.png";
import AppErrorImageMobile from "./assets/images/AppErrorImageMobile.png";
import { Button } from "antd";
import Image from "next/image";
import React from "react";
import cn from "classnames";
import limit from "../../styles/Limits.module.css";
import styles from "./styles.module.sass";
import { useRouter } from "next/router";
import CustomFilledButton from "../buttons/filledButton";
import CustomOutlinedButton from "../buttons/outlinedButton";

function AppError() {
  const router = useRouter();

  const handleHomeButtonclick = () => {
    router.push("/");
  };
  const handlePricingButtonclick = () => {
    router.push("/pricingPage");
  };

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
          <Button
            className={styles.goPricingButton}
            onClick={handlePricingButtonclick}
          >
            Explore pricing
          </Button>
          <Button
            className={styles.goHomeButton}
            onClick={handleHomeButtonclick}
          >
            Go to home
          </Button>
        </div>

        <div className={styles.buttonsContainer}>
          <Button
            className={styles.goPricingButton}
            onClick={handlePricingButtonclick}
          >
            Explore pricing
          </Button>

          <CustomFilledButton width={"47%"}>Go to home</CustomFilledButton>
        </div>
      </div>
    </div>
  );
}

export default AppError;
