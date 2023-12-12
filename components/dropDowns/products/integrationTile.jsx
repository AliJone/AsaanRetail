import { Col, Row } from "antd";

import CustomFilledButton from "../../buttons/filledButton";
import DropDownTile from "../../dropDownTile";
import Image from "next/image";
import Integration from "./assets/3.svg";
import { TilesProduct } from "../../../strings";
import classNames from "classnames";
import styles from "./style.module.sass";
import { useRouter } from "next/router";

const IntegrationTile = () => {
  // const integrationClass = classNames(styles.integrationButtonClass, styles.backGround);

  const router = useRouter();

  const handleIntegrationsClick = () => {
    router.push("/integrations");
  };

  return (
    <>
      <div className={styles.integrationTileContainer}>
        <div className={styles.integrationTileLogo}>
          <Image src={Integration} alt="Picture" />
        </div>
        <div className={styles.integrationTileTextContainer}>
          <h2 className={styles.integrationTileTitle}>Integrations</h2>
          <p className={styles.integrationTileContent}>
            Effortlessly integrate local couriers and sales channels in one
            central hub for streamlined operations
          </p>
        </div>

        <div>
          <CustomFilledButton
            children={
              <div className={styles.integrationTileButtonText}>View All</div>
            }
            handleClick={handleIntegrationsClick}
          />
        </div>
      </div>
    </>
  );
};
export default IntegrationTile;
