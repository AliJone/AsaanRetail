import PricingCard from './pricingCard';
import Tabs from './tabs';
import cn from 'classnames';
import limit from '../../styles/Limits.module.css';
import style from './styleSheet.module.sass';
import { useState } from 'react';

const HeroSectionPricing = () => {
    const [tabNumber, setTabNumber] = useState(1);

    const handleClick = (number)=>{
        setTabNumber(number);
    }

    const feature = [
        "50 sales orders/month incl.",
        "1 team member.",
        "No Setup Assistance.",
        "Inventory sync after 2 hours."
     ]
    
     const Title = [
        "Standard",
        "Premium",
        "Pro"
     ]
    
     const Price1 = [
        "$40/mo",
        "$60/mo",
        "$50/mo",
     ]

     const Price2 = [
        "$40/qtr",
        "$60/qtr",
        "$50/qtr",
     ]

     const Price3 = [
        "$40/yr",
        "$60/yr",
        "$50/yr",
     ]
    
     const Subtitle = [
        "Perfect plan for Starters",
        "Perfect plan for mid level businesses",
        "Perfect plan for Starters"
     ]
    

    return(
        <>
            <div className={cn(style.heroSection)}>
            <div className={cn(limit.Limit)}>
                <div className = {cn(style.spacer1)}/>
                
                <div className={cn(style.divTitleContainer)}>
                    <span className={cn(style.titleText)}>
                        Pricing for <span className={cn(style.titleDiv,style.underLine)}><span/>SMBs</span> to enterprises
                    </span>
                </div>
                <div className = {cn(style.spacer2)}/>
                <div className={cn(style.subTitleContainer)}>
                    <span className={cn(style.subTitleText)}>
                        Flexible plans to elevate your business
                    </span>
                </div>
                <div className = {cn(style.spacer3)}/>
                <div className={cn(style.tabsOnSectionDiv)} >
                    <Tabs tabNumber={tabNumber} handleClick={handleClick}/>
                </div>
                <div className = {cn(style.spacer4)}/>
                
                <div className = {cn(style.test)}>
                    <div className={cn(style.forBG)}>
                        <span/>
                    </div>
                </div>
                
                <div className = {cn(style.cardsOnSectionDiv)}>
                    <div className = {cn(style.mobileView,style.forCard)}>
                    <PricingCard features={feature} price={tabNumber === 1 ? Price1[1] : tabNumber==2 ? Price2[1] : Price3[1]} subtitle={Subtitle[1]} title={Title[1]} type = {1}/>
                    </div>

                    <PricingCard features={feature} price={tabNumber === 1 ? Price1[0] : tabNumber==2 ? Price2[0] : Price3[0]} subtitle={Subtitle[0]} title={Title[0]} type = {2}/>
                    <div className = {cn(style.desktopView,style.forCard)}>
                    <PricingCard features={feature} price={tabNumber === 1 ? Price1[1] : tabNumber==2 ? Price2[1] : Price3[1]} subtitle={Subtitle[1]} title={Title[1]} type = {1}/>
                    </div>
                    <PricingCard features={feature} price={tabNumber === 1 ? Price1[2] : tabNumber==2 ? Price2[2] : Price3[2]} subtitle={Subtitle[2]} title={Title[2]} type = {2}/>

                </div>
                </div>

            </div>

            <div className = {cn(style.spacer5)}/>
        </>
    )
}

 
export default HeroSectionPricing;