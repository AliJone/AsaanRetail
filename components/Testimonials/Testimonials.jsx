import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import React, { useState } from "react";

import { Button } from "antd";
import Image from "next/image";
import cn from "classnames";
import highfy from "./assets/images/highfy.png";
import highfyMan from "./assets/images/highfyMan.png";
import limit from "../../styles/Limits.module.css";
import styles from "./styles.module.sass";

function Testimonials() {
  const data = [
    {
      quote:
        "Asaan Retail streamlined our retail and e-commerce operations seamlessly with efficient inventory, orders, and accounting management. Highly recommended!",
      name: "Hanzala Raja",
      position: "Co-Founder, Highfy.pk",
      image: highfyMan,
      logo: highfy,
    },
    {
      quote:
        "Asdfadfsdsaan Retail streamlined our retail and e-commerce operations seamlessly with efficient inventory, orders, and accounting management. Highly recommended!",
      name: "Hanzasdf Raja",
      position: "Co-Fasdfasdounder, Highfy.pk",
      image: highfyMan,
      logo: highfy,
    },
    {
      quote:
        "Asaaasdfasdn Retail streamlined our retail and e-commerce operations seamlessly with efficient inventory, orders, and accounting management. Highly recommended!",
      name: "Hanza Raja",
      position: "Co-Foasdfasunder, Highfy.pk",
      image: highfyMan,
      logo: highfy,
    },
    // Add more testimonials as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div className={styles.BG}>
        <div className={cn(limit.Limit)}>
          <div className={styles.Test}>
            <div className={cn(styles.TestRight, styles.MobileView)}>
              <div className={styles.ImageWrapper}>
                <Image
                  src={data[currentIndex].image}
                  alt="Testimonial Picture"
                  className={styles.TestimonialImage}
                />
                <Image
                  src={data[currentIndex].logo}
                  alt="Logo"
                  className={styles.LogoImage}
                />
              </div>
            </div>
            <div className={styles.TestLeft}>
              <div className={styles.Button}>
                <Button className={styles.ButtonAntd}>Testimonials</Button>
              </div>
              <h5 className={styles.Qoute}>{data[currentIndex].quote}</h5>
              <div className={styles.Name}>
                <h2 className={styles.NameHead}>{data[currentIndex].name}</h2>
                <h5 className={styles.NameBody}>
                  {data[currentIndex].position}
                </h5>
              </div>
              <div className={styles.Arrows}>
                <div
                  className={cn(
                    { [styles.NoMoreTesti]: currentIndex === 0 },
                    styles.Arrow
                  )}
                  onClick={() =>
                    currentIndex > 0 && setCurrentIndex(currentIndex - 1)
                  }
                >
                  <ArrowLeftOutlined />
                </div>
                <div
                  className={cn(
                    { [styles.NoMoreTesti]: currentIndex === data.length - 1 },
                    styles.Arrow
                  )}
                  onClick={() =>
                    currentIndex < data.length - 1 &&
                    setCurrentIndex(currentIndex + 1)
                  }
                >
                  <ArrowRightOutlined />
                </div>
              </div>
            </div>
            <div className={cn(styles.TestRight, styles.DesktopView)}>
              <div className={styles.ImageWrapper}>
                <Image
                  src={data[currentIndex].image}
                  alt="Testimonial Picture"
                  className={styles.TestimonialImage}
                />
                <Image
                  src={data[currentIndex].logo}
                  alt="Logo"
                  className={styles.LogoImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
