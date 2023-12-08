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
          <HeroSectionSolution />
          <Carousel imagesarray={CarouselImages} />
          <ImageTextGrid />
          <SuccessStories />
          <PartnersCarousel />
          {/* <ManyMore /> */}
          {/* <InventoryManagement /> */}
          <Testimonials />
          <FAQ />
          <CTANew />
          <Footer />
        </div>
      </App>
    </>
  );
};

export default page;
