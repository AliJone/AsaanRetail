import React from 'react'
import Image from 'next/image'

import styles from './styles.module.sass'
import { Divider, Button } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';

import cn from 'classnames'



function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.InfoSection}>
        <div className={styles.VerticalContent}>
          <div className={styles.SingleVerticalSection}>
            <div className={styles.Title}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer