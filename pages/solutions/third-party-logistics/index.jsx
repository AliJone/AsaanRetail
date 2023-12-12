import ARPartnerProgram from "../../../components/AR Partner Program";
import { App } from "antd";
import CTANew from "../../../components/CTA new/CTANew";
import Carousel from "../../../components/carousel";
import { CarouselImages } from "../../../strings";
import FAQ from "../../../components/FAQ/FAQ";
import Footer from "../../../components/Footer/Footer";
import HeroSectionProduct from "../../../components/HeroSectionProduct";
import HeroSectionSolution from "../../../components/HeroSectionSolution";
import ImageTextGrid from "../../../components/ImageTextGrid";
import InventoryManagement from "../../../components/InventoryManagement/InventoryManagement";
import ManyMore from "../../../components/ManyMore";
import NavigationBar from "../../../components/navbar";
import PartnersCarousel from "../../../components/PartnersCarousel";
import SuccessStories from "../../../components/SuccessStories/SuccessStories";
import Testimonials from "../../../components/Testimonials/Testimonials";
import withScrollAnimation from "../../../components/Animate/animate";

const HeroSectionSolutionWithScroll = withScrollAnimation(
  HeroSectionSolution,
  "animate__fadeInUp"
);

const CarouselWithScroll = withScrollAnimation(Carousel, "animate__fadeInUp");

const ImageTextGridWithScroll = withScrollAnimation(
  ImageTextGrid,
  "animate__fadeInUp"
);

const SuccessStoriesWithScroll = withScrollAnimation(
  SuccessStories,
  "animate__fadeInUp"
);

const PartnersCarouselWithScroll = withScrollAnimation(
  PartnersCarousel,
  "animate__fadeIn"
);

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
          <HeroSectionSolutionWithScroll />
          <CarouselWithScroll imagesarray={CarouselImages} />
          <ImageTextGridWithScroll />
          <SuccessStoriesWithScroll />
          <PartnersCarouselWithScroll />
          {/* <ManyMore /> */}
          {/* <InventoryManagement /> */}
          <TestimonialsWithScroll />
          <FAQWithScroll />
          <CTANewWithScroll />
          <FooterWithScroll />
        </div>
      </App>
    </>
  );
};

export default page;