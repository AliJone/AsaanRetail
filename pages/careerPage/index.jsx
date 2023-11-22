import { App } from "antd";
import ApplicationFormFeilds from "../../components/ApplicationFormFeilds/ApplicationFormFeilds";
import HeroSectionApplication from "../../components/HeroSectionApplication";
import HeroSectionCareer from "../../components/HeroSectionCareer";
import InspiredWorkspace from "../../components/InspiredWorkspace";
import NavigationBar from "../../components/Navbar";
import OpenRoles from "../../components/OpenRoles";
import LifeAtAsaanRetail from "../../components/LifeAtAR";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/FAQ";
import CTANew from "../../components/CTA new/CTANew";
import Footer from "../../components/Footer/Footer";

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
          <HeroSectionCareer />
          <InspiredWorkspace/>
          <LifeAtAsaanRetail />
          <OpenRoles />
          {/* <HeroSectionApplication />
          <ApplicationFormFeilds/> */}
           <Testimonials />
          {/* <ThroughLense /> */}
          {/* <Enterprise /> */}

          <FAQ />
          <CTANew />
          {/* <CTA /> */}
          <Footer />
        </div>
      </App>
    </>
  );
};

export default page;
