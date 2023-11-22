import { App } from "antd";
import ApplicationFormFeilds from "../../components/ApplicationFormFeilds/ApplicationFormFeilds";
import CTANew from "../../components/CTA new/CTANew";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import HeroSectionApplication from "../../components/HeroSectionApplication";
import HeroSectionCareer from "../../components/HeroSectionCareer";
import InspiredWorkspace from "../../components/InspiredWorkspace";
import LifeAtAsaanRetail from "../../components/LifeAtAR";
import NavigationBar from "../../components/Navbar";
import OpenRoles from "../../components/OpenRoles";
import Testimonials from "../../components/Testimonials/Testimonials";
import AppReady from "../../components/AppReady";
import AppError from "../../components/AppError";

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
          <InspiredWorkspace number={0} />
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
