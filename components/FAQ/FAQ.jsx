import { Button, Collapse } from "antd";
import { React, useState } from "react";

import GradientLine from "../gradientLine";
import { PlusOutlined } from "@ant-design/icons";
import cn from "classnames";
import limit from "../../styles/Limits.module.css";
import styles from "./styles.module.sass";

const { Panel } = Collapse;
const pluss = <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
<path d="M18 8.41162L18 29.4116" stroke="url(#paint0_linear_2673_6357)" stroke-width="4.5" stroke-linecap="round"/>
<path d="M28.5 18.9116L7.5 18.9116" stroke="url(#paint1_linear_2673_6357)" stroke-width="4.5" stroke-linecap="round"/>
<defs>
  <linearGradient id="paint0_linear_2673_6357" x1="18" y1="18.9116" x2="17" y2="18.9116" gradientUnits="userSpaceOnUse">
    <stop stop-color="#009241"/>
    <stop offset="1" stop-color="#04AD4F" stop-opacity="0.84"/>
  </linearGradient>
  <linearGradient id="paint1_linear_2673_6357" x1="18" y1="18.9116" x2="18" y2="17.9116" gradientUnits="userSpaceOnUse">
    <stop stop-color="#009241"/>
    <stop offset="1" stop-color="#04AD4F" stop-opacity="0.84"/>
  </linearGradient>
</defs>
</svg>

function FAQ() {
  const [activeKeys, setActiveKeys] = useState(["1"]); // Initially expand panel with key '1'
  const [customPanelStyle, setCustomPanelStyle] = useState({ marginBottom: 24,
    background: "white",
    borderRadius: 4,
    borderLeft: "4px solid #009241 !important",
    borderRight: "none",
    borderTop: "none",
    borderBottom: "none",})

  return (
    <>
        <div className={cn(limit.Limit)}>
      <div className={styles.FAQ}>
          <div className={styles.Head}>
            <div className={styles.Title}>
              Frequently asked{" "}
              <span>
                questions 
              </span>
            </div>

            <div className={styles.SubTitle}>
              If you can’t find an answer what you are looking for, feel free to
              drop us a line
            </div>
            <div className={styles.ButtonGroup}>
              <Button
                type="default" // Adjusted type to default to control styling
                shape="round"
                size="middle"
                danger={false}
                ghost={false}
                icon={false}
                style={{
                  borderColor: "var(--gradient-surface, #009241)",
                  color: "var(--gradient-surface, #009241)",
                  borderRadius: "2.5rem",
                  border: "2px solid var(--gradient-surface, #009241)",
                  boxShadow: "0px 2px 0px 0px rgba(0, 0, 0, 0.02)",
                  padding:"0.25rem 0.9375rem",
                  fontFamily: "Roboto",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%",
                  flexWrap: "wrap",
                  textAlign: "center",
                }}
              >
                Visit help center
              </Button>
              <Button
                type="default" // Adjusted type to default to control styling
                shape="round"
                size="middle"
                danger={false}
                ghost={false}
                icon={false}
                style={{
                  borderColor: "var(--gradient-surface, #009241)",
                  color: "var(--gradient-surface, #009241)",
                  borderRadius: "2.5rem",
                  border: "2px solid var(--gradient-surface, #009241)",
                  boxShadow: "0px 2px 0px 0px rgba(0, 0, 0, 0.02)",
                  padding:"0.25rem 0.9375rem",
                  fontFamily: "Roboto",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%",
                  flexWrap: "wrap",
                  textAlign: "center",
                }}
              >
                About Asaan Retail
              </Button>
              <Button
                type="default" // Adjusted type to default to control styling
                shape="round"
                size="middle"
                danger={false}
                ghost={false}
                icon={false}
                style={{
                  borderColor: "var(--gradient-surface, #009241)",
                  color: "var(--gradient-surface, #009241)",
                  borderRadius: "2.5rem",
                  border: "2px solid var(--gradient-surface, #009241)",
                  boxShadow: "0px 2px 0px 0px rgba(0, 0, 0, 0.02)",
                  padding:"0.25rem 0.9375rem",
                  fontFamily: "Roboto",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%",
                  flexWrap: "wrap",
                  textAlign: "center",
                }}
              >
                Contact us
              </Button>
            </div>
          </div>
          <div className={styles.Body}>
            <Collapse
              bordered={false}
              expandIconPosition="right"
              // onChange={handleCollapseChange}
              defaultActiveKey={["1"]}
              expandIcon={({ isActive }) => (
                <PlusOutlined rotate={isActive ? 45 : 0} style={{ fontSize: '16px', color: '#009241', strokeWidth: "100", stroke: "#009241" }}/>
              )}
              style={{
                backgroundColor: "transparent",
              }}
            >
              <Panel
                className={styles.PanelHead}
                header="How will my personal data be used & protected?"
                key="1"
                style={customPanelStyle}
              >
                <p className={styles.PanelBody}>
                  It’s our business to help your business. Our support team has
                  eventually become friends with hundreds of our customers.
                  That’s all we have to say.
                </p>
              </Panel>
              <Panel
                className={styles.PanelHead}
                header="What will happen if I join the clinical research study?"
                key="2"
                style={customPanelStyle}
              >
                <p className={styles.PanelBody}>
                  It’s our business to help your business. Our support team has
                  eventually become friends with hundreds of our customers.
                  That’s all we have to say.
                </p>
              </Panel>
              <Panel
                className={styles.PanelHead}
                header="How are research study participants protected?"
                key="3"
                style={customPanelStyle}
              >
                <p className={styles.PanelBody}>
                  It’s our business to help your business. Our support team has
                  eventually become friends with hundreds of our customers.
                  That’s all we have to say.
                </p>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
