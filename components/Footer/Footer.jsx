import React from 'react'
import Image from 'next/image'

import styles from './styles.module.sass'
import { Divider } from 'antd'

import cn from 'classnames'
import logo from './assets/images/logo.png'
import facebook from './assets/images/facebook.png'
import instagram from './assets/images/instagram.png'
import linkedin from './assets/images/linkedin.png'
import youtube from './assets/images/youtube.png'


function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.InfoSection}>
        <div className={cn(styles.Description)}>
          <div className={styles.Logo}> <Image src={logo} /> </div>
          <div className={styles.Text}>We allow retailers and brands to scale and efficiently manage their business operations by equipping them with centralized inventory, fulfillment, and accounting management software for multi-channel commerce.</div>
        </div>
        <FooterLinks />
      </div>
      <div className={styles.Divider}>
        <Divider style={{ backgroundImage:"linear-gradient(180deg, #009241 0%, rgba(4, 173, 79, 0.84) 100%)", height:"2px" }} />
      </div>
      <div className={styles.Extra}>
        <div className={cn(styles.Copyright, styles.fontDesktopBodyMedium)}>
        © 2023 NEOSHIFT TECHNOLOGIES (PVT) LTD. All rights reserved.
        </div>
        <div className={styles.ExtraNSocials}>
          <div className={cn(styles.ExtraLinks, styles.fontDesktopBodyRegular)}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Security</a>
          </div>
          <div className={styles.Socials}>
            <a href="#"><Image src={facebook}  /></a>
            <a href="#"><Image src={youtube}  /></a>
            <a href="#"><Image src={linkedin}  /></a>
            <a href="#"><Image src={instagram}  /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

const linkData = [
  {
    title: "Product",
    links: [
      { label: "Inventory", url: "#inventory" },
      { label: "Sales", url: "#sales" },
      { label: "Finance", url: "#finance" },
      { label: "Integrations", url: "#integrations" },
      { label: "Automation", url: "#automation" },
      { label: "Purchases", url: "#purchases" },
    ]
  },
  {
    title: "Solution",
    links: [
      { label: "Inventory Managent", url: "#inventory" },
      { label: "Order Management", url: "#order" },
      { label: "Shipment Management", url: "#sales" },
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Inventory", url: "#inventory" },
      { label: "Sales", url: "#order" },
      { label: "Finance", url: "#sales" },
      { label: "Integrations", url: "#sales" },
    ]
  },
  {
    title: "Pricing",
    links: [
      { label: "Inventory", url: "#inventory" },
      { label: "Sales", url: "#order" },
      { label: "Finance", url: "#sales" },
      { label: "Integrations", url: "#sales" },
    ]
  },
  {
    title: "Compare",
    links: [
      { label: "vs Gingko", url: "#inventory" },
      { label: "vs Veeqo", url: "#order" },
      { label: "Finance", url: "#sales" },
      { label: "Integrations", url: "#sales" },
    ]
  },
  // You can add more sections by following the structure above
  // e.g. { title: "Another Section", links: [{ label: "Another Link", url: "#link" }, ...] },
];

function FooterLinks() {
  return (
    <div className={styles.VerticalContent}>
      {linkData.map((section, idx) => (
        <div key={idx} className={styles.SingleVerticalSection}>
          <div className={cn(styles.Title, styles.fontBodyBold)}>{section.title}</div>
          <div className={styles.SubTitleBlock}>
            {section.links.map((link, linkIdx) => (
              <a key={linkIdx} href={link.url} className={cn(styles.SubTitle, styles.fontH5Regular)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

