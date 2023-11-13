import React from 'react'
import Image from 'next/image'

import styles from './styles.module.sass'
import { Button } from 'antd';

import cn from 'classnames'

import video from './assets/images/video.png'
import videoSmall from './assets/images/videoSmall.png'

function ThroughLense() {
  return (
    <>
      <div className={styles.BG}>
        <div className={styles.Container}>
          <div className={styles.ContainerLeft}>
            <div className={styles.Heading}>Asaan Retail through the lens</div>
            <div className={styles.SubHeading}>Explore how Asaan Retail works for every industries</div>
          </div>
          <div className={cn(styles.ContainerRight, styles.DesktopView)}> <Image src={video}/> </div>
          <div className={cn(styles.ContainerRight, styles.MobileView)}> <Image src={videoSmall}/> </div>
        </div>
      </div>
    </>
  )
}

export default ThroughLense