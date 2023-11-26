import React, { useState } from "react";

import { Button } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import Image from "next/image";
import cn from "classnames";
import limit from "../../styles/Limits.module.css";
import styles from "./styles.module.sass";

function TextNAnimation({ Title, SubTitle, Animation = false, ButtonText }) {
  return (
    <>
      <div className={styles.BG}>
        <div className={cn(limit.Limit)}>
          <div className={styles.BGBefore}></div>
          <div
            className={cn(
              styles.Container,
              !Animation && styles.ContainerWithoutAnimation
            )}
          >
            <div
              className={cn(
                styles.Left,
                !Animation && styles.LeftWithoutAnimation
              )}
            >
              <div className={styles.Text}>
                <div className={styles.Title}>{Title}</div>
                <div className={styles.SubTitle}>{SubTitle}</div>
              </div>
              <Button
                className={styles.Buttton}
                size="large"
                icon={<CalendarOutlined />}
              >
                {ButtonText}
              </Button>
            </div>
            {Animation && (
              <div className={styles.Right}>Animation PlaceHolder</div>
            )}
          </div>
          <div className={styles.BGAfter}></div>
        </div>
      </div>
    </>
  );
}

export default TextNAnimation;
