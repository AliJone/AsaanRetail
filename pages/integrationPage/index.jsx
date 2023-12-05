import { App } from "antd";
import CTANew from "../../components/CTA new/CTANew";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import HeroSectionIntegration from "../../components/HeroSectionIntegration";
import IntegrationMenu from "../../components/IntegrationMenu/IntegrationMenu";
import NavigationBar from "../../components/navbar";

const page = () => {
  return (
    <App>
      <div
        style={{
          overflowX: "hidden",
        }}
      >
        <NavigationBar />
        <HeroSectionIntegration />
        <IntegrationMenu />
        <FAQ />
        <CTANew />
        <Footer />
      </div>
    </App>
  );
};

export default page;
