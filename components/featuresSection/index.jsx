import {Col, Row} from 'antd';

import FeatureList from './featuresList';
import Features from '../../images/svgs/features.svg';
import { FeaturesText } from '../../strings';
import GradientLine from '../gradientLine';
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
            index === 0 ? <div style={{paddingLeft:"14%"}} ><GradientLine width={"247px"} /></div> :<div style={{paddingLeft:"43%"}} ><GradientLine width={"294px"} /></div>
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
                        <span className={cn(style.titleText)}>
                            {TitleWithLineBreaks}
                        </span>
                        <span className={cn(style.subTitleClass)}>
                            {subTitleWithLineBreaks}
                        </span>
                    </div>
                    <div style={{width:"1%" , paddingTop:"40px"}}/>
                </Col>
                
                <Col span={12} className = {cn(style.divLeftColumn)}>
                    <Image src = {Features} alt = "Features" className={cn(style.divImageContainer)} />
                </Col>
                <Col span={12}>
                    <FeatureList/>
                </Col>
            </Row>
        </div>
    )
}

export default FeaturesSection;