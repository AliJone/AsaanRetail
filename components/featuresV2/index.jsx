import Accounting from './assests/Accounting.svg';
import FeatureCard from "./featureCard";
import GradientLine from "../gradientLine";
import Inventory from './assests/Inventory.svg';
import Order from './assests/Order.svg';
import PointOfSales from './assests/PointOfSales.svg';
import Reporting from './assests/Reporting.svg';
import Tag from "../tag";
import cn from "classnames";
import limit from '../../styles/Limits.module.css';
import style from "./styleSheet.module.sass";
import warehouse from './assests/warehouse.svg';

const FeaturesV2 = () =>{

    return(
        <div className={cn(style.FeaturesV2Section)}>
            <div className={cn(limit.Limit)}>
            <div className={cn(style.spacer1)}/>
            <div className={cn(style.tagContainer)}>
                <Tag text="Product"/>
            </div>
            <div className={cn(style.spacer2)}/>
            <div className={cn(style.TitleContainer)}>
                <span className={cn(style.convertToRow)}><h2 className={cn(style.TitleText)}>Features to <span className={cn(style.underLine)}>ignite</span> business growth!</h2></span>
                
                
            </div>
            <div className={cn(style.spacer5)}/>
            <div className={cn(style.subTitleContainer, style.subTitleText)}>
                <span >
                    <p>
                    Prevent inventory losses, increase delivery times, and reduce accounting errors - all in one place!
                    </p>
                </span>
            </div>
            <div className={cn(style.spacer3)}/>
            <div className = {cn(style.test)}>
                <div className={cn(style.forBG)}>
                    <span/>
                </div>
            </div>
            <div className={cn(style.featureCardFrame)}>
                <FeatureCard icon={Accounting} title="Inventory Management" description="With Asaan Retail, multichannel inventory management is no more a hassle. "/>
                <FeatureCard icon={Inventory} title="Inventory Management" description="Manage your inventory, track your stock, and prevent losses with our inventory management system."/>
                <FeatureCard icon={Order} title="Inventory Management" description="Manage your inventory, track your stock, and prevent losses with our inventory management system."/>
                <FeatureCard icon={Inventory} title="Inventory Management" description="Manage your inventory, track your stock, and prevent losses with our inventory management system."/>
                <FeatureCard icon={Reporting} title="Inventory Management" description="Manage your inventory, track your stock, and prevent losses with our inventory management system."/>
                <FeatureCard icon={warehouse} title="Inventory Management" description="Manage your inventory, track your stock, and prevent losses with our inventory management system."/>
            </div>
            <div className={cn(style.spacer4)}/>

            </div>
            
        </div>
    )

}

export default FeaturesV2;