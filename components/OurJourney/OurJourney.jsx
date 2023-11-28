import React from 'react'
import Image from 'next/image'

import styles from './styles.module.sass'
import limits from '../../styles/Limits.module.css'
import { Divider } from 'antd';
import ScrollAnimation from 'react-animate-on-scroll';

import cn from 'classnames'

import bd from './assets/images/bd.png'
import lk from './assets/images/lk.png'
import my from './assets/images/my.png'
import pk from './assets/images/pk.png'
import uae from './assets/images/uae.png'

function MeetThePack() {
  return (
    <>
      <div className={styles.BG}>
        <div className={limits.Limit}>
          <div className={styles.Container}>
          <ScrollAnimation animateIn="animate__fadeInUp"> 
            <div className={styles.Head}>
              <div className={styles.HeadTitle}>
                <h1>
                  <span className={styles.underLine}>  Our Journey! </span>
                </h1>
              </div>
              <div className={styles.HeadSubTitle}>
                <h4>
                  Founded in 2021, Asaan Retail started with a vision to address the challenges faced by businesses in the digital era. Over the years, we have evolved into a leading provider of comprehensive software solutions, catering to diverse industries and clients worldwide.
                </h4>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeInUp"> 
            <div className={styles.Middle}>
              <div className={styles.MiddleHead}>
                <div className={styles.MiddleHeadTitle}>
                  <h1>
                    5+
                  </h1>
                </div>
                <div className={styles.MiddleHeadSubTitle}>
                  <h4>
                    Countries
                  </h4>
                </div>
              </div>
              <div className={styles.Flags}>
                <Image src={bd} />
                <Image src={lk} />
                <Image src={my} />
                <Image src={pk} />
                <Image src={uae} />
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeInUp"> 
            <div className={styles.Space}>
              <Divider />
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeInUp"> 
            <div className={styles.End}>
              <div className={styles.EndText}>
                <p>
                  Driven by a team of passionate professionals, our journey has been shaped by continuous learning, adaptation, and a commitment to customer satisfaction. With each milestone achieved, we have forged strong partnerships and built a reputation for delivering excellence.
                </p>
              </div>
              <div className={styles.Numbers}>
                <div className={styles.Data}>
                  <div className={styles.DataTitle}>
                    <h1>
                      1M+
                    </h1>
                  </div>
                  <div className={styles.DataSubTitle}>
                    <h2>
                      Orders Shipped
                    </h2>
                  </div>
                </div>
                <div className={styles.VerticalSpacer}>
                  <Divider type='vertical' />
                </div>
                <div className={styles.Data}>
                  <div className={styles.DataTitle}>
                    <h1>
                      100M+
                    </h1>
                  </div>
                  <div className={styles.DataSubTitle}>
                    <h2>
                      Worth of Orders
                    </h2>
                  </div>
                </div>
                <div className={styles.VerticalSpacer}>
                  <Divider type='vertical' />
                </div>
                <div className={styles.Data}>
                  <div className={styles.DataTitle}>
                    <h1>
                      1000+
                    </h1>
                  </div>
                  <div className={styles.DataSubTitle}>
                    <h2>
                      Clients
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          </div>
        </div>
      </div>
    </>
  )
}

export default MeetThePack