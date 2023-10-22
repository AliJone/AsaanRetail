import {Col, Row} from 'antd';

import GradientLine from '../gradientLine/index.jsx';
import Image from 'next/image.js';
import IntegrationImage from '../../images/svgs/integrationSection.svg';
import  {IntegrationText} from '../../strings.jsx';
import React from 'react';
import cn from 'classnames';
import style from './style.module.sass';

const IntegrationSection = () => {

    const subTitleWithLineBreaks = IntegrationText.subTitle.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));

    return(
        <div className={style.Body}>
            <Row >
                <Col span={24}>
                    <div className={cn(style.divClassText)}>
                    <span className = {cn(style.titleText)}>{IntegrationText.Title}</span>
                    
                    <div className = {cn(style.divGradientLineClass)}>
                    <GradientLine width = "206px" height="7px"/>
                    </div>
                    
                    <span className = {cn(style.subTitleText)}>{subTitleWithLineBreaks}</span>
                    </div>
                </Col>
                <div className={style.spacer}/>
                
                <Col span={24}>
                    <div className={style.divClass}>
                        <Image src={IntegrationImage} alt="Integration Image" />

                    </div>
                </Col>

                <div className={style.spacer}/>
            </Row>
        </div>
    )
}

export default IntegrationSection;