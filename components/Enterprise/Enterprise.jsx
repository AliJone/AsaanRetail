import React, { useState } from "react";

import { Button } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import GradientLine from "../gradientLine";
import Image from "next/image";
import cn from "classnames";
import limit from "../../styles/Limits.module.css";
import styles from "./styles.module.sass";
import CustomFilledButton from "../buttons/filledButton";
import { useRouter } from "next/router";

function Enterprise() {
  const router = useRouter();

  return (
    <>
      <div className={styles.BG}>
        <div className={cn(limit.Limit)}>
          <div className={styles.Container}>
            <div className={styles.Left}>
              <div className={styles.Text}>
                <h2 className={styles.Title}>
                  Enterprise <GradientLine width="100%" height="7px" />
                </h2>
                <h5 className={styles.SubTitle}>
                  Built for larger organizations who want to scale with
                  confidence.
                </h5>
              </div>
              {/* <Button className={styles.Buttton} size="large">
                Contact Sales
              </Button> */}

              <CustomFilledButton
                size={"large"}
                width={"11.875rem"}
                handleClick={() => router.push("/contact-us")}
              >
                <span className={styles.buttonText}>Contact Sales</span>
              </CustomFilledButton>
            </div>
            <div className={styles.Right}>Animation PlaceHolder</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Enterprise;
