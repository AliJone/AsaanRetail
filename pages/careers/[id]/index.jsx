import { App } from "antd";
import ApplicationFormFeilds from "../../../components/ApplicationFormFeilds/ApplicationFormFeilds";
import HeroSectionApplication from "../../../components/HeroSectionApplication";
import HeroSectionCareer from "../../../components/HeroSectionCareer";
import InspiredWorkspace from "../../../components/InspiredWorkspace";
import NavigationBar from "../../../components/navbar";
import OpenRoles from "../../../components/OpenRoles";
import LifeAtAsaanRetail from "../../../components/LifeAtAR";
import CTANew from "../../../components/CTA new/CTANew";
import Footer from "../../../components/Footer/Footer";

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
          {/* <HeroSectionCareer />
          <InspiredWorkspace/>
          <LifeAtAsaanRetail />
          <OpenRoles /> */}
          <HeroSectionApplication />
          {/* <ApplicationFormFeilds/> */}
          <CTANew />
          <Footer />
        </div>
      </App>
    </>
  );
};

export default page;
