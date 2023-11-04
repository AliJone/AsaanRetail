import { App } from "antd";
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
                
            </div>
        </App>
        </>
    )
}

export default page;