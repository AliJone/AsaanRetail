import { Divider } from "antd";
import Image from "next/image";
import React from "react";
import cn from "classnames";
import facebook from "./assets/images/facebook.png";
import instagram from "./assets/images/instagram.png";
import linkedin from "./assets/images/linkedIn.png";
import logo from "./assets/images/logo.png";
import styles from "./styles.module.sass";
import limit from "../../styles/Limits.module.css";
import youtube from "./assets/images/youtube.png";

function Footer() {
  return (
    <div className={limit.Limit}>
      <div className={styles.Footer}>
        <div className={styles.InfoSection}>
          <div className={cn(styles.Description)}>
            <div className={cn(styles.Description)}>
              <div className={styles.Logo}>
                {" "}
                <Image src={logo} />{" "}
              </div>
              <div className={styles.Text}>
                We allow retailers and brands to scale and efficiently manage
                their business operations by equipping them with centralized
                inventory, fulfillment, and accounting management software for
                multi-channel commerce.
              </div>
            </div>
            <div className={cn(styles.ExtraLinks)}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Security</a>
            </div>
            <div className={styles.Socials}>
              <a href="https://www.facebook.com/asaanretail/">
                <Image src={facebook} />
              </a>
              <a href="https://www.youtube.com/c/AsaanRetail">
                <Image src={youtube} />
              </a>
              <a href="https://pk.linkedin.com/company/asaanretail">
                <Image src={linkedin} />
              </a>
              <a href="https://www.instagram.com/asaanretail/">
                <Image src={instagram} />
              </a>
            </div>
          </div>

          <FooterLinks />
        </div>
        {/* <div className={styles.Divider}>
        <Divider style={{ backgroundImage: "linear-gradient(180deg, #009241 0%, rgba(4, 173, 79, 0.84) 100%)", height: "2px" }} />
      </div> */}
        <div className={styles.Extra}>
          <div className={cn(styles.Copyright, styles.fontDesktopBodyMedium)}>
            © 2023 NEOSHIFT TECHNOLOGIES (PVT) LTD. <br />
            All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

const linkData = [
  {
    title: "Product",
    links: [
      { label: "Inventory management", url: "/products/inventory-management" },
      { label: "Order management", url: "/products/order-management" },
      {
        label: "Accounting & finances",
        url: "/products/accounting-management",
      },
      { label: "Warehouse management", url: "/products/shipping-management" },
      { label: "Reports & analytics", url: "/products/reporting" },
      { label: "Point of sales (POS)", url: "/products/fbr-integrated-pos" },
    ],
  },
  {
    title: "Solution",
    links: [
      { label: "For retail", url: "/solutions/retail" },
      { label: "For ecommerce", url: "/solutions/ecommerce" },
      { label: "For 3PL", url: "/solutions/third-party-logistics" },
      { label: "For wholesalers", url: "/solutions/direct-to-consumer" },
      { label: "For service providers", url: "/solutions/agencies" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Pricing", url: "/pricing" },
      { label: "Careers", url: "/careers" },
      { label: "Articles", url: "/blogs" },
      { label: "Integrations", url: "/integrations" },
      { label: "Contact us", url: "/contact-us" },
    ],
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
  );
}
