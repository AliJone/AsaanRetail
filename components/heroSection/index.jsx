import {Col, Row} from 'antd';

import CustomFilledButton from '../buttons/filledButton/index.jsx';
import Flags from './flags';
import GradientLine from '../gradientLine';
import Image from 'next/image';
import InputField from '../InputField/index.jsx';
import IntegrationPage from "../../images/svgs/features.svg"
import LandingPage from '../../images/svgs/LandingPage.svg'
import { LandingPageText } from '../../strings';
import TextDiv from './textdiv';
import cn from 'classnames';
import style from './style.module.sass';

const HeroSection = () => {
    return(
        <div className = {style.heroSectionClass}>
            <Row gutter = {24}>
                <div  className = {cn(style.divParent)}>
                <Col span = {12}>
                    <div className = {style.divLeftColumn}>
                        <TextDiv TextB4ColorText = {LandingPageText.TextB4ColorText} TextColorText = {LandingPageText.TextColorText} TextAfterColorText = {LandingPageText.TextAfterColorText} TextAfterColorText2 = {LandingPageText.TextAfterColorText2}/>
                        <div style = {{paddingTop:"16px"}}/>
                        <Flags/>
                        <div style = {{paddingTop:"12px"}}/>
                        <span className = {style.TextClass}>
                        Centralized <b>Inventory, Orders, Shipments, and<br/> Accounting Software</b> for Multi-Channel Commerce
                        </span>
                        <div style = {{paddingTop:"20px"}}/>
                        <div className = {style.RowDivCenter}>
                            <GradientLine width = "100px" height="4px" />
                            <div style = {{paddingLeft:"10px"}}/>
                            <GradientLine width = "75px" height="4px"/>
                            <div style = {{paddingLeft:"10px"}}/>
                            <GradientLine width = "120px" height="4px"/>
                        </div>
                        <div style = {{paddingTop:"12px"}}/>
                        <div className = {style.FieldClass}>
                            <InputField placeHolder={"Enter Your Work Email"}/>
                        </div>
                        <div style = {{paddingTop:"24px"}}/>
                        <Row gutter = {10} style={{width: "100%"}}>
                            <Col span ={7}>
                                <div className = {cn(style.moveLeft)}>
                                    <CustomFilledButton children={<span className={cn(style.FilledButtonText)}>Start Free Trial</span>} handleClick={()=>{}}  />
                                </div>
                            </Col>
                            <Col span ={16} >
                            <span className = {cn(style.TextClassSmall,style.moveLeft)}>
                                Experience 14 Days of Free Trial, <br/>
                                No Credit Card Needed
                            </span>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col span = {12}>
                    <div className={cn(style.rightColumn)}>
                        <Image src = {LandingPage}/>
                    </div>
                    
                </Col>
                </div>
            </Row>
        </div>
    )
}

export default HeroSection;