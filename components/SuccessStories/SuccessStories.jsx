import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import Image from 'next/image';

import cn from 'classnames';

import styles from './styles.module.sass';
import limits from '../../styles/Limits.module.css';
import { Button } from 'antd';

import Logo1 from './assets/images/Logo1.png';
import Logo2 from './assets/images/Logo2.png';
import Happy from './assets/images/Happy.png';
import Sad from './assets/images/Sad.png';
import Close from './assets/images/Close.png';
import Animate from './assets/images/Animate.png';



function SuccessStories({data = { logo: Logo2, before: { orders: "4,500", revenue: "$25,000", return: "30%" }, after: { orders: "14,000", revenue: "$105,000", return: "8%" } }}) {

  return (
    <>
      <div className={styles.BG}>
        <div className={limits.Limit}>
          <div className={styles.Container}>
            <div className={styles.Head}>
              <div className={styles.UpperHead}>
                <div className={styles.Title}>
                  <h1>
                    Celebrating Success Stories 👏
                  </h1>
                </div>
                <div className={styles.SubTitle}>
                  <h2>
                    Real-world Accounts of How Asaan Retail Transforms Businesses.
                  </h2>
                </div>
              </div>
              <div className={styles.LowerHead}>
                <Image src={Logo1} className={styles.Logo} />
                <Image src={Close} className={styles.Close} />
                <Image src={data.logo} className={styles.Logo} />
              </div>
            </div>
            <div className={styles.Body}>
              <div className={styles.Left}>
                <div className={styles.Sad}>
                  <Image src={Sad} />
                </div>
                <div className={styles.Main}>Before</div>
                <div className={styles.Data}>
                  <h5>
                    {data.before?.orders + " "} orders/mo
                  </h5>
                  <h5>
                    {data.before?.revenue}/mo
                  </h5>
                  <h5>
                    <span className={styles.Return}> {data.before?.return + " "}</span> return rate/mo
                  </h5>
                </div>
              </div>
              <div className={styles.Mid}>
                <Image src={Animate} />
              </div>
              <div className={styles.Right}>
              <div className={styles.Sad}>
                  <Image src={Happy} />
                </div>
                <div className={styles.Main}>After</div>
                <div className={styles.Data}>
                  <h5>
                    {data.after?.orders + " "} orders/mo
                  </h5>
                  <h5>
                    {data.after?.revenue}/mo
                  </h5>
                  <h5>
                    <span className={styles.Return}> {data.after?.return + " "}</span> return rate/mo
                  </h5>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default SuccessStories;
