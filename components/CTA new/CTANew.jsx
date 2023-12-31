import { Button } from "antd";
import Image from "next/image";
import React from "react";
import cn from "classnames";
import image1 from "./assets/images/image1.png";
import image2 from "./assets/images/image2.png";
import limit from "../../styles/Limits.module.css";
import styles from "./styles.module.sass";
import CustomFilledButton from "../buttons/filledButton/index";
import CustomOutlinedButton from "../buttons/outlinedButton/index";
import { useRouter } from "next/router";

function CTANew() {
  const router = useRouter();

  return (
    <>
      <div className={styles.CTANew}>
        <div className={cn(limit.Limit)}>
          <div className={styles.CTABoxRight}> </div>

          <div className={styles.CTABox}>
            <div className={styles.CTARight}>
              <h2 className={styles.Text}>
                Start <span className={styles.GradientSurface}> 14 days </span>{" "}
                free trial or book a demo with us
              </h2>
              <div className={styles.Buttons}>
                <div>
                  <CustomOutlinedButton
                    width={"11.875rem"}
                    handleClick={() =>
                      router.push(
                        "https://calendly.com/asaan-retail/onboarding-session"
                      )
                    }
                  >
                    <span className={styles.buttonText}>Get Demo</span>
                  </CustomOutlinedButton>
                </div>

                <div>
                  <CustomFilledButton
                    width={"11.875rem"}
                    handleClick={() => router.push("start-free-trial")}
                  >
                    <span className={styles.buttonText}>Start Free Trial</span>
                  </CustomFilledButton>
                </div>
              </div>
            </div>
            <div className={styles.CTALeft}>
              <div className={styles.Image1}>
                <Image src={image1} alt="image1" />
              </div>
              <div className={styles.Image2}>
                <Image src={image2} alt="image1" />
              </div>
            </div>
          </div>
          <div className={styles.CTABoxLeft}> </div>
        </div>
      </div>
    </>
  );
}

export default CTANew;
