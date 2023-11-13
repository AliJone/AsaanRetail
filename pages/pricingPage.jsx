import { App } from "antd";
import CTANew from "../components/CTA new/CTANew";
import Enterprise from "../components/Enterprise/Enterprise";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import HeroSectionPricing from "../components/HeroSectionPricing";
import NavigationBar from "../components/Navbar";
import SpecificRequirementPayment from "../components/SpecificReqPayment";
import Testimonials from "../components/Testimonials/Testimonials";
import ThroughLense from "../components/ThroughLense/ThroughLense";
import PriceTable from "../components/priceTablePricing/PriceTable";

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
          <Enterprise />
          <SpecificRequirementPayment />
          <PriceTable />
          <ThroughLense />
          <Testimonials />

          <FAQ />
          <CTANew />
          <Footer />
        </div>
      </App>
    </>
  );
};

export default page;
