import { Button, Collapse } from "antd";
import { React, useState } from "react";

import GradientLine from "../GradientLine";
import { PlusOutlined } from "@ant-design/icons";
import cn from "classnames";
import limit from "../../styles/Limits.module.css";
import styles from "./styles.module.sass";

const { Panel } = Collapse;

function FAQ() {
  const [activeKeys, setActiveKeys] = useState(["1"]); // Initially expand panel with key '1'

  const customPanelStyle = {
    marginBottom: 24,
    background: "white",
    borderRadius: 4,
    border: "none",
    borderLeft: "4px solid var(--gradient-surface, #009241) !important",
  };

  return (
    <>
      <div className={styles.FAQ}>
        <div className={cn(limit.Limit)}>
          <div className={styles.Head}>
            <div className={styles.Title}>
              Frequently asked{" "}
              <span className={styles.Underline}>
                {" "}
                questions <GradientLine width="60%" height="7px" />{" "}
              </span>{" "}
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
                <PlusOutlined rotate={isActive ? 45 : 0} />
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
