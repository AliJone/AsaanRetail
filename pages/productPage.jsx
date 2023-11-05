import { App } from "antd"
import CTANew from '../components/CTA new/CTANew';
import Enterprise from '../components/Enterprise/Enterprise';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/Footer/Footer';
import HeroSectionPricing from "../components/HeroSectionPricing";
import InventoryManagement from "../components/InventoryManagement/InventoryManagement";
import ManyMore from "../components/ManyMore";
import NavigationBar from "../components/Navbar";
import PriceTable from '../components/PriceTablePricing/PriceTable';
import SpecificRequirementPayment from "../components/SpecificReqPayment";
import Testimonials from '../components/Testimonials/Testimonials';
import ThroughLense from '../components/ThroughLense/ThroughLense';

const page = () => {

    return(
        <>
            <App>
                
                <div style={{
                    overflowX: "hidden",
                    
                }}>
                    <NavigationBar/>
                    <ManyMore/>
                    {/* <InventoryManagement/>
                    <Testimonials />
                    <FAQ />
                    <CTANew />
                    <Footer /> */}
                </div>
                
            </App>
        </>
    )
}

export default page;