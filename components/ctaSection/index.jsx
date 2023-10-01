import {CTASectionText} from "../../strings"
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
            index === 0 ? <div style={{paddingLeft:"43%"}} ><GradientLine width={"278px"} /></div> :<div ><GradientLine width={"336px"} /></div>
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
            <div style={{paddingTop:"8px",width:"1px"}}/>
            <span className ={cn(style.subTitleClass)}>
                {subTitleWithLineBreaks}
            </span>
            <div style= {{paddingTop: "32px" , width:"1px"}}/>
            <div className={cn(style.buttonShadowClass)}>
                <CustomFilledButton handleClick={()=>{}} children={<span className = {cn(style.buttonText)} > Get Demo</span>} />
            </div>
            <div className={cn(style.RobotPositioningDivClass)}>
            <Image src = {robot} alt = "robot" />
            </div>
        </div>
    )
}
export default CTASection