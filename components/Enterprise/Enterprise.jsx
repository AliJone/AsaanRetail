import React, { useState } from 'react';

import { Button } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import GradientLine from '../GradientLine';
import Image from 'next/image';
import cn from 'classnames';
import styles from './styles.module.sass';

function Enterprise() {


  return (
    <>
      <div className={styles.BG}>
        <div className={styles.Container}>
          <div className={styles.Left}>
            <div className={styles.Text}>
              <div className={styles.Title}>Enterprise  <GradientLine width='100%' height="7px" /></div>
              <div className={styles.SubTitle}>Built for larger organizations who want to scale with confidence.</div>
            </div>
            <Button className={styles.Buttton} size='large' >Contact Sales</Button>
          </div>
          <div className={styles.Right}>Animation PlaceHolder</div>
        </div>
      </div>
    </>
  );
}

export default Enterprise;
