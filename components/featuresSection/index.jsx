import {Col, Row} from 'antd';

import FeatureList from './featuresList';
import Features from '../../images/svgs/features.svg';
import FeaturesMobile from '../../images/svgs/FeaturesMobile.svg';
import { FeaturesText } from '../../strings';
import GradientLine from '../GradientLine';
import Image from 'next/image';
import React from 'react';
import cn from 'classnames';
import style from './style.module.sass';

const FeaturesSection = () => {

    const TitleWithLineBreaks = FeaturesText.Title.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <>
          {
            index === 0 ? <><div className={style.FirstGradientLine}  ><GradientLine width={"15.4375rem"} height=".4375rem" /></div></> :<><div className={style.SecondGradientLine} ><GradientLine width={"18.375rem"} height=".4375rem" /></div></>
          }
          </>
        </React.Fragment>
      ));

      const TitleWithLineBreaksMobile = FeaturesText.Title.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <>
          {
            index === 0 ? <><br/></> :<></>
          }
          </>
        </React.Fragment>
      ));

    const subTitleWithLineBreaks = FeaturesText.subTitle.split('\n').map((line, index) => (
    <React.Fragment key={index}>
        {line}
        <br />
    </React.Fragment>
    ));

    return(
        <div className= {cn(style.featuresSectionDiv)}>
            <Row>
                <Col span={24}>
                    <div className={cn(style.divTextClass)}>
                        <span className={cn(style.titleText,style.DesktopView)}>
                            {TitleWithLineBreaks}
                        </span>
                        <span className={cn(style.titleText,style.MobileView)}>
                            {TitleWithLineBreaksMobile}
                        </span>

                        <span className={cn(style.subTitleClass,style.DesktopView)}>
                            {subTitleWithLineBreaks}
                        </span>

                        <span className={cn(style.subTitleClass,style.MobileView)}>
                            {FeaturesText.subTitle}
                        </span>
                    </div>
                    <div style={{width:"1%" , paddingTop:"2.5rem"}}/>
                </Col>
                <Col span={24}>
                    <div className={cn(style.spacer1)}/>
                    <Row className={cn(style.DesktopView, style.makeItRow)}>
                        <Col span={13} className = {cn(style.divLeftColumn)}>
                            <Image src = {Features} alt = "Features" className={cn(style.divImageContainer)} />
                        </Col>
                        <Col span={11} className={cn(style.verticalSpacer)}>
                            <FeatureList/>
                        </Col>
                    </Row>
                    <Row className={style.MobileView}>
                        <Col span={24} className = {cn(style.divLeftColumn)}>
                            <Image src = {FeaturesMobile} alt = "Features" className={cn(style.divImageContainer)} />
                        </Col>
                        <Col span={24} className={cn(style.verticalSpacer)} >
                            <FeatureList/>
                        </Col>
                    </Row>
                </Col>
                <div className={cn(style.spacer2)}/>
            </Row>
            
        </div>
    )
}

export default FeaturesSection;