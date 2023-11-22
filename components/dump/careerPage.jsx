import { App } from "antd";
import ApplicationFormFeilds from "../ApplicationFormFeilds/ApplicationFormFeilds";
import CTANew from "../CTA new/CTANew";
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";
import HeroSectionApplication from "../HeroSectionApplication";
import HeroSectionCareer from "../HeroSectionCareer";
import InspiredWorkspace from "../InspiredWorkspace";
import LifeAtAsaanRetail from "../LifeAtAR";
import NavigationBar from "../Navbar";
import OpenRoles from "../OpenRoles";
import Testimonials from "../Testimonials/Testimonials";

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
          <InspiredWorkspace number={0}/>
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
