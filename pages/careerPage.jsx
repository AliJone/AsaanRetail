import { App } from "antd";
import ApplicationFormFeilds from "../components/ApplicationFormFeilds/ApplicationFormFeilds";
import HeroSectionApplication from "../components/HeroSectionApplication";
import HeroSectionCareer from "../components/HeroSectionCareer";
import InspiredWorkspace from "../components/InspiredWorkspace";
import NavigationBar from "../components/Navbar";

const page = () =>{
    return(
        <>
        <App>
            <div style={{
                overflowX: "hidden",
                
            }}>
                <NavigationBar/>
                {/* <HeroSectionCareer/> */}
                {/* <InspiredWorkspace/> */}
                <HeroSectionApplication/>
                {/* <ApplicationFormFeilds/> */}
            </div>
        </App>
        </>
    )
}

export default page;