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

const page = () => {
  return (
    <>
      <App>
        <div
          style={{
            overflowX: "hidden",
          }}
        >
          <NavigationBar />
          <HeroSectionPricing />
          <EnterpriseWithScroll />
          <SpecificRequirementPayment />
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
