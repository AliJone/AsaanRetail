import {Col, Row} from 'antd';

import GradientLine from '../gradientLine';
import Image from 'next/image';
import check from '../../images/svgs/icons/check.svg';
import cn from 'classnames';
import style from './style.module.sass';

const FeatureElement = ({ title, list, icon }) => {
    return(
        <Row key = {title} gutter = {40}>
            <Col key = {title} span={5}>
                <div key = {title} className={cn(style.divFeatureElementIcon)}>
                <Image key = {title} src={icon} alt="icon"/>
                </div>
            </Col>
            <Col key = {title} span={19} >

                    <div className={cn(style.divFeatureElementTextContainer)}>
                        <span className={cn(style.divFeatureElementTitle)}>
                            {title}
                            <GradientLine key={title} width={"iniherit"}  height="5px"/>
                            
                        </span>
                        
                
                    </div>
                    <div style={{paddingTop:"8px" , paddingBottom: "24px"}}/>
            </Col>
            
            <Col span={24}>
                {
                    list.map((item, index) => {
                        return(
                            <>
                            <Row key={index} gutter = {0}>
                                <Col key={index} span={3}>
                                    <div className={cn(style.divFeatureElementIcon, style.divFeatureElementIconCheck)}>
                                        <Image src={check} alt="check" />
                                    </div>
                                </Col>
                                <Col key={index} span={21}>
                                    <span className={cn(style.divFeatureElementListText)}>{item}</span>
                                </Col>
                            </Row>
                            {index !== list.length - 1 && <div key={index} style={{paddingTop:"24px"}}/>}
                            </>
                        )    
                    }
                    )
                }
                
            </Col>
        </Row>
    )
}
export default FeatureElement;