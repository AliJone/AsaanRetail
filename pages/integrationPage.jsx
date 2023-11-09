import { App } from "antd";
import HeroSectionIntegrationSection from "../components/HeroSectionIntegrationSection";
import NavigationBar from "../components/Navbar";
import IntegrationMenu from "../components/IntegrationMenu/IntegrationMenu";

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
            </div>

        </App>
    )
}

export default page;