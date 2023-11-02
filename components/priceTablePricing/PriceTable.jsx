import { Button } from "antd";
import Check from './assets/check.svg'
import Image from "next/image";
import QuestionCircleimg from "./assets/QuestionCircle.svg";
import cn from "classnames";
import styles from "./styles.module.sass";

const tiers = [
  { type: "Standard", price: "Rs 12,000" },
  { type: "Professional", price: "Rs 20,000" },
  { type: "Pro", price: "Rs 18,000" },
];

const features = [
  {
    name: "Sales Orders/Month",
    column1: "50",
    column2: "200",
    column3: "500",
  },
  {
    name: "Manage Company Portfolio",
    column1: "",
    column2: Checkmark(),
    column3: Checkmark(),
  },
  {
    name: "Manage Team Members",
    column1: "1",
    column2: "2",
    column3: "2",
  },
  {
    name: "Organization Management",
    column1: "",
    column2: "",
    column3: "",
    column4: "",
    column5: "",
  },
  {
    name: "Manage Company Portfolio",
    column1: "",
    column2: Checkmark(),
    column3: Checkmark(),
    column4: Checkmark(),
    column5: Checkmark(),
  },
  {
    name: "Manage Team Members",
    column1: "1",
    column2: "2",
    column3: "2",
    column4: "2",
    column5: "5",
  },
  {
    name: "Manage Team Members",
    column1: "1",
    column2: "2",
    column3: "2",
    column4: "2",
    column5: "5",
  },
  {
    name: "Manage Team Members",
    column1: "1",
    column2: "2",
    column3: "2",
    column4: "2",
    column5: "5",
  },
  {
    name: "Integrations",
    column1: "",
    column2: "",
    column3: "",
    column4: "",
    column5: "",
  },
  {
    name: "Manage Company Portfolio",
    column1: "",
    column2: Checkmark(),
    column3: Checkmark(),
    column4: Checkmark(),
    column5: Checkmark(),
  },
  {
    name: "Manage Team Members",
    column1: "1",
    column2: "2",
    column3: "2",
    column4: "2",
    column5: "5",
  },
  {
    name: "Manage Team Members",
    column1: "1",
    column2: "2",
    column3: "2",
    column4: "2",
    column5: "5",
  },
  {
    name: "Manage Team Members",
    column1: "1",
    column2: "2",
    column3: "2",
    column4: "2",
    column5: "5",
  },
  {
    name: "Manage Team Members",
    column1: "1",
    column2: "2",
    column3: "2",
    column4: "2",
    column5: "5",
  },
  {
    name: "Integrations",
    column1: "",
    column2: "",
    column3: "",
    column4: "",
    column5: "",
  },
  {
    name: "Manage Company Portfolio",
    column1: "",
    column2: Checkmark(),
    column3: Checkmark(),
    column4: Checkmark(),
    column5: Checkmark(),
  },
  {
    name: "Manage Team Members",
    column1: "1",
    column2: "2",
    column3: "2",
    column4: "2",
    column5: "5",
  },
  {
    name: "Manage Team Members",
    column1: "1",
    column2: "2",
    column3: "2",
    column4: "2",
    column5: "5",
  },
];

function QuestionCircle() {
  return <Image src={QuestionCircleimg}  alt="abc" />;
}

function Checkmark() {
  return <Image src={Check} alt="abc" />;
}

function FeatureComparisonTable() {
  return (
    <table className={styles.table}>
      <tbody>
        {features.slice(0, 3).map((feature, index) => (
          <tr key={index} className={styles.row}>
            <td className={styles.rowTitle1}>
              {feature.name}
              <QuestionCircle />
            </td>
            <td className={styles.rowElement1}>{feature.column1}</td>
            <td className={styles.rowElement1}>{feature.column2}</td>
            <td className={styles.rowElement1}>{feature.column3}</td>
          </tr>
        ))}

        <tr className={styles.blackRowContainer}>
          <td className={styles.blackRowCategory}>Organization Management</td>
        </tr>

        {features.slice(4, 8).map((feature, index) => (
          <tr key={index} className={styles.row}>
            <td className={styles.rowTitle2}>{feature.name}</td>
            <td className={styles.rowElement2}>{feature.column1}</td>
            <td className={styles.rowElement2}>{feature.column2}</td>
            <td className={styles.rowElement2}>{feature.column3}</td>
            <td className={styles.rowElement2}>{feature.column4}</td>
            <td className={styles.rowElement2}>{feature.column5}</td>
          </tr>
        ))}

        <tr className={styles.blackRowContainer}>
          <td className={styles.blackRowCategory}>Integrations</td>
        </tr>

        {features.slice(9, 14).map((feature, index) => (
          <tr key={index} className={styles.row}>
            <td className={styles.rowTitle2}>{feature.name}</td>
            <td className={styles.rowElement2}>{feature.column1}</td>
            <td className={styles.rowElement2}>{feature.column2}</td>
            <td className={styles.rowElement2}>{feature.column3}</td>
            <td className={styles.rowElement2}>{feature.column4}</td>
            <td className={styles.rowElement2}>{feature.column5}</td>
          </tr>
        ))}

        <tr className={styles.blackRowContainer}>
          <td className={styles.blackRowCategory}>Integrations</td>
        </tr>

        {features.slice(15, 18).map((feature, index) => (
          <tr key={index} className={styles.row}>
            <td className={styles.rowTitle2}>{feature.name}</td>
            <td className={styles.rowElement2}>{feature.column1}</td>
            <td className={styles.rowElement2}>{feature.column2}</td>
            <td className={styles.rowElement2}>{feature.column3}</td>
            <td className={styles.rowElement2}>{feature.column4}</td>
            <td className={styles.rowElement2}>{feature.column5}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function TierContainer({ type, price }) {
  return (
    <>
      {/* dektop view */}
      <div className={cn(styles.tierContainer, styles.mobileView)}>
        <div className={styles.tierContainerType}>{type}</div>
        <div className={styles.tierPriceContainer}>
          <span className={styles.tierContainerPrice1}>{price}</span>
          <span className={styles.tierContainerPrice2}>/mo</span>
        </div>
        <div className={styles.tierContainerButton}>
          <Button className={styles.tierContainerCTA}>Get started</Button>
        </div>
      </div>

      {/* mobile view */}
      <div className={cn(styles.tierContainer, styles.desktopView)}>
        <div className={styles.innerTierContainer}>
          <div className={styles.tierContainerType}>
            {type}
            <div>
              <span className={styles.tierContainerPrice1}>{price}</span>
              <span className={styles.tierContainerPrice2}>/mo</span>
            </div>
          </div>

          <div className={styles.tierContainerButton}>
            <Button className={styles.tierContainerCTA}>Get started</Button>
          </div>
        </div>
      </div>
    </>
  );
}

function PriceTable() {
  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.spacer1} />

        <div className={styles.divTitleContainer}>
          <span className={styles.titleText}>
            See what{" "}
            <span className={cn(styles.titleDiv, styles.underLine)}>
              <span />
              suits
            </span>{" "}
            your business
          </span>
        </div>

        <div className={styles.spacer2} />

        <div className={styles.subTitleContainer}>
          <span className={styles.subTitleText}>
            Explore our pricing options and find the perfect fit for your unique
            needs.
          </span>
        </div>

        <div className={styles.spacer3} />

        <div className={cn(styles.divTiersContainer, styles.mobileView)}>
          <div className={styles.tierContainerFiller}></div>
          {tiers.map((tier, index) => (
            <TierContainer key={index} type={tier.type} price={tier.price} />
          ))}
        </div>

        <div className={cn(styles.divTiersContainer, styles.desktopView)}>
          <TierContainer type={tiers[0].type} price={tiers[0].price} />
        </div>

        <div className={styles.spacer4} />

        <div className={styles.tableContainer}>
          <FeatureComparisonTable />
        </div>
      </div>
    </>
  );
}

export default PriceTable;
