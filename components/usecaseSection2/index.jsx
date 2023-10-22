import { Col, Row } from "antd";

import GradientLine from "../gradientLine";
import Image from "next/image";
import React from "react";
import check2 from "../../images/svgs/icons/check2.svg";
import style from "./style.module.sass";

const UseCaseSection2 = ({image,Title,subTitle,options}) => {
    
    const TitleWithLineBreaks = Title.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <>
          {
            index === 0 ? <div style={{paddingLeft:"22%"}} ><GradientLine width={"196px"} height="15px" /></div> :<div style={{paddingLeft:"0"}} ><GradientLine width={"223px"} height="15px" /></div>
          }
          </>
        </React.Fragment>
      ));

    const subTitleWithLineBreaks = subTitle.split('\n').map((line, index) => (
    <React.Fragment key={index}>
        {line}
        <br />
    </React.Fragment>
    ));
    return(
        <div className={style.useCase2Div} >
            <span className={style.titleText}>
                {TitleWithLineBreaks}
            </span>
            <span className={style.subTitleClass}>
                {subTitleWithLineBreaks}
            </span>
            <div style = {{paddingTop : "64px"}}/>
            <Row gutter = {32} style = {{width : "100%"}}>
                <Col span = {12} >
                <div className={style.divLeftColumn}>
                       
                       {options.map((option,index) => (
                           <>
                               <div style = {{paddingTop : "20px", width :"1px"}}/>
                               <div className = {style.divColumn}>
                                   <Image src={check2} alt="CheckBox"/>
                                   <span className={style.divLeftColumnTitleOptionText}>
                                       {option.title}
                                   </span>
                               </div>
                               <span className={style.divLeftColumnTitleOptionContent}>
                                   {option.subTitle}
                               </span>
                               <div style = {{paddingTop : "20px" , width :"1px"}}/>
                               
                           </>
                       ))}
                   
               </div>

                    
                </Col>
                <Col span = {12} >

                    <div className={style.divRightColumn}>
                        
                        <Image src={image} alt="Image" className = {style.divImageClass}/>
                    </div>
                    
                </Col>

            </Row>

        </div>
    )
}

export default UseCaseSection2;