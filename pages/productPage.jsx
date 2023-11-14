import { App } from "antd";
import CTANew from "../components/CTA new/CTANew";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import ImageTextGrid from "../components/ImageTextGrid";
import InventoryManagement from "../components/InventoryManagement/InventoryManagement";
import ManyMore from "../components/ManyMore";
import NavigationBar from "../components/Navbar";
import Testimonials from "../components/Testimonials/Testimonials";

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
