import { App } from "antd";
import HeroSectionIntegrationSection from "../components/HeroSectionIntegrationSection";
import NavigationBar from "../components/Navbar";

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

            </div>

        </App>
    )
}

export default page;