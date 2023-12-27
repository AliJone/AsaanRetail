import { App } from "antd";
import CTANew from "../../../components/CTA new/CTANew";
import Carousel from "../../../components/carousel";
import { CarouselImages } from "../../../strings";
import FAQ from "../../../components/FAQ/FAQ";
import Footer from "../../../components/Footer/Footer";
import HeroSectionProduct from "../../../components/HeroSectionProduct";
import ImageTextGrid from "../../../components/ImageTextGrid";
import InventoryManagement from "../../../components/InventoryManagement/InventoryManagement";
import ManyMore from "../../../components/ManyMore";
import NavigationBar from "../../../components/navbar";
import Testimonials from "../../../components/Testimonials/Testimonials";
import withScrollAnimation from "../../../components/Animate/animate";

import img1 from "../../../components/ImageTextGrid/assets/inventory-management/img1.png";
import img2 from "../../../components/ImageTextGrid/assets/inventory-management/img2.png";
import img3 from "../../../components/ImageTextGrid/assets/inventory-management/img3.png";

const data = [
  {
    title: "Inventory Audit <br /> Feature",
    leadingSubtitle: "Accuracy is Key with Asaan Retail:",
    listPointers: [
      "Quickly resolve discrepancies.",
      "Maintain trust with precise records.",
      "Streamline auditing for accuracy.",
    ],
    trailingSubtitle:
      "The era of spreadsheets is behind you.<br />Choose Asaan Retail for accurate inventory.",
    imageUrl: img1, // Replace with actual image path
  },
  {
    title: "Real time <br /> Inventory Sync",
    leadingSubtitle:
      "Stay in sync with Asaan Retail's Real-time Inventory Syncing:",
    listPointers: [
      "Keep your inventory updated instantly.",
      "Reflect changes across all locations seamlessly.",
      "Ensure synchronization for accurate operations.",
    ],
    trailingSubtitle:
      "Say hello to real-time control and success with Asaan Retail's Inventory Syncing.",
    imageUrl: img3, // Replace with actual image path
  },
  {
    title: "Stock <br /> Transfers",
    leadingSubtitle:
      "Seamlessly manage stock between locations with Asaan Retail:",
    listPointers: [
      "Efficiently allocate stock for demand.",
      "Optimize inventory distribution.",
      "Streamline inter-location stock movements.",
      "Improve order fulfillment times.",
    ],
    imageUrl: img2, // Replace with actual image path
  },

];

const HeroSectionProductWithScroll = withScrollAnimation(
  HeroSectionProduct,
  "animate__fadeInUp"
);

const CarouselWithScroll = withScrollAnimation(Carousel, "animate__fadeInUp");

// const ImageTextGridWithScroll = withScrollAnimation(
//   ImageTextGrid,
//   "animate__fadeInUp"
// );

const ManyMoreWithScroll = withScrollAnimation(ManyMore, "animate__fadeIn");

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
          <HeroSectionProductWithScroll />
          <CarouselWithScroll imagesarray={CarouselImages} />
          <ImageTextGrid data={data} />
          <ManyMoreWithScroll />
          <InventoryManagement />
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
