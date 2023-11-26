import { Button, Collapse, Form } from 'antd';
import { React, useState } from 'react'

import Agency from './assets/images/Agency.png'
import Ecommerce from './assets/images/Ecommerce.png'
import GradientLine from '../gradientLine';
import Image from 'next/image';
import Retail from './assets/images/Retail.png'
import cn from 'classnames'
import d2c from './assets/images/d2c.png'
import limit from '../../styles/Limits.module.css';
import pl from './assets/images/3pl.png'
import styles from './styles.module.sass'

const { Panel } = Collapse;


function InventoryManagement() {

  return (
    <>
      <div className={styles.BG}>
      <div className={cn(limit.Limit)}>
        <div className={styles.Container}>
          <div className={styles.Heading}>
            <div className={styles.LineText}>Inventory  <span className={styles.gradientUnderline}> Management </span>  </div>
            <div>for every industry</div>
          </div>
          <div className={styles.Body}>
            <div className={styles.Col}>
            {Box(Ecommerce, "For Ecommerce", "With real-time syncing, alerts for low stock, and inventory forecasting, we streamline your operations. Bundle products, organize listings, and ensure precision with our audit feature.", "Solutions for ecommerce")}
            {Box(pl, "For 3PL", "Manage multiple clients' inventory across multiple locations and sales channels with ease. Leverage real-time tracking, low stock alerts, and inventory forecasting to streamline your operations.", "Solutions for 3PL")}
            </div>
            <div className={cn(styles.Col, styles.Col1)}>
            {Box(Ecommerce, "For Ecommerce", "With real-time syncing, alerts for low stock, and inventory forecasting, we streamline your operations. Bundle products, organize listings, and ensure precision with our audit feature.", "Solutions for ecommerce")}
            {Box(pl, "For 3PL", "Manage multiple clients' inventory across multiple locations and sales channels with ease. Leverage real-time tracking, low stock alerts, and inventory forecasting to streamline your operations.", "Solutions for 3PL")}
            </div>
            <div className={cn(styles.Col, styles.Col2)}>
            {Box(Ecommerce, "For Ecommerce", "With real-time syncing, alerts for low stock, and inventory forecasting, we streamline your operations. Bundle products, organize listings, and ensure precision with our audit feature.", "Solutions for ecommerce")}
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );

  function Box(logo, title, subtitle, link) {
    return <div className={styles.Box}>
      <div className={styles.BoxContainer}>
        <div className={styles.Logo}> <Image src={logo} /> </div>
        <div className={styles.Title}> {title}</div>
        <div className={styles.SubTitle}> {subtitle} </div>
        <div className={styles.Link} > {link} <span className={styles.arrow}> &gt; </span></div>
      </div>
    </div>;
  }
}

export default InventoryManagement