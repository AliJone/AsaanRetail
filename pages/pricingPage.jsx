import { App } from "antd"
import HeroSectionPricing from "../components/heroSectionPricing";

const page = () => {

    return(
        <>
            <App>
                
                <div style={{
                    overflowX: "hidden",
                    
                }}>
                    <HeroSectionPricing/>
                </div>
                
            </App>
        </>
    )
}

export default page;