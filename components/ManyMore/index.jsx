import CardManyMore from './cardManyMore';
import { Carousel } from 'antd';
import React from 'react';
import cn from 'classnames';
import limit from '../../styles/Limits.module.css';
import style from './styleSheet.module.sass';

const cardContent = [
    {'title':'Inventory Tracking Report', 'description':'Keep a keen eye on your inventory with comprehensive tracking reports. Gain valuable insights into stock movement.'},
    {'title':'Bundle your Products', 'description':'Boost sales with bundled products. Create enticing packages to attract more customers.'},
    {'title':'Inventory Forecasting', 'description':'Asaan Retail predicts stock requirements, helping you to prevent stockouts and overstocking.'},
    {'title':'Inventory Forecasting', 'description':'Asaan Retail predicts stock requirements, helping you to prevent stockouts and overstocking.'},
]
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const ManyMore =()=>{
    return(
        <>
        
            <div className = {cn(style.manyMoreSection)}>
            <div className={cn(limit.Limit , style.limitOverride)}>
                <div className = {cn(style.textContiner)}>
                    <span className={cn(style.titleText)}>& many <span className={cn(style.titeColorChangeText)}>more :&#41;</span> </span>
                </div>
                <div className = {cn(style.spacer1)}/>
                <div>
                <Carousel className={cn(style.CarouselClass)} autoplay>
                    <div>
                        <div className={cn(style.frameCards)}>
                            {cardContent.map((item, index) => {
                                return(
                                    <>
                                    {
                                        index !== cardContent.length-1 ? <CardManyMore title={item['title']} description={item['description']} /> : null
                                    }
                                    </>
                                );
                                
                            })}

                        </div>
                    </div>
                    <div>
                        <div className={cn(style.frameCards)}>
                        {cardContent.map((item, index) => {
                            return(
                                <>
                                    {
                                        index !== 0 ? <CardManyMore title={item['title']} description={item['description']} /> : null
                                    }
                                    </>
                            );
                            
                        })}
                        </div>
                    </div>
                </Carousel>
                </div>
                </div>
            </div>
        </>
    );
};
export default ManyMore;