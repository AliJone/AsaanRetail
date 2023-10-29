import PricingCard from './pricingCard';
import Tabs from './tabs';
import cn from 'classnames';
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
        "PKR 12,000/mo",
        "PKR 20,000/mo",
        "PKR 12,000/mo",
     ]

     const Price2 = [
        "PKR 48,000/qt",
        "PKR 80,000/qt",
        "PKR 48,000/qt",
     ]

     const Price3 = [
        "PKR 144,000/yr",
        "PKR 240,000/yr",
        "PKR 144,000/yr",
     ]
    
     const Subtitle = [
        "Perfect plan for Starters",
        "Perfect plan for mid level businesses",
        "Perfect plan for Starters"
     ]
    

    return(
        <>
            <div className={cn(style.heroSection)}>
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
                    <div className = {cn(style.mobileView)}>
                    <PricingCard features={feature} price={tabNumber === 1 ? Price1[1] : tabNumber==2 ? Price2[1] : Price3[1]} subtitle={Subtitle[1]} title={Title[1]} type = {1}/>
                    </div>

                    <PricingCard features={feature} price={tabNumber === 1 ? Price1[0] : tabNumber==2 ? Price2[0] : Price3[0]} subtitle={Subtitle[0]} title={Title[0]} type = {2}/>
                    <div className = {cn(style.desktopView)}>
                    <PricingCard features={feature} price={tabNumber === 1 ? Price1[1] : tabNumber==2 ? Price2[1] : Price3[1]} subtitle={Subtitle[1]} title={Title[1]} type = {1}/>
                    </div>
                    <PricingCard features={feature} price={tabNumber === 1 ? Price1[2] : tabNumber==2 ? Price2[2] : Price3[2]} subtitle={Subtitle[2]} title={Title[2]} type = {2}/>

                </div>

            </div>
        </>
    )
}

 
export default HeroSectionPricing;