import {Col, Row} from 'antd';

import GradientLine from '../gradientLine';
import Image from 'next/image';
import check from '../../images/svgs/icons/check.svg';
import cn from 'classnames';
import style from './style.module.sass';

const FeatureElement = ({ item }) => {
    return(
        <Row key = {item.title} gutter = {40}>
            <Col key = {item.title} span={5} className = {cn(style.DesktopView)}>
                <div key = {item.title} className={cn(style.divFeatureElementIcon)}>
                    <Image key = {item.title} src={item.icon} alt="icon"/>
                </div>
            </Col>
            <Col key = {item.title} span={19} className={cn(style.DesktopView)} >

                    <div className={cn(style.divFeatureElementTextContainer)}>
                        <span className={cn(style.divFeatureElementTitle)}>
                            {item.title}
                            <GradientLine key={item.title} width={"iniherit"}  height=".3125rem"/>    
                        </span>
                    </div>
                    <div style={{paddingTop:".5rem" , paddingBottom: "1.5rem"}}/>
            </Col>

            <Col key = {item.title} span={24} className = {cn(style.MobileView)}>
                <div key = {item.title} className={cn(style.divFeatureElementIcon)}>
                    <Image key = {item.title} src={item.iconMobile} alt="icon"/>
                </div>
            </Col>
            <Col key = {item.title} span={24} className={cn(style.MobileView)} >
                    <div className={cn(style.centering)}>
                        <div className={cn(style.divFeatureElementTextContainer)}>
                            <span className={cn(style.divFeatureElementTitle)}>
                                {item.titleMobile}
                                <div className={cn(style.ThridGradientLine)}>
                                    <GradientLine key={item.title} width={"11.4375rem"}   height=".625rem"/>     
                                </div>
                                
                            </span>
                        </div>
                    </div>
                    <div style={{paddingTop:".5rem" , paddingBottom: "1.5rem"}}/>
            </Col>
            
            <Col span={24}>
                {
                    item.list.map((i, index) => {
                        return(
                            <>
                            <Row key={index} gutter = {0} className={cn(style.DesktopView,style.makeItRow)} >
                                <Col key={index} span={3}>
                                    <div className={cn(style.divFeatureElementIcon, style.divFeatureElementIconCheck)}>
                                        <Image src={check} alt="check" />
                                    </div>
                                </Col>
                                <Col key={index} span={21}>
                                    <span className={cn(style.divFeatureElementListText)}>{i}</span>
                                </Col>
                            </Row>
                            <Row key={index} gutter = {30} className={cn(style.MobileView2)} >
                                <Col key={index} span={3}>
                                    <div className={cn(style.divFeatureElementIcon, style.divFeatureElementIconCheck)}>
                                        <Image src={check} alt="check" />
                                    </div>
                                </Col>
                                <Col key={index} span={21} style={{paddingRight:"1.875rem"}}>
                                    <span className={cn(style.divFeatureElementListText)}>{i}</span>
                                </Col>
                            </Row>
                            {index !== item.list.length - 1 && <div key={index} style={{paddingTop:"1.5rem"}}/>}
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