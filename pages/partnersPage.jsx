import ARPartnerProgram from "../components/AR Partner Program";
import { App } from "antd";
import CTANew from '../components/CTA new/CTANew';
import Footer from '../components/Footer/Footer';
import HeroSectionPartners from "../components/HeroSectionPartners";
import InspiredWorkspace from '../components/InspiredWorkspace';
import InventoryManagement from "../components/InventoryManagement/InventoryManagement";
import NavigationBar from "../components/Navbar";
import PartnersCarousel from "../components/PartnersCarousel";
import Testimonials from '../components/Testimonials/Testimonials';

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

