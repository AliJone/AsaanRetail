import React from 'react'
import Image from 'next/image'

import styles from './styles.module.sass'
import { Button } from 'antd';

import cn from 'classnames'

import image1 from './assets/images/image1.png'
import image2 from './assets/images/image2.png'

function CTANew() {
  return (
    <>
      <div className={styles.CTANew}>
        <div className={styles.CTABoxRight}> </div>
        <div className={styles.CTABox}>
          <div className={styles.CTARight}>
            <div className={styles.Text}>Start <span className={styles.GradientSurface}> 14 days </span>  free trial or book a demo with us</div>
            <div className={styles.Buttons}>
              <Button
                type="primary"
                size="large"
                className={styles.Btn1}
              >
                Get Demo
              </Button>
              <Button
                type="primary"
                size="large"
                className={styles.Btn2}
              >
                Start Free Trial
              </Button></div>
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
    </>
  )
}

export default CTANew