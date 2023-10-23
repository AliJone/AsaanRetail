import {CTASectionText} from "../../strings"
import CalendarOutlined from '@ant-design/icons/CalendarOutlined';
import CustomFilledButton from "../buttons/filledButton"
import GradientLine from "../gradientLine"
import Image from "next/image"
import React from "react"
import cn from "classnames"
import robot from "../../images/svgs/robot.svg"
import style from "./style.module.sass"

const CTASection = () =>{
    
    const TitleWithLineBreaks = CTASectionText.Title.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <>
          {
            index === 0 ? <div className={cn(style.FirstGradientLine)} ><GradientLine width={"inherit"} height=".4375rem" /></div> :<div className={cn(style.SecondGradientLine)} ><GradientLine width={"21rem"} height=".4375rem"/></div>
          }
          </>
        </React.Fragment>
      ));

    

    const subTitleWithLineBreaks = CTASectionText.subTitle.split('\n').map((line, index) => (
    <React.Fragment key={index}>
        {line}
        <br />
    </React.Fragment>
    ));


    return(
        <div className={cn(style.CTASectionDiv)}>
            <span className ={cn(style.titleClass)}>
                {TitleWithLineBreaks}
            </span>
            <div className={cn(style.spacer1)}/>
            <span className ={cn(style.subTitleClass, style.desktopView)}>
                {subTitleWithLineBreaks}
            </span>
            <span className ={cn(style.subTitleClass,style.mobileView)}>
                {CTASectionText.subTitle}
            </span>

            <div className={cn(style.spacer2)}/>
            <div className={cn(style.buttonShadowClass)}>
                <CustomFilledButton handleClick={()=>{}} children={<span className = {cn(style.buttonText)} > <CalendarOutlined /> Get Demo</span>} />
            </div>
            <div className={cn(style.RobotPositioningDivClass)}>
            <Image src = {robot} alt = "robot" />
            </div>
            <div className={cn(style.spacer3)}/>
        </div>
    )
}
export default CTASection