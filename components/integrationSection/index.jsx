import { Col, Row } from "antd";

import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import GradientLine from "../gradientLine/index.jsx";
import Image from "next/image.js";
import IntegrationImage from "../../images/svgs/integrationSection.svg";
import { IntegrationText } from "../../strings.jsx";
import React from "react";
import Tag from "../tag/index.jsx";
import cn from "classnames";
import limit from "../../styles/Limits.module.css";
import style from "./style.module.sass";
import ScrollAnimation from "react-animate-on-scroll";

const IntegrationSection = () => {
  const subTitleWithLineBreaks = IntegrationText.subTitle
    .split("\n")
    .map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));

  return (
    <div className={style.Body}>
      <div>
        <Row className={cn(limit.Limit)}>
          <Col span={24}>
            <div className={cn(style.upperContainer)}>
              <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp">
                <div className={cn(style.tagDiv)}>
                  <Tag text="Integrations" alternative={true} />
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp">
                <h1 className={cn(style.divClassText)}>
                  <span className={cn(style.titleText)}>
                    Daraz, Shopify & all your{" "}
                    <span className={cn(style.underLine)}>
                      <span />
                      ecommerce{" "} <br />
                    </span>{" "}
                    integrations in one platform
                  </span>
                </h1>
              </ScrollAnimation>
              <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp">
                <div className={cn(style.subTitleTextContainer)}>
                  <h5 className={cn(style.subTitleText)}>
                    With our extensive integration library, find Daraz, Shopify,
                    Woocommerce, Trax, M&P, Call Courier integrations & many
                    more
                  </h5>
                </div>
                
              </ScrollAnimation>
              <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp">
              <div className={cn(style.iconDiv)}>
                  <Button
                    type="text"
                    onClick={() => {}}
                    style={{ padding: "0px" }}
                  >
                    <span className={cn(style.buttonTextClass)}>
                      <ArrowRightOutlined /> Learn More
                    </span>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </Col>
          <div className={style.spacer} />

          <Col span={24}>
            <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp">
              <div className={style.imageContainer}>
                <Image
                  className={cn(style.imageClass)}
                  src={IntegrationImage}
                  alt="Integration Image"
                />
              </div>
            </ScrollAnimation>
          </Col>

          <div className={style.spacer} />
        </Row>
      </div>
    </div>
  );
};

export default IntegrationSection;
