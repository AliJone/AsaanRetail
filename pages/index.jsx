import {
  CarouselImages,
  useCaseSection1Text,
  useCaseSection2Text,
} from "../strings";

import { App } from "antd";
import CTA from "../components/CTA/CTA";
import CTANew from "../components/CTA new/CTANew";
import CTASection from "../components/ctaSection";
import Carousel from "../components/Carousel";
import Enterprise from "../components/Enterprise/Enterprise";
import FAQ from "../components/FAQ/FAQ";
import FeaturesSection from "../components/featuresSection";
import FeaturesV2 from "../components/FeaturesV2";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection";
import HeroSectionLanding from "../components/HeroSectionLandpage";
import IntegrationSection from "../components/IntegrationSection";
import NavigationBar from "../components/Navbar";
import Tabs from "../components/TabsRetail/TabsRetail";
import Testimonials from "../components/Testimonials/Testimonials";
import TextNAnimation from "../components/TextNAnimation/TextNAnimation";
import ThroughLense from "../components/ThroughLense/ThroughLense";
import UseCaseSection1 from "../components/usecaseSection1";
import UseCaseSection2 from "../components/usecaseSection2";
import VideoSection from "../components/videoSection";
import VideoSectionNew from "../components/videoSectionNew";

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
          <HeroSectionLanding />
          {/* <HeroSection /> */}
          <Carousel imagesarray={CarouselImages} />
          <IntegrationSection />

          {/* <FeaturesSection /> */}
          {/* <CTASection /> */}
          {/* <VideoSection /> */}

          <FeaturesV2 />
          <TextNAnimation Title={"Increase efficiency through automation"} SubTitle={"With Asaan Retail say goodbye to manual tasks, errors, and inefficiencies, and say hello to enhanced productivity and growth."} Animation={true} ButtonText={"Book a Demo"}/>

          <VideoSectionNew />
          {/* <TextNAnimation/> */}
          <Tabs />
          {/* <UseCaseSection1 Title={useCaseSection1Text.Title} image={useCaseSection1Text.image} subTitle={useCaseSection1Text.subTitle} options={useCaseSection1Text.items} />
                    <UseCaseSection2 Title={useCaseSection2Text.Title} image={useCaseSection2Text.image} subTitle={useCaseSection2Text.subTitle} options={useCaseSection2Text.items} /> */}
          <Testimonials />
          <ThroughLense />
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
