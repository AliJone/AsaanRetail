import { App } from "antd";
import CTANew from "../../components/CTA new/CTANew";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import HeroSectionIntegration from "../../components/HeroSectionIntegration";
import IntegrationMenu from "../../components/IntegrationMenu/IntegrationMenu";
import NavigationBar from "../../components/navbar";
import withScrollAnimation from "../../components/Animate/animate";

const HeroSectionIntegrationWithScroll = withScrollAnimation(
  HeroSectionIntegration,
  "animate__fadeInUp"
);

const IntegrationMenuWithScroll = withScrollAnimation(
  IntegrationMenu,
  "animate__fadeInUp"
);

const FAQWithScroll = withScrollAnimation(FAQ, "animate__fadeInUp");

const CTANewWithScroll = withScrollAnimation(CTANew, "animate__fadeIn");

const FooterWithScroll = withScrollAnimation(Footer, "animate__fadeIn");

const page = () => {
  return (
    <App>
      <div
        style={{
          overflowX: "hidden",
        }}
      >
        <NavigationBar />
        <HeroSectionIntegrationWithScroll />
        <IntegrationMenu />
        <FAQWithScroll />
        <CTANewWithScroll />
        <FooterWithScroll />
      </div>
    </App>
  );
};

export default page;
