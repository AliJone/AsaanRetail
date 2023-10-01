import { Col, Row } from "antd";

import GradientLine from "../gradientLine";
import Image from "next/image";
import React from "react";
import check2 from "../../images/svgs/icons/check2.svg";
import style from "./style.module.sass";

const UseCaseSection1 = ({image,Title,subTitle,options}) => {
    
    const TitleWithLineBreaks = Title.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <>
          {
            index === 0 ? <div style={{paddingLeft:"26%"}} ><GradientLine width={"279px"} /></div> :<div style={{paddingLeft:"48%"}} ><GradientLine width={"303px"} /></div>
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
        <div className={style.useCase1Div} >
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
                    <Image src={image} alt="Image" className = {style.divImageClass}/>
                    </div>
                </Col>
                <Col span = {12} >
                    <div className={style.divRightColumn}>
                       
                            {options.map((option,index) => (
                                <>
                                    <div style = {{paddingTop : "20px", width :"1px"}}/>
                                    <div className = {style.divColumn}>
                                        <Image src={check2} alt="CheckBox"/>
                                        <span className={style.divRightColumnTitleOptionText}>
                                            {option.title}
                                        </span>
                                    </div>
                                    <span className={style.divRightColumnTitleOptionContent}>
                                        {option.subTitle}
                                    </span>
                                    <div style = {{paddingTop : "20px" , width :"1px"}}/>
                                    
                                </>
                            ))}
                        
                    </div>
                </Col>

            </Row>

        </div>
    )
}

export default UseCaseSection1;