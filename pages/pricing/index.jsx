import { useState } from "react";
import { App } from "antd";
import CTANew from "../../components/CTA new/CTANew";
import Enterprise from "../../components/Enterprise/Enterprise";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import HeroSectionPricing from "../../components/HeroSectionPricing";
import NavigationBar from "../../components/navbar";
import PriceTable from "../../components/priceTablePricing/PriceTable";
import SpecificRequirementPayment from "../../components/SpecificReqPayment";
import Testimonials from "../../components/Testimonials/Testimonials";
import ThroughLense from "../../components/ThroughLense/ThroughLense";
import withScrollAnimation from "../../components/Animate/animate";

const EnterpriseWithScroll = withScrollAnimation(Enterprise, "animate__fadeIn");

const ThroughLenseWithScroll = withScrollAnimation(
  ThroughLense,
  "animate__fadeInUp"
);

const TestimonialsWithScroll = withScrollAnimation(
  Testimonials,
  "animate__fadeInUp"
);

const FAQWithScroll = withScrollAnimation(FAQ, "animate__fadeInUp");

const CTANewWithScroll = withScrollAnimation(CTANew, "animate__fadeIn");

const FooterWithScroll = withScrollAnimation(Footer, "animate__fadeIn");

const pricingData = {
  featureProps: [
    "50 sales orders/month incl.",
    "1 team member.",
    "No Setup Assistance.",
    "Inventory sync after 2 hours.",
  ],
  titleProps: ["Standard", "Premium", "Pro"],
  priceProps: [
    [40, 60, 50], // Prices for the first tab
    [70, 80, 90], // Prices for the second tab
    [100, 120, 140], // Prices for the third tab
  ],
  unitProps: ["/mo", "/qtr", "/yr"],
  subtitleProps: [
    "Perfect plan for Starters",
    "Perfect plan for mid-level businesses",
    "Perfect plan for Starters",
  ],
  users: [500, 1000, 1500],
  Location: [1, 2, 3],
};

const page = () => {
  const [tabNumber, setTabNumber] = useState(1);
  return (
    <>
      <App>
        <div
          style={{
            overflowX: "hidden",
          }}
        >
          <NavigationBar />
          <HeroSectionPricing
            {...pricingData}
            tabNumber={tabNumber}
            setTabNumber={setTabNumber}
          />
          <EnterpriseWithScroll />
          <SpecificRequirementPayment
            tabNumberSelect={tabNumber}
            setTabNumberSelect={setTabNumber}
            {...pricingData}
          />
          <PriceTable />
          <ThroughLenseWithScroll />
          <TestimonialsWithScroll />
          <FAQWithScroll />
          <CTANewWithScroll />
          <FooterWithScroll />
        </div>
      </App>
    </>
  );
};

export default page;
