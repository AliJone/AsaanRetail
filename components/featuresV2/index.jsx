import Accounting from "./assests/Accounting.svg";
import FeatureCard from "./featureCard";
import GradientLine from "../gradientLine";
import Inventory from "./assests/Inventory.svg";
import Order from "./assests/Order.svg";
import PointOfSales from "./assests/PointOfSales.svg";
import Reporting from "./assests/Reporting.svg";
import Tag from "../tag";
import cn from "classnames";
import limit from "../../styles/Limits.module.css";
import style from "./styleSheet.module.sass";
import ScrollAnimation from "react-animate-on-scroll";
import warehouse from "./assests/warehouse.svg";
import { useRouter } from "next/router";

const FeaturesV2 = () => {
  const router = useRouter();

  return (
    <div className={cn(style.FeaturesV2Section)}>
      <div className={cn(limit.Limit)}>
        <div className={cn(style.spacer1)} />
        {/* / */}
        <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp">
          <div className={cn(style.tagContainer)}>
            <Tag text="Product" />
          </div>
        </ScrollAnimation>

        <div className={cn(style.spacer2)} />

        <ScrollAnimation
          style={{ width: "100%" }}
          animateIn="animate__fadeInUp"
          animateOnce={true}
        >
          <div className={cn(style.TitleContainer)}>
            <span className={cn(style.convertToRow)}>
              <h2 className={cn(style.TitleText)}>
                Features to <span className={cn(style.underLine)}>ignite</span>{" "}
                business growth!
              </h2>
            </span>
          </div>
        </ScrollAnimation>

        <div className={cn(style.spacer5)} />

        <ScrollAnimation
          style={{ width: "100%" }}
          animateIn="animate__fadeInUp"
          animateOnce={true}
        >
          <div className={cn(style.subTitleContainer, style.subTitleText)}>
            <span>
              <p>
                Prevent inventory losses, increase delivery times, and reduce
                accounting errors - all in one place!
              </p>
            </span>
          </div>
        </ScrollAnimation>

        <div className={cn(style.spacer3)} />
        <div className={cn(style.test)}>
          <div className={cn(style.forBG)}>
            <span />
          </div>
        </div>
        <div className={cn(style.featureCardFrame)}>
          <FeatureCard
            icon={Accounting}
            title="Inventory Management"
            description="With Asaan Retail, multichannel inventory management is no more a hassle. "
            handleClick={() => router.push("products/inventory-management")}
          />
          <FeatureCard
            icon={Order}
            title="Order Management"
            description="From creation to fulfilment, all your multi channel order management in one platform."
            handleClick={() => router.push("products/order-management")}
          />
          <FeatureCard
            icon={warehouse}
            title="Warehouse Management"
            description="Have a check on your inventory across multiple locations for efficiency and cost savings. "
            handleClick={() => router.push("products/shipping-management")}
          />

          <FeatureCard
            icon={Inventory}
            title="Accounting Management"
            description="Asaan Retail helps you to manage finances for small & large scale businesses."
            handleClick={() => router.push("products/accounting-management")}
          />
          <FeatureCard
            icon={Reporting}
            title="Reporting & Analytics"
            description="Gain valuable retail & ecommerce store analytics, and make data-driven decisions."
            handleClick={() => router.push("products/reporting")}
          />
          <FeatureCard
            icon={Order}
            title="Point of Sales (POS)"
            description="Asaan Retail is a complete Point of Sales system that also compliances taxes efficiently."
            handleClick={() => router.push("products/fbr-integrated-pos")}
          />
        </div>
        <div className={cn(style.spacer4)} />
      </div>
    </div>
  );
};

export default FeaturesV2;
