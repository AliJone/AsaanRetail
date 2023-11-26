import {React, useState} from "react";

import Image from 'next/image';
import Sales from './assests/Sales.svg';
import Support from './assests/Support.svg';
import cn from 'classnames';
import limits from '../../styles/Limits.module.css';
import style from './styleSheet.module.sass';
import ContactUsFormFeilds from "../ContactUsFormFeilds/ContactUsFormFeilds";

const Card = ({title, logo , isActive, setActive , value}) => {
    return(
        <>
            <div className = {cn(style.Card , isActive == true? style.Active : null)} onClick={()=>setActive(value)}>
                <Image src={logo} alt="title"/>
                <p className={cn(style.CardTitle)}>{title}</p>
            </div>
        </>
    )

}

const HeroSectionContactUS = () => {
    const [Selector,setSelector] = useState(0);
    
    return(
    <>
        <div className={cn(style.HeroSection)}>
            <div className={cn(limits.Limit)}>
                <div className = {cn(style.TextContainer)}>
                    <div className = {cn(style.TitleContiner)}>
                        <p className={cn(style.TitleText, style.isDesktop)}><span className={cn(style.underLine)}>How can</span> we help you?</p>
                        <p className={cn(style.TitleText, style.isMobile)}>How can we <span className={cn(style.underLine2)}>help</span> you?</p>
                    </div>
                    <div className = {cn(style.subTitleContainer)}>
                        <p className={cn(style.subTitleText)}>Reach out to us for inquiries, support, or collaboration opportunities. </p>
                    </div>

                    <div className={cn(style.CardContainer)}>
                        <Card title = "Sales" logo = {Sales} isActive = {Selector===0} setActive={setSelector} value={0} />
                        <Card title = "Support" logo = {Support} isActive = {Selector===1} setActive={setSelector} value={1}/>
                    </div>

                </div>
            </div>

        </div>
                <ContactUsFormFeilds state={Selector}/>
    </>);
}

export default HeroSectionContactUS;