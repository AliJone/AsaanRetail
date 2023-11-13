import React from 'react'
import Image from 'next/image'

import styles from './styles.module.css'

import cn from 'classnames'

import person from './assets/images/person.png'
import checkIcon from './assets/images/checkIcon.png'
 
function CTA() {
  return (
    <div className={styles.CTA}>
        <div className={styles.MainLayoutBlock}>
            <div className={cn(styles.Title,styles.Desktop_H1_Bold)}>
            Elevate Your Business!
            </div>
            <div className={styles.Image}> <Image src={person} /></div>
            <div className={styles.DescLayoutBlock}>
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
              <div className={styles.Divider}></div>
              <div className={styles.Buttons}></div>
            </div>

        </div>
    </div>
  )
}

export default CTA