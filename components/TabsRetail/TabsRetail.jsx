import { Button, Tabs } from 'antd';

import Daraz from './assets/images/Daraz.png'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Shopify from './assets/images/Shopify.png'
import Tables from './assets/images/Tables.png'
import TickIcon from './assets/images/TickIcon.png'
import Woo from './assets/images/Woo.png'
import cn from 'classnames'
import limit from '../../styles/Limits.module.css';
import styles from './styles.module.sass'

function Offering({ svgPath, name }) {
  return (
    <div className={styles.Data1}
    style={{ gap: name === "" ? "0" : "0.625rem" }}
    >
      <Image src={svgPath} />
      <div className={styles.Name}>
        {name}
      </div>
    </div>
  );
}

function TabsRetail() {
  const tabsData = [
    {
      tabTitle: "For Ecommerce",
      content: {
        title: "Future of ecommerce management",
        subTitle: "Asaan Retail streamlines inventory, simplifies multichannel orders, and ensures precise financial control. No more overselling or financial headaches. With Asaan Retail, you'll elevate efficiency, reduce errors, and increase profitability.",
        offerings: [
          { svgPath: Shopify, name: "" },
          { svgPath: Daraz, name: "" },
          { svgPath: Woo, name: "" }
        ],
        learnMoreLink: "#",
        image: Tables,
        offeringHead: "Integrates"
      }
    },
    {
      tabTitle: "For D2C Brands",
      content: {
        title: "Elevate D2C with Asaan Retail",
        subTitle: "We offer streamlined inventory management, efficient order processing from multiple channels, and robust financial controls, all tailored to unique D2C challenges. Say goodbye to inventory uncertainties, operational complexities, and financial hassles. With Asaan Retail, stand with the industry leaders, enhance customer experience and boost sales.",
        offerings: [
          { svgPath: TickIcon, name: "Sales channels" },
          { svgPath: TickIcon, name: "Local couriers" }
        ],
        learnMoreLink: "#",
        image: Tables,
        offeringHead: "Integrates"
      }
    },
    {
      tabTitle: "For 3PL",
      content: {
        title: "Gateway to 3PL efficiency",
        subTitle: "Asaan Retail is designed to optimize logistics, enhance inventory control, and provide real-time insights to overcome logistical inefficiencies and operational hiccups. With Asaan Retail, you can streamline your 3PL services, delight your clients with precision and transparency, and lead the industry in providing top-notch logistics solutions.",
        offerings: [], // Empty array if no integrations for this tab
        learnMoreLink: "#",
        image: Tables,
        offeringHead: ""
      }
    },{
      tabTitle: "For Agencies",
      content: {
        title: "Multi-Channel management at breeze",
        subTitle: "With Asaan Retail, manage 100s of client stores in one place, make operations smoother, and improve outcomes for your clients. Say goodbye to the complexities of handling multiple stores & couriers. You can easily oversee and provide access to all valuable insights to clients and grow clientele.",
        offerings: [
          { svgPath: TickIcon, name: "Automation" },
          { svgPath: TickIcon, name: "Client dashboard" }
        ],
        learnMoreLink: "#",
        image: Tables,
        offeringHead: "Offering"
      }
    },
    {
      tabTitle: "For Retail",
      content: {
        title: "Retail management made simple!",
        subTitle: "Robust retail management software helps you in inventory management, order management, and accounting management, organizing your warehouse, and generating insightful reports. Plus, through our user-friendly POS system you can enhance customer experience in your retail stores.",
        offerings: [
          { svgPath: TickIcon, name: "Shopify" },
          { svgPath: TickIcon, name: "Veeqo" },
          { svgPath: TickIcon, name: "Ginko" }
        ],
        learnMoreLink: "#",
        image: Tables,
        offeringHead: "Offering"
      }
    }
  ];


  return (
    <>
      <div className={styles.BG}>
      <div className={cn(limit.Limit)}>
        <div className={styles.Container}>
          <div className={styles.Heading}>
            <Button className={styles.ButtonAntd}>Solutions</Button>
            <div className={styles.Title}>From retail to <span className={cn(styles.underLine)}>
            ecommerce , </span>  Asaan Retail for everyone </div>
            <div className={styles.SubTitle}>Explore how Asaan Retail works for every industries</div>
          </div>
          <div className={styles.Body}>
            <Tabs className={cn(styles.DekstopView, styles.TabsMain)}  defaultActiveKey="1"  centered>
              {tabsData.map((tab, index) => (
                <Tabs.TabPane tab={tab.tabTitle} key={index + 1}>
                  <div className={styles.TabPane}>
                    <div className={styles.LeftPane}>
                      <div className={styles.Title}>{tab.content.title}</div>
                      <div className={styles.SubTitle}>{tab.content.subTitle}</div>
                      <div className={styles.Offering}>
                        <div className={styles.OfferingHeading}>{tab.content.offeringHead}</div>
                        <div className={styles.OfferingData}>
                          {tab.content.offerings.map(offering => (
                            <Offering svgPath={offering.svgPath} name={offering.name} key={offering.name} />
                          ))}
                        </div>
                      </div>
                      <Button  type="text" onClick = {()=>{}} style={{padding:"0px"}}>
                    <span className={cn(styles.featureCardButton)}>Learn More &gt;</span>
                </Button>
                    </div>
                    <div className={styles.RightPane}>
                      <Image src={tab.content.image} />
                    </div>
                  </div>
                </Tabs.TabPane>
              ))}
            </Tabs>
            <Tabs className={styles.MobileView} defaultActiveKey="1"  >
              {tabsData.map((tab, index) => (
                <Tabs.TabPane tab={tab.tabTitle} key={index + 1}>
                  <div className={styles.TabPane}>
                    <div className={styles.LeftPane}>
                      <div className={styles.Title}>{tab.content.title}</div>
                      <div className={styles.SubTitle}>{tab.content.subTitle}</div>
                      <div className={styles.Offering}>
                        <div className={styles.OfferingHeading}>{tab.content.offeringHead}</div>
                        <div className={styles.OfferingData}>
                          {tab.content.offerings.map(offering => (
                            <Offering svgPath={offering.svgPath} name={offering.name} key={offering.name} />
                          ))}
                        </div>
                      </div>
                      <Button  type="text" onClick = {()=>{}} style={{padding:"0px"}}>
                    <span className={cn(styles.featureCardButton)}>Learn More &gt;</span>
                </Button>
                    </div>
                    <div className={styles.RightPane}>
                      <Image src={tab.content.image} />
                    </div>
                  </div>
                </Tabs.TabPane>
              ))}
            </Tabs>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default TabsRetail;
