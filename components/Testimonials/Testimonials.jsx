import React, { useState } from 'react';
import Image from 'next/image';

import styles from './styles.module.sass';
import { Button } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

import cn from 'classnames';

import highfyMan from './assets/images/highfyMan.png';
import highfy from './assets/images/highfy.png';

function Testimonials() {
  const data = [
    {
      quote: "Asaan Retail streamlined our retail and e-commerce operations seamlessly with efficient inventory, orders, and accounting management. Highly recommended!",
      name: "Hanzala Raja",
      position: "Co-Founder, Highfy.pk",
      image: highfyMan,
      logo: highfy
    },
    {
      quote: "Asdfadfsdsaan Retail streamlined our retail and e-commerce operations seamlessly with efficient inventory, orders, and accounting management. Highly recommended!",
      name: "Hanzasdf Raja",
      position: "Co-Fasdfasdounder, Highfy.pk",
      image: highfyMan,
      logo: highfy
    },
    {
      quote: "Asaaasdfasdn Retail streamlined our retail and e-commerce operations seamlessly with efficient inventory, orders, and accounting management. Highly recommended!",
      name: "Hanza Raja",
      position: "Co-Foasdfasunder, Highfy.pk",
      image: highfyMan,
      logo: highfy
    },
    // Add more testimonials as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
    <div className={styles.BG}>
      <div className={styles.Test}>
        <div className={cn(styles.TestRight, styles.MobileView)}>
          <div className={styles.ImageWrapper}>
            <Image src={data[currentIndex].image} alt="Testimonial Picture" className={styles.TestimonialImage} />
            <Image src={data[currentIndex].logo} alt="Logo" className={styles.LogoImage} />
          </div>
        </div>
        <div className={styles.TestLeft}>
          <div className={styles.Button}>
            <Button className={styles.ButtonAntd}>Testimonials</Button>
          </div>
          <div className={styles.Qoute}>{data[currentIndex].quote}</div>
          <div className={styles.Name}>
            <div className={styles.NameHead}>{data[currentIndex].name}</div>
            <div className={styles.NameBody}>{data[currentIndex].position}</div>
          </div>
          <div className={styles.Arrows}>
            <div
              className={cn(
                { [styles.NoMoreTesti]: currentIndex === 0 },
                styles.Arrow
              )}
              onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
            >
              <ArrowLeftOutlined />
            </div>
            <div
              className={cn(
                { [styles.NoMoreTesti]: currentIndex === data.length - 1 },
                styles.Arrow
              )}
              onClick={() => currentIndex < data.length - 1 && setCurrentIndex(currentIndex + 1)}
            >
              <ArrowRightOutlined />
            </div>
          </div>
        </div>
        <div className={cn(styles.TestRight, styles.DesktopView)}>
          <div className={styles.ImageWrapper}>
            <Image src={data[currentIndex].image} alt="Testimonial Picture" className={styles.TestimonialImage} />
            <Image src={data[currentIndex].logo} alt="Logo" className={styles.LogoImage} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Testimonials;
