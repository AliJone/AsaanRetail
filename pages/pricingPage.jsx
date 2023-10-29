import { App } from "antd"
import HeroSectionPricing from "../components/heroSectionPricing";
import SpecificRequirementPayment from "../components/specificReqPayment";

const page = () => {

    return(
        <>
            <App>
                
                <div style={{
                    overflowX: "hidden",
                    
                }}>
                    {/* <HeroSectionPricing/> */}
                    <SpecificRequirementPayment/>
                </div>
                
            </App>
        </>
    )
}

export default page;