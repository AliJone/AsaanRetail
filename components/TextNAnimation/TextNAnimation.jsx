import React, { useState } from 'react';
import Image from 'next/image';

import styles from './styles.module.sass';
import { Button } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';

import cn from 'classnames';


function TextNAnimation() {


  return (
    <>
      <div className={styles.BG}>
      <div className={styles.BGBefore}></div>
        <div className={styles.Container}>
          <div className={styles.Left}>
            <div className={styles.Text}>
              <div className={styles.Title}>Increase efficiency through automation</div>
              <div className={styles.SubTitle}>With Asaan Retail say goodbye to manual tasks, errors, and inefficiencies, and say hello to enhanced productivity and growth.</div>
            </div>
            <Button className={styles.Buttton} size='large' icon={<CalendarOutlined />}>Book a Demo</Button>
          </div>
          <div className={styles.Right}>Animation PlaceHolder</div>
        </div>
      <div className={styles.BGAfter}></div>
      </div>
    </>
  );
}

export default TextNAnimation;
