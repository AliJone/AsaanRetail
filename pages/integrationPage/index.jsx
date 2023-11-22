import { App } from "antd";
import HeroSectionIntegrationSection from "../../components/HeroSectionIntegrationSection";
import NavigationBar from "../../components/Navbar";
import IntegrationMenu from "../../components/IntegrationMenu/IntegrationMenu";
import FAQ from "../../components/FAQ/FAQ";
import CTANew from "../../components/CTA new/CTANew";
import Footer from "../../components/Footer/Footer";

const page = () =>{
    return(
        <App>
            <div
            style={{
                overflowX: "hidden",
            }} 
            >
                <NavigationBar/>
                <HeroSectionIntegrationSection/>
                <IntegrationMenu />
                <FAQ />
                <CTANew />
                <Footer />
            </div>

        </App>
    )
}

export default page;