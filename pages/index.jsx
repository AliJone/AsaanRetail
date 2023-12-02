import {
  CarouselImages,
  useCaseSection1Text,
  useCaseSection2Text,
} from "../strings";

import { App } from "antd";
import CTA from "../components/CTA/CTA";
import CTANew from "../components/CTA new/CTANew";
import CTASection from "../components/ctaSection";
import Carousel from "../components/carousel";
import Enterprise from "../components/Enterprise/Enterprise";
import FAQ from "../components/FAQ/FAQ";
import FeaturesSection from "../components/featuresSection";
import FeaturesV2 from "../components/featuresV2";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection";
import HeroSectionLanding from "../components/HeroSectionLandpage";
import IntegrationSection from "../components/IntegrationSection";
import NavigationBar from "../components/navbar";
import Tabs from "../components/TabsRetail/TabsRetail";
import Testimonials from "../components/Testimonials/Testimonials";
import TextNAnimation from "../components/TextNAnimation/TextNAnimation";
import ThroughLense from "../components/ThroughLense/ThroughLense";
import UseCaseSection1 from "../components/usecaseSection1";
import UseCaseSection2 from "../components/usecaseSection2";
import VideoSection from "../components/videoSection";
import VideoSectionNew from "../components/videoSectionNew";
import withScrollAnimation from "../components/Animate/animate";

const HeroSectionWithScroll = withScrollAnimation(
  HeroSection,
  "animate__fadeInUp"
);
const HeroSectionLandingWithScroll = withScrollAnimation(
  HeroSectionLanding,
  "animate__fadeIn"
);
const CarouselWithScroll = withScrollAnimation(Carousel, "animate__fadeIn");
const IntegrationSectionWithScroll = withScrollAnimation(
  IntegrationSection,
  "animate__fadeIn"
);
const FeaturesV2WithScroll = withScrollAnimation(
  FeaturesV2,
  "animate__fadeInUp"
);
const TextNAnimationWithScroll = withScrollAnimation(
  TextNAnimation,
  "animate__fadeIn"
);
const VideoSectionNewWithScroll = withScrollAnimation(
  VideoSectionNew,
  "animate__fadeIn"
);
const TabsWithScroll = withScrollAnimation(Tabs, "animate__fadeIn");
const TestimonialsWithScroll = withScrollAnimation(
  Testimonials,
  "animate__fadeInUp"
);
const ThroughLenseWithScroll = withScrollAnimation(
  ThroughLense,
  "animate__fadeIn"
);
const FAQWithScroll = withScrollAnimation(FAQ, "animate__fadeInUp");

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
          <CarouselWithScroll imagesarray={CarouselImages} />
          <IntegrationSection />

          {/* <FeaturesSection /> */}
          {/* <CTASection /> */}
          {/* <VideoSection /> */}

          <FeaturesV2 />
          <TextNAnimation
            Title={"Increase efficiency through automation"}
            SubTitle={
              "With Asaan Retail say goodbye to manual tasks, errors, and inefficiencies, and say hello to enhanced productivity and growth."
            }
            Animation={true}
            ButtonText={"Book a Demo"}
          />

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
