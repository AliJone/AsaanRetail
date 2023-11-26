import { Button } from "antd";
import Image from "next/image";
import React from "react";
import TimelineHead from "./assets/Timeline-Item-Head.png";
import TimelineHeadMob from "./assets/Timeline-Item-Head-Mob.png";
import classNames from "classnames";
import limit from '../../styles/Limits.module.css';
import styles from "./styles.module.sass";

const textData = ["Apply", "Refer", "Earn"];

function ARPartnerProgram() {
  return (
    <>
      {/* desktop view */}
      <div className={classNames(limit.Limit)}>
      <div className={classNames(styles.container, styles.desktopView)}>
      
        {/* // */}
        <h1 className={styles.titleText}>
          How does the Asaan Retail's <br />
          <span className={styles.underLine}>Partner </span> program work?
        </h1>

        <div className={styles.gridContainer}>
          <div className={styles.gridItem1}>
            {/* // */}

            {textData.map((text) => (
              <div className={styles.gridTextContainer}>
                <Image
                  src={TimelineHead}
                  alt=""
                  className={styles.timelineHeadImage}
                />
                <div className={styles.gridSubtextContainer}>
                  <h4 className={styles.gridSubheading}>{text}</h4>
                  <h5 className={styles.gridSubtext}>
                    Apply to become a partner through our user-friendly portal.
                    We're seeking established businesses who work with clients
                    that can benefit from our comprehensive software solutions.
                  </h5>
                </div>
              </div>
            ))}

            <Button className={styles.CTAButton}>Apply Now</Button>
          </div>
          <div className={styles.gridItem2}></div>
        </div>
        </div>
        
      </div>

      {/* mobile view */}
      <div className={classNames(styles.container, styles.mobileView)}>
        {/* // */}

        <div className={styles.gridContainer}>
          {/* // */}
          <div className={styles.gridItem1}>
            {/* // */}

            {textData.map((text) => (
              <div className={styles.gridTextContainer}>
                <Image
                  src={TimelineHeadMob}
                  alt=""
                  className={styles.timelineHeadImage}
                />
                <div className={styles.gridSubtextContainer}>
                  <h4 className={styles.gridSubheading}>{text}</h4>
                  <h5 className={styles.gridSubtext}>
                    Apply to become a partner through our user-friendly portal.
                    We're seeking established businesses who work with clients
                    that can benefit from our comprehensive software solutions.
                  </h5>
                </div>
              </div>
            ))}

            <Button className={styles.CTAButton}>Apply Now</Button>
          </div>

          <h1 className={styles.titleText}>
            How does the <br />
            Asaan <span className={styles.underLine}>Retail's </span> Partner
            program work?
          </h1>

          <div className={styles.gridItem2}>
            <Image src={""} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ARPartnerProgram;
