import ARPartnerProgram from "../AR Partner Program";
import { App } from "antd";
import CTANew from '../CTA new/CTANew';
import Footer from '../Footer/Footer';
import HeroSectionPartners from "../HeroSectionPartners";
import InspiredWorkspace from '../InspiredWorkspace';
import InventoryManagement from "../InventoryManagement/InventoryManagement";
import NavigationBar from "../Navbar";
import PartnersCarousel from "../PartnersCarousel";
import Testimonials from '../Testimonials/Testimonials';

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
            <HeroSectionPartners />
            <InventoryManagement />
            <PartnersCarousel />
            <InspiredWorkspace number={1} />
            <ARPartnerProgram/>
            <Testimonials />
            <CTANew />
            <Footer />


        </div>
      </App>
    </>
  );
};

export default page;

