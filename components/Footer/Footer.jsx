import { Divider } from 'antd'
import Image from 'next/image'
import React from 'react'
import cn from 'classnames'
import facebook from './assets/images/facebook.png'
import instagram from './assets/images/instagram.png'
import linkedin from './assets/images/linkedIn.png'
import logo from './assets/images/logo.png'
import styles from './styles.module.sass'
import limit from '../../styles/Limits.module.css';
import youtube from './assets/images/youtube.png'

function Footer() {
  return (
    <div className={limit.Limit}>
      <div className={styles.Footer}>
        <div className={styles.InfoSection}>
          <div className={cn(styles.Description)}>


            <div className={cn(styles.Description)}>
              <div className={styles.Logo}> <Image src={logo} /> </div>
              <div className={styles.Text}>We allow retailers and brands to scale and efficiently manage their business operations by equipping them with centralized inventory, fulfillment, and accounting management software for multi-channel commerce.</div>
            </div>
            <div className={cn(styles.ExtraLinks)}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Security</a>
            </div>
            <div className={styles.Socials}>
              <a href="#"><Image src={facebook} /></a>
              <a href="#"><Image src={youtube} /></a>
              <a href="#"><Image src={linkedin} /></a>
              <a href="#"><Image src={instagram} /></a>
            </div>
          </div>

          <FooterLinks />
        </div>
        {/* <div className={styles.Divider}>
        <Divider style={{ backgroundImage: "linear-gradient(180deg, #009241 0%, rgba(4, 173, 79, 0.84) 100%)", height: "2px" }} />
      </div> */}
        <div className={styles.Extra}>
          <div className={cn(styles.Copyright, styles.fontDesktopBodyMedium)}>
            © 2023 NEOSHIFT TECHNOLOGIES (PVT) LTD. All rights reserved.
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
      { label: "Inventory management", url: "#inventory" },
      { label: "Order management", url: "#sales" },
      { label: "Accounting & finances", url: "#finance" },
      { label: "Warehouse management", url: "#integrations" },
      { label: "Reports & analytics", url: "#automation" },
      { label: "Point of sales (POS)", url: "#purchases" },
    ]
  },
  {
    title: "Solution",
    links: [
      { label: "For retail", url: "#inventory" },
      { label: "For ecommerce", url: "#order" },
      { label: "For 3PL", url: "#sales" },
      { label: "For wholesalers", url: "#sales" },
      { label: "For service providers", url: "#sales" },
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Pricing", url: "#inventory" },
      { label: "Careers", url: "#order" },
      { label: "Articles", url: "#sales" },
      { label: "Integrations", url: "#sales" },
      { label: "Contact us", url: "#sales" },
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
          <div className={cn(styles.Title)}>{section.title}</div>
          <div className={styles.SubTitleBlock}>
            {section.links.map((link, linkIdx) => (
              <a key={linkIdx} href={link.url} className={cn(styles.SubTitle)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

