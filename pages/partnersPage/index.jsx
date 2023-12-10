import ARPartnerProgram from "../../components/AR Partner Program";
import { App } from "antd";
import CTANew from "../../components/CTA new/CTANew";
import Footer from "../../components/Footer/Footer";
import HeroSectionPartners from "../../components/HeroSectionPartners";
import InspiredWorkspace from "../../components/InspiredWorkspace";
import InventoryManagement from "../../components/InventoryManagement/InventoryManagement";
import NavigationBar from "../../components/navbar";
import PartnersCarousel from "../../components/PartnersCarousel";
import Testimonials from "../../components/Testimonials/Testimonials";
import withScrollAnimation from "../../components/Animate/animate";

const HeroSectionPartnersWithScroll = withScrollAnimation(
  HeroSectionPartners,
  "animate__fadeInUp"
);

const PartnersCarouselWithScroll = withScrollAnimation(
  PartnersCarousel,
  "animate__fadeIn"
);

const InventoryManagementWithScroll = withScrollAnimation(
  InventoryManagement,
  "animate__fadeInUp"
);

const InspiredWorkspaceWithScroll = withScrollAnimation(
  InspiredWorkspace,
  "animate__fadeInUp"
);

const ARPartnerProgramWithScroll = withScrollAnimation(
  ARPartnerProgram,
  "animate__fadeInUp"
);

const TestimonialsWithScroll = withScrollAnimation(
  Testimonials,
  "animate__fadeInUp"
);

const CTANewWithScroll = withScrollAnimation(CTANew, "animate__fadeInUp");

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
          <HeroSectionPartnersWithScroll />
          <InventoryManagementWithScroll />
          <PartnersCarouselWithScroll />
          <InspiredWorkspaceWithScroll number={1} />
          <ARPartnerProgramWithScroll />
          <TestimonialsWithScroll />
          <CTANewWithScroll />
          <FooterWithScroll />
        </div>
      </App>
    </>
  );
};

export default page;
