import { Button } from "antd";
import Check from "./assets/check.svg";
import Image from "next/image";
import QuestionCircleimg from "./assets/QuestionCircle.svg";
import Tag from "../tag";
import cn from "classnames";
import limit from "../../styles/Limits.module.css";
import styles from "./styles.module.sass";
import { useState } from "react";
import CustomFilledButton from "../buttons/filledButton";

const tiers = [
  { type: "Standard", price: "Rs 12,000" },
  { type: "Professional", price: "Rs 20,000" },
  { type: "Pro", price: "Rs 18,000" },
];

const features = [
  {
    name: "Sales Orders/Month",
    standard: "50",
    professional: "200",
    pro: "500",
  },
  {
    name: "Manage Company Portfolio",
    standard: "",
    professional: Checkmark(),
    pro: Checkmark(),
  },
  {
    name: "Manage Team Members",
    standard: "1",
    professional: "2",
    pro: "2",
  },
  {
    name: "Organization Management",
    standard: "",
    professional: "",
    pro: "",
  },
  {
    name: "Manage Company Portfolio",
    standard: "",
    professional: Checkmark(),
    pro: Checkmark(),
  },
  {
    name: "Manage Team Members",
    standard: "1",
    professional: "2",
    pro: "2",
  },
  {
    name: "Manage Team Members",
    standard: "1",
    professional: "2",
    pro: "2",
  },
  {
    name: "Manage Team Members",
    standard: "1",
    professional: "2",
    pro: "2",
  },
  {
    name: "Integrations",
    standard: "",
    professional: "",
    pro: "",
  },
  {
    name: "Manage Company Portfolio",
    standard: "",
    professional: Checkmark(),
    pro: Checkmark(),
  },
  {
    name: "Manage Team Members",
    standard: "1",
    professional: "2",
    pro: "2",
  },
  {
    name: "Manage Team Members",
    standard: "1",
    professional: "2",
    pro: "2",
  },
  {
    name: "Manage Team Members",
    standard: "1",
    professional: "2",
    pro: "2",
  },
  {
    name: "Manage Team Members",
    standard: "1",
    professional: "2",
    pro: "2",
  },
  {
    name: "Integrations",
    standard: "",
    professional: "",
    pro: "",
  },
  {
    name: "Manage Company Portfolio",
    standard: "",
    professional: Checkmark(),
    pro: Checkmark(),
  },
  {
    name: "Manage Team Members",
    standard: "1",
    professional: "2",
    pro: "2",
  },
  {
    name: "Manage Team Members",
    standard: "1",
    professional: "2",
    pro: "2",
  },
];

function QuestionCircle() {
  return (
    <Image
      className={styles.tableMobileView}
      styles={{ marginLeft: "0.3rem" }}
      src={QuestionCircleimg}
      alt="❔"
    />
  );
}

function Checkmark() {
  return <Image src={Check} alt="✔️" className={styles.checkMark} />;
}

function FeatureComparisonTable({ tabNumber }) {
  return (
    <table className={styles.table}>
      <tbody>
        {features.slice(0, 3).map((feature, index) => (
          <tr key={index} className={styles.row}>
            <td className={styles.rowTitle1}>
              {feature.name}
              <QuestionCircle />
            </td>
            <td className={cn(styles.rowElement1, styles.tableMobileView)}>
              {feature.standard}
            </td>
            <td className={styles.rowElement1}>{feature.professional}</td>
            <td className={cn(styles.rowElement1, styles.tableMobileView)}>
              {feature.pro}
            </td>
          </tr>
        ))}

        <tr className={styles.blackRowContainer}>
          <td className={styles.blackRowCategory}>Organization Management</td>
        </tr>

        {features.slice(4, 8).map((feature, index) => (
          <tr key={index} className={styles.row}>
            <td className={styles.rowTitle1}>
              {feature.name}
              <QuestionCircle />
            </td>
            <td className={cn(styles.rowElement1, styles.tableMobileView)}>
              {feature.standard}
            </td>
            <td className={styles.rowElement1}>{feature.professional}</td>
            <td className={cn(styles.rowElement1, styles.tableMobileView)}>
              {feature.pro}
            </td>
          </tr>
        ))}

        <tr className={styles.blackRowContainer}>
          <td className={styles.blackRowCategory}>Integrations</td>
        </tr>

        {features.slice(9, 14).map((feature, index) => (
          <tr key={index} className={styles.row}>
            <td className={styles.rowTitle1}>
              {feature.name}
              <QuestionCircle />
            </td>
            <td className={cn(styles.rowElement1, styles.tableMobileView)}>
              {feature.standard}
            </td>
            <td className={styles.rowElement1}>{feature.professional}</td>
            <td className={cn(styles.rowElement1, styles.tableMobileView)}>
              {feature.pro}
            </td>
          </tr>
        ))}

        <tr className={styles.blackRowContainer}>
          <td className={styles.blackRowCategory}>Integrations</td>
        </tr>

        {features.slice(15, 18).map((feature, index) => (
          <tr key={index} className={styles.row}>
            <td className={styles.rowTitle1}>
              {feature.name}
              <QuestionCircle />
            </td>
            <td className={cn(styles.rowElement1, styles.tableMobileView)}>
              {feature.standard}
            </td>
            <td className={styles.rowElement1}>{feature.professional}</td>
            <td className={cn(styles.rowElement1, styles.tableMobileView)}>
              {feature.pro}
            </td>
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
          {/* <Button className={styles.tierContainerCTA}>Get started</Button> */}

          <CustomFilledButton width={"11.785rem"}>
            Get started
          </CustomFilledButton>
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
            {/* <Button className={styles.tierContainerCTA}>Get started</Button> */}

            <CustomFilledButton width={"79.86%"}>
              <span className={styles.buttonText}>Get started</span>
            </CustomFilledButton>
          </div>
        </div>
      </div>
    </>
  );
}

const Tabs = (props) => {
  return (
    <>
      <div className={cn(styles.divTabsContainer)}>
        <div
          className={cn(styles.addPadding)}
          onClick={() => {
            props.handleClick(1);
          }}
        >
          <span
            className={
              props.tabNumber == 1
                ? cn(styles.Active, styles.tabFontActive)
                : cn(styles.inActive, styles.tabFontInActive)
            }
          >
            Standard
            <span />
          </span>
        </div>
        <div
          className={cn(styles.addPadding)}
          onClick={() => props.handleClick(2)}
        >
          <span
            className={
              props.tabNumber == 2
                ? cn(styles.Active, styles.tabFontActive)
                : cn(styles.inActive, styles.tabFontInActive)
            }
          >
            Professional
            <span />
          </span>
        </div>
        <div
          className={cn(styles.addPadding)}
          onClick={() => props.handleClick(3)}
        >
          <span
            className={
              props.tabNumber == 3
                ? cn(styles.Active, styles.tabFontActive)
                : cn(styles.inActive, styles.tabFontInActive)
            }
          >
            Pro
            <span />
          </span>
        </div>
      </div>
    </>
  );
};

function PriceTable() {
  const [tabNumber, setTabNumber] = useState(1);

  const handleTabClick = (tabNumber) => {
    setTabNumber(tabNumber);
  };

  return (
    <>
      <div className={styles.heroSection}>
        <div className={limit.Limit}>
          <div className={styles.spacer1} />

          {/* <Tag text="Compare plans" className={styles.tag} /> */}

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

          {/* <div className={styles.spacer} /> */}

          <div className={styles.subTitleContainer}>
            <span className={styles.subTitleText}>
              Explore our pricing options and find the perfect fit for your
              unique needs.
            </span>
          </div>

          <div className={styles.spacer3} />

          <div className={cn(styles.divTiersContainer, styles.mobileView)}>
            <div className={styles.tierContainerFiller}></div>
            {tiers.map((tier, index) => (
              <TierContainer key={index} type={tier.type} price={tier.price} />
            ))}
          </div>

          <div className={cn(styles.tabsFrame)}>
            <Tabs tabNumber={tabNumber} handleClick={handleTabClick} />
          </div>

          <div className={cn(styles.spacer4)} />

          <div className={cn(styles.divTiersContainer, styles.desktopView)}>
            <TierContainer
              type={tiers[tabNumber - 1].type}
              price={tiers[tabNumber - 1].price}
            />
          </div>

          {/* <div className={styles.spacer4} /> */}

          <div className={styles.tableContainer}>
            <FeatureComparisonTable tabNumber={tabNumber} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceTable;
