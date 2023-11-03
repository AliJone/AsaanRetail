import { App } from "antd";
import HeroSectionPricing from "../components/heroSectionPricing";
import PriceTable from "../components/priceTablePricing/PriceTable";
import SpecificRequirementPayment from "../components/specificReqPayment";

const page = () => {
  return (
    <>
      <App>
        <div
          style={{
            overflowX: "hidden",
          }}
        >
          <HeroSectionPricing />
          <SpecificRequirementPayment />
          <PriceTable />
        </div>
      </App>
    </>
  );
};

export default page;
