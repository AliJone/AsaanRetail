import { Button } from "antd";
import Image from "next/image";
import React from "react";
import cn from "classnames";
import limit from "../../styles/Limits.module.css";
import styles from "./styles.module.sass";
import video from "./assets/images/video.png";
import videoSmall from "./assets/images/videoSmall.png";

function ThroughLense() {
  return (
    <>
      <div className={styles.BG}>
        <div className={cn(limit.Limit)}>
          <div className={styles.Container}>
            <div className={styles.ContainerLeft}>
              <h1 className={styles.Heading}>Asaan Retail through the lens</h1>
              <h5 className={styles.SubHeading}>
                Explore how Asaan Retail works for every industries
              </h5>
            </div>
            <div className={cn(styles.ContainerRight, styles.DesktopView)}>
              {" "}
              <Image src={video} />{" "}
            </div>
            <div className={cn(styles.ContainerRight, styles.MobileView)}>
              {" "}
              <Image src={videoSmall} />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThroughLense;
