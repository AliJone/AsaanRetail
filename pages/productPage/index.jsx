import ARPartnerProgram from "../../components/AR Partner Program";
import { App } from "antd";
import CTANew from "../../components/CTA new/CTANew";
import Carousel from "../../components/Carousel";
import { CarouselImages } from "../../strings";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import HeroSectionProduct from "../../components/HeroSectionProduct";
import ImageTextGrid from "../../components/ImageTextGrid";
import InventoryManagement from "../../components/InventoryManagement/InventoryManagement";
import ManyMore from "../../components/ManyMore";
import NavigationBar from "../../components/Navbar";
import Testimonials from "../../components/Testimonials/Testimonials";

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
          <HeroSectionProduct />
          <Carousel imagesarray={CarouselImages} />
          <ImageTextGrid />
          <ManyMore />
          <InventoryManagement />
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
