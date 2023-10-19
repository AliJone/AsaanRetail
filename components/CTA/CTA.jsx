import React from 'react'
import Image from 'next/image'

import styles from './styles.module.sass'
import { Divider, Button } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';

import cn from 'classnames'

import person from './assets/images/person.png'
import personMobile from './assets/images/personMobile.png'
import checkIcon from './assets/images/checkIcon.png'

function CTA() {
  return (
    <>
      <div className={cn(styles.mobileView)}> <Image className={styles.Avatar} src={personMobile} /></div>
    <div className={styles.CTA}>
      <div className={styles.MainLayoutBlock}>
        <div className={cn(styles.fontMobileH1Bold, styles.mobileView)}>
          Elevate Your Business!
        </div>
        <div className={cn(styles.Title, styles.Desktop_H1_Bold)}>
          Elevate Your Business!
        </div>
        <div className={styles.DescLayoutBlock}>
        <div className={styles.DescLayoutBlockInside}>
        <div className={styles.Image}> <Image src={person} /></div>

          <div className={styles.Checkboxes}>
            <div className={styles.CheckboxesGroup}>
              <div className={styles.Check}>
                <div className={styles.CheckIcon}><Image src={checkIcon} /></div>
                <div className={cn(styles.CheckText, styles.Desktop_H3_Medium)}>Loss reduction from Day 1</div>
              </div>
              <div className={styles.Check}>
                <div className={styles.CheckIcon}><Image src={checkIcon} /></div>
                <div className={cn(styles.CheckText, styles.Desktop_H3_Medium)}>Unified platform</div>
              </div>
            </div>
            <div className={styles.CheckboxesGroup}>
              <div className={styles.Check}>
                <div className={styles.CheckIcon}><Image src={checkIcon} /></div>
                <div className={cn(styles.CheckText, styles.Desktop_H3_Medium)}>Full-featured 14-day trial</div>
              </div>
              <div className={styles.Check}>
                <div className={styles.CheckIcon}><Image src={checkIcon} /></div>
                <div className={cn(styles.CheckText, styles.Desktop_H3_Medium)}>Fast set-up and deployment</div>
              </div>
            </div>
          </div>
        </div>

          <div className={styles.Divider}>
          <Divider style={{ backgroundColor: "#26523A" }} />

          </div>
          <div className={styles.Buttons}>
            <Button className={cn(styles.GetDemo, styles.fontH5Bold)} shape="round" icon={<CalendarOutlined />} size={"large"}>
              Get Demo
            </Button>
            <Button className={cn(styles.StartTrial, styles.fontH5Bold)} shape="round" size={"large"}>
              Start Free Trial
            </Button>
          </div>
        </div>


      </div>
    </div>
    </>
  )
}

export default CTA