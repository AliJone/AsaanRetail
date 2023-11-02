import { App } from "antd"
import HeroSectionPricing from "../components/HeroSectionPricing";
import PriceTable from '../components/PriceTablePricing/PriceTable';
import SpecificRequirementPayment from "../components/SpecificReqPayment";

const page = () => {

    return(
        <>
            <App>
                
                <div style={{
                    overflowX: "hidden",
                    
                }}>
                    <HeroSectionPricing/>
                    <SpecificRequirementPayment/>
                    <PriceTable/>
                </div>
                
            </App>
        </>
    )
}

export default page;