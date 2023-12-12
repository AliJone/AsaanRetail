import { App } from "antd";
import AppReady from "../../components/AppReady";
import CTANew from "../../components/CTA new/CTANew";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import HeroSectionCareer from "../../components/HeroSectionCareer";
import InspiredWorkspace from "../../components/InspiredWorkspace";
import LifeAtAsaanRetail from "../../components/LifeAtAR";
import NavigationBar from "../../components/navbar";
import OpenRoles from "../../components/OpenRoles";
import Testimonials from "../../components/Testimonials/Testimonials";
import withScrollAnimation from "../../components/Animate/animate";

const HeroSectionCareerWithScroll = withScrollAnimation(
  HeroSectionCareer,
  "animate__fadeInUp"
);

const InspiredWorkspaceWithScroll = withScrollAnimation(
  InspiredWorkspace,
  "animate__fadeInUp"
);

const LifeAtAsaanRetailWithScroll = withScrollAnimation(
  LifeAtAsaanRetail,
  "animate__fadeInUp"
);

const OpenRolesWithScroll = withScrollAnimation(OpenRoles, "animate__fadeInUp");

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
          <HeroSectionCareerWithScroll />
          <InspiredWorkspaceWithScroll number={0} />
          <LifeAtAsaanRetailWithScroll />
          <OpenRolesWithScroll />
          {/* <HeroSectionApplication />
          <ApplicationFormFeilds/> */}
          <TestimonialsWithScroll />
          {/* <ThroughLense /> */}
          {/* <Enterprise /> */}

          <FAQWithScroll />
          <CTANewWithScroll />
          {/* <CTA /> */}
          <FooterWithScroll />
        </div>
      </App>
    </>
  );
};

export default page;
